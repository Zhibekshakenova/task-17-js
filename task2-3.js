let options = {
	width:  400,
	height: 500,
};

let color;
if (options.color !== undefined) {
	color = options.color;
} else {
	color = 'black';
}
console.log(color);