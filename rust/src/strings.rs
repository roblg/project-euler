
pub fn is_palindrome(s : &String) -> bool {
    if s.is_empty() {
        return false
    }

    let half = s.len() / 2;
    s.bytes().take(half).eq(s.bytes().rev().take(half))
}