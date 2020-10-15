// Classic solution using standard loop and division
for(let i = 1; i <= 100; i++) {
	let result = '';

	if(i % 3 === 0) result += 'Fizz';
	if(i % 5 === 0) result += 'Bizz';

	console.log(result || i);
}

// Solution without division and remainder
let x = 0, y = 0;
for (let i = 1; i <= 100; i++) {
	let result = '';

	x++;
	y++;

	if(x !== 3 && y !== 5) result = i;
	else {
		if(x === 3) {
			result += 'Fizz';
			x = 0;
		}
		if(y === 5) {
			result += 'Bizz';
			y = 0;
		}
	}

	console.log(result);
}
