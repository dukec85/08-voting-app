export default function incrementVote(existingPoll, optionIndex) {
  let collector = [];
  var newObject = {};

  for (let i = 0; i < existingPoll.length; i++) {
    newObject = {
      name: `${existingPoll[i].name}`,
      votes: existingPoll[i].votes
    };
    collector.push(newObject);
  }

  collector[optionIndex].votes++;

  return collector;

}
