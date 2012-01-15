
import os.path

def card_value_int(card):
    v = value_from_card(card)
    if v == 'A':
        return 14
    if v == 'K':
        return 13
    if v == 'Q':
        return 12
    if v == 'J':
        return 11
    if v == 'T':
        return 10
    return ord(v) - ord('0')

def value_from_card(c):
    "Extract the value from the given card"
    return c[0]

def suit_from_card(c):
    "Extract the suit from the given card"
    return c[1]

def card_val_to_occurences_dict(hand):
    from collections import defaultdict
    val_map = defaultdict(lambda: 0)
    for v in map(value_from_card, hand):
        val_map[v] += 1
    return val_map

def get_pairs(hand):
    val_map = card_val_to_occurences_dict(hand)
    return [k for k in val_map if val_map[k] == 2]



def is_royal_flush(hand):
    return is_straight_flush(hand) and \
        value_from_card(high_card(hand)) == 'A'

def is_straight_flush(hand):
    return is_flush(hand) and is_straight(hand)
    
def is_four_of_a_kind(hand):
    return 4 in card_val_to_occurences_dict(hand).values()

def is_full_house(hand):
    val_map = card_val_to_occurences_dict(hand)
    return 3 in val_map.values() and 2 in val_map.values() 
    
def is_flush(hand):
    "It's a flush if there's only one suit"
    return len(set(map(suit_from_card, hand))) == 1

def is_straight(hand):
    """
    It's a straight if you've got 5 distinct values and 
    the difference between the largest and smallest is 4
    """
    vals = sorted(hand, key=card_value_int)
    num_vals = len(set(map(value_from_card, vals)))
    return num_vals == 5 and \
        card_value_int(vals[4]) - card_value_int(vals[0]) == 4

def three_of_a_kind(hand):
    return 3 in card_val_to_occurences_dict(hand).values()
    
def is_two_pair(hand):
    return len(get_pairs(hand)) == 2
    
def is_one_pair(hand):
    """
    If there are only four unique values in the hand,
    one must be duplicated. It's the pigeonhole 
    principle, or something like that
    """
    return len(get_pairs(hand)) == 1

def high_card(hand):
    return max(hand, key=card_value_int)

def rank_hand(hand):
    
    result = is_royal_flush(hand)
    if result:
        return (10,)
    
    result = is_straight_flush(hand)
    if result:
        return (9, value_from_card(high_card(hand)))
    
    result = is_four_of_a_kind(hand)
    if result:
        val_map = card_val_to_occurences_dict(hand)
        val = [v for v in val_map if val_map[v] == 4][0]
        return (8, val)
    
    result = is_full_house(hand)
    if result:
        val_map = card_val_to_occurences_dict(hand)
        high_val = [v for v in val_map if val_map[v] == 3][0]
        low_val = [v for v in val_map if val_map[v] == 2][0]
        return (7, high_val, low_val)
    
    result = is_flush(hand)
    if result:
        return (6, value_from_card(high_card(hand)))
    
    result = is_straight(hand)
    if result:
        return (5, value_from_card(high_card(hand)))
    
    result = three_of_a_kind(hand)
    if result:
        val_map = card_val_to_occurences_dict(hand)
        triple = [v for v in val_map if val_map[v] == 3][0]
        return (4, triple)
    
    result = is_two_pair(hand)
    if result:
        pairs = get_pairs(hand)
        high_pair_val = max(pairs, key=card_value_int)
        low_pair_val = min(pairs, key=card_value_int)
        hand_without_pairs = [c for c in hand if value_from_card(c) not in pairs]
        return (3, high_pair_val, low_pair_val, value_from_card(hand_without_pairs[0]))
    
    result = is_one_pair(hand)
    if result:
        pairs = get_pairs(hand)
        hand_without_pair = [c for c in hand if value_from_card(c) not in pairs]
        return (2, pairs[0], value_from_card(high_card(hand_without_pair)))

    return (1, value_from_card(high_card(hand)))    


def solve(rounds):
    """
    Count the number of hands Player 1 won
    """
    
    win = 0
    loss = 0
    tie = 0
    
    for round in rounds:
        p1 = rank_hand(round[0])
        p2 = rank_hand(round[1])
        
        if p1[0] > p2[0]:
            win += 1
        elif p1[0] < p2[0]:
            loss += 1
        else:
            tiebreakers = zip(p1[1::], p2[1::])
            broke_tie = False
            for tb in tiebreakers:
                if card_value_int(tb[0]) > card_value_int(tb[1]):
                    win += 1
                    broke_tie = True
                    break
                if card_value_int(tb[0]) < card_value_int(tb[1]):
                    loss += 1
                    broke_tie = True
                    break
            if not broke_tie:
                # we don't actually have one in the input, but if we were to
                # have both players get a royal flush, that would be a true tie
                tie += 1
                 
    print "W: %d, L: %d, T: %d" % (win, loss, tie)
        

if __name__ == '__main__':
    script_dir = os.path.dirname(__file__)
    input_file = os.path.join(script_dir, 'input', 'problem54.txt')

    rounds = []

    for line in open(input_file):
        cards = line.rstrip().split(' ')
        p1_hand = [cards[i] for i in xrange(0, 5)]
        p2_hand = [cards[i] for i in xrange(5, 10)]
        rounds.append((p1_hand, p2_hand))
        
    solve(rounds)
    
