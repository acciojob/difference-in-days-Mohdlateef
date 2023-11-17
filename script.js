var dateDiffInDays = function (date1, date2) {
  //   write your code here
	let x=date1.substring(8,11);
	let y=date2.substring(8,11);
	return (y-x);

};

// // Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
