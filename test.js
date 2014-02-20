var DataUrl = require('./DataUrl');

console.log(DataUrl.parse('data:text/plain;base64,aGVsbG8sIHdvcmxk'));
console.log(DataUrl.parse('data:text/plain;charset=UTF-8,Hello,%20World'));
