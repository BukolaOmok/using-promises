const { prompt } = require('enquirer');

prompt({
  type: "autocomplete",
  name: 'flavor',
  message: 'Pick your favorite flavor',
  limit: 10,
  initial: 2,
  choices: ['Almond','Apple','Banana','Blackberry','Blueberry']
}).then(handleResult);

function handleResult (answer){
    console.log("Answer:", answer)
}