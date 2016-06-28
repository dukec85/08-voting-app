import shouldSplit from 'blackjack/should-split';
import cardSum from 'blackjack/card-sum';
import cardValue from 'blackjack/card-value';
import shouldHit from 'blackjack/should-hit';

export default function selectAction(cardA, cardB) {

  if (shouldHit(cardA, cardB)) {
    return 'hit';
  } else if (shouldSplit(cardA, cardB)) {
    return 'split';
  }
  return 'stay';
}
