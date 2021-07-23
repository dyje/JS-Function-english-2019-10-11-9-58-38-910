function alphabetSort(message){
	var output = message.split('');
	output.sort();
	var finalOutput = output.join('').replace(',','');
	return finalOutput
	}	
console.log(alphabetSort('hello')); // should return 'ehllo'