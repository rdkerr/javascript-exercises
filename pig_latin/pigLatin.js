function translate(string) {
	// body...
	return string.split(" ")
		.map(word => {
			let index = findVowel(word);
			let firstHalf = word.slice(0,index);
			let secondHalf = word.slice(index);
			return secondHalf + firstHalf + "ay";})
		.join(" ");
}

function findVowel(word) {
	let vowels = word.match(/[aeiou]/g);
	if (vowels[0]==='u' && word.indexOf('u') === word.indexOf('q')+1) {
		return word.indexOf(vowels[1]);
	}
	return word.indexOf(vowels[0]);
}

module.exports = {
	translate
}

