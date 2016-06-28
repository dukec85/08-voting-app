import shouldSplit from 'blackjack/should-split';
import cardSum from 'blackjack/card-sum';
import cardValue from 'blackjack/card-value';

export default function shouldHit(cardA, cardB) {
  if (!shouldSplit(cardA, cardB) && cardSum(cardValue(cardA), cardValue(cardB)) < 17) {
    return true;
  }
  return false;
}
