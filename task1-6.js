function func() {
	return (new Date).getDate();
}

function funcM() {
	return (new Date).getMonth();
}

function funcY() {
    return(new Date).getFullYear();
}

let arr = [2030,,10];
let [year = funcY(), month = funcM(), day = func()] = arr;

console.log(year,month,day);