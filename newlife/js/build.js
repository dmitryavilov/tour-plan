let a = 13;
let b = 8;
let car1 = {
	color: 'green',
	doors: '4'
}

let car2 = {
	color: 'red',
	doors: '4'
}

car2.color = car1.color;

console.log(car2.color);
