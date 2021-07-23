function palindrome(s) {
	return s == s.split("").reverse().join("");
}
console.log(palindrome('hello')); 
console.log(palindrome('abcba'));