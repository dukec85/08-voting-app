export default function totalVotes(options) {

  let total = 0;

  for (let i = 0; i < options.length; i++) {
    total = total + options[i].votes;
  }

  return total;
}
