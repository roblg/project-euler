/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package com.roblg.euler;

import com.roblg.euler.soln.Solution;

import java.lang.reflect.InvocationTargetException;
import java.util.Optional;
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        boolean looped = false;
        fmtOutput("Problem to solve (q to quit)> ");
        while (in.hasNextLine()) {
            if (looped) {
                fmtOutput("Problem to solve (q to quit)> ");
            }
            looped = true;
            String line = in.nextLine();
            if (line.toLowerCase().startsWith("q")) {
                break;
            }
            Optional<Integer> solnNumber = parseInteger(line);
            if (solnNumber.isEmpty()) {
                fmtOutput("err: non-parseable solution number: %s\n", line);
                continue;
            }
            Optional<Class<?>> solnClass = findSolution(solnNumber.get());
            if (solnClass.isEmpty()) {
                fmtOutput("err: no solution to Problem %d found\n", solnNumber.get());
                continue;
            }
            try {
                if (solnClass.get().getDeclaredConstructor().newInstance() instanceof Solution soln) {
                    fmtOutput("Solution: %d", soln.calculate());
                } else {
                    throw new IllegalStateException(
                            String.format(
                                    "Found Problem #%d solution that doesn't implement Solution",
                                    solnNumber.get()));
                }
            } catch (InstantiationException | IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
                fmtOutput(
                        "Unrecoverable error loading solution to Problem #%d. This is probably a code issue.\n",
                        solnNumber.get());
            } catch (Exception e) {
                fmtOutput(
                        "Unrecoverable error loading solution to Problem #%d. This is probably a code issue.\n",
                        solnNumber.get());
                e.printStackTrace(System.err);
            }
        }
    }

    private static void fmtOutput(String template, Object... args) {
        System.out.format(template, args);
        System.out.flush();
    }

    private static Optional<Integer> parseInteger(String longStr) {
        try {
            return Optional.of(Integer.parseInt(longStr));
        } catch (NumberFormatException e) {
            return Optional.empty();
        }
    }

    private static Optional<Class<?>> findSolution(Integer solnNumber) {
        String expectedSolnClass = String.format("com.roblg.euler.soln.Problem%d", solnNumber);
        try {
            return Optional.of(Class.forName(expectedSolnClass));
        } catch (ClassNotFoundException e) {
            return Optional.empty();
        }
    }
}
