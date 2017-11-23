#!/usr/bin/env node
require('colors');
const prompt = require('prompt');

var menuSchema = {
  properties:{
    menuOption:{
      description:'Enter Option:',
      message:'it isnt valid option',
      required:true,
      pattern:/^[1239]+$/

    }
  }
}
function menuShow(){
  //console.log('\033[2J'); //limpia pero no vuelve a cero el curzor


  //this do clean interface or window
  console.log("\u001b[2J\u001b[0;0H");

  titleProgram();
  prompt.message = '>';
  prompt.delimiter='';
  console.log('Select Option');
  console.log(' 1 - Add Entity'.blue);
  console.log(' 2 - Show 1 level to attributes'.blue);
  console.log(' 3 - Show Entities'.blue);
  console.log(' 4 - Set JSONPath'.blue);
  console.log(' 9 - Exit'.red);
  prompt.get(menuSchema,(err,result)=>{
    console.log(result.menuOption);
    if(result.menuOption!='9'){
      switch (result.menuOption) {
        case '1':
          return '';
        case '2':
          return '';
        case '3':
          return '';
        case '4':
          return '';
      }
      menuShow();
    }
    else{
    console.log('Goodbye!');
    }
  });
}

function titleProgram(){
  console.log('                     [-------- Vault IT --------]                     '.bgBlue.white.bold);
}
