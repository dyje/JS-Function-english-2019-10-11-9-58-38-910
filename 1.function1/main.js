function reverseString(message){
	var output = message.split('').reverse().join('');
	return output;
	}

console.log(reverseString('hello'));