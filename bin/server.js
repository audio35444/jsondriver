#!/usr/bin/env node

const {helloWorld,JSONEdit,JSONPath,JSONData,setPath} = require('../lib/jsondriver.js');

setPath(process.cwd()+'\\lib\\infomapping.json');
helloWorld();
var JSONObj = JSONData();
console.log(JSONObj.appName);
JSONObj.appName = 'TOROSOFT WORLD';
JSONEdit(JSONObj);
