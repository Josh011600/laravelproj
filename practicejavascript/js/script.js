let num = 0;


console.log(num);


function addNumbers(num1,num2){
	let result = 0;
	result = getElementById("result");


	 result = getFirstnumber(num1) + getFSecondnumber(num2);
	return result;
}

function getFirstnumber(num1){
	document.getElementById("firstnumber").value = num1;
	return num1;
}

function getFSecondnumber(num2){
	document.getElementById("secondnumber").value = num2;
	return num2;
}