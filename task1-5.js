let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];

let name       = arr[0];
let surname    = arr[1];
let department = arr[2];

let position;
if (arr[3] !== undefined) {
	position = arr[3];
} else {
	position = 'джуниор';
}
console.log(position);