const { Credentials } = require('uport-credentials');

var string = JSON.stringify(Credentials.createIdentity());
var str = string.replace('did:ethr:', '');
var account = JSON.parse(str);

console.log(account.did);
console.log('0x'+ account.privateKey);
