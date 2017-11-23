#!/usr/bin/env node
//const fs = require('fs');
const jsonfile = require('jsonfile');


var JSONPath = '';

module.exports.helloWorld = ()=>console.log('Hello World');

const setPath = (path)=>{
  JSONPath=path;
};

const JSONEdit = (JSONEdited)=>{
  console.log('esta en el edit');
  console.log(JSONPath);
  console.log('el valor de appName: ',JSONEdited.appName);
  if(JSONPath){
    console.log('entro al if del edit');
    jsonfile.writeFile(JSONPath, JSONEdited,(err)=>{if (err) return console.log(err);});
  }
};

const JSONData = ()=>{
  return require(JSONPath);
};
module.exports.JSONPath = JSONPath;
module.exports.setPath = setPath;
module.exports.JSONEdit = JSONEdit;
module.exports.JSONData = JSONData;
