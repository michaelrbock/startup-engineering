#!/usr/bin/env node

var fs = require('fs');
var outfile = "prime.txt";
var primes = [2];
var n = 3;
while (primes.length < 100) {
	var prime = true;
	for (var m = 2; m < n-1; m++) {
		if (n % m == 0) {
			prime = false;
		}
	}
	if (prime) {
		primes.push(n);
	}
	n++;
}
var out = "";
for (var i=0; i < primes.length; i++) {
	out = out + String(primes[i]) + ", ";
}
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);