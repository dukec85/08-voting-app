import calculatePercent from 'voting/calculate-percent';
import totalVotes from 'voting/total-votes';

export default function percentVotes(options, index) {
  let x = (options[index].votes);
  let y = (totalVotes(options));

  return calculatePercent(x, y);

}
