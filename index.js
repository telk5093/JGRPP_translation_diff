const fs = require('fs');
const BASEPATH = '../JGRPP/';

let enRaw = fs.readFileSync(BASEPATH + 'src/lang/english.txt', 'utf-8');
let koRaw = fs.readFileSync(BASEPATH + 'src/lang/korean.txt', 'utf-8');

let enLines = enRaw.split('\n');
let koLines = koRaw.split('\n');

// check english
let enKeys = [];
for(let i=20; i<enLines.length; i++) {
	let _line = String(enLines[i]).trim();
	if(!_line) continue;

	let tmp = _line.split(':');
	enKeys.push(tmp[0].trim());
}

// ko english
let koKeys = [];
for(let i=20; i<koLines.length; i++) {
	let _line = String(koLines[i]).trim();
	if(!_line) continue;

	let tmp = _line.split(':');
	koKeys.push(tmp[0].trim());
}

// compare
let missingKeys = [];
for(let i=0; i<enKeys.length; i++) {
	let _key = String(enKeys[i]).trim();
	if(koKeys.indexOf(_key) < 0) {
		missingKeys.push(_key);
	}
}

console.log('======================================');
for(i in missingKeys) {
	console.log(missingKeys[i]);
}
console.log('======================================');