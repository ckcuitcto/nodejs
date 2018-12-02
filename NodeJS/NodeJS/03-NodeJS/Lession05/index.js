const fs = require('fs');

fs.readFile('course.txt','utf8',function (err,data) {
if (err) {
  console.log(err);
  } else {
  console.log(data.toString());
  }
});

function onComplete (err,data) {
if (err) {
  console.log(err);
  } else {
  console.log(data.toString());
  }
}
fs.readFile('company.txt',onComplete);

fs.readFile('course.txt',onComplete);

