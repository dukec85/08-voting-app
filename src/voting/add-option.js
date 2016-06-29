export default function addOption(existingPoll, optionName) {
  let newArr = [];

  for (let i = 0; i < existingPoll.length; i++) {
    newArr.push(existingPoll[i]);
  }

  newArr.push({
    name: optionName,
    votes: 0
  });

  return newArr;
}
