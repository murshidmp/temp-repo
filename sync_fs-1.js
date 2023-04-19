const { readFileSync, writeFileSync } = require ('fs');

const first = readFileSync ('./sub-folder/first.txt','utf-8');
const second= readFileSync ('./sub-folder/content/second.txt', 'utf-8');

// console.log (first, second);

writeFileSync ('./sub-folder/result_sync.txt', `Here is the result ${first}, ${second}`{flag:'a'});

const result= readFileSync ('./sub-folder/result_sync.txt','utf-8');

console.log (result);