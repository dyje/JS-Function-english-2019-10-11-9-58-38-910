function countWords(message){
	var output = message.split(" ");
	return output.length;
	}
console.log(countWords('Good morning, I love JavaScript.'));