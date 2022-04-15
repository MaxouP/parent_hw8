document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();
	const data = Object.fromEntries(new FormData(e.target).entries());
	console.log(data);
	var nameCell = document.getElementById("tableName");
	var emailCell = document.getElementById("tableEmail");
	var paymentCell = document.getElementById("tablePayment");
	var promotionCell = document.getElementById("tablePromotion");
	var locationCell = document.getElementById("tableLocation");
	nameCell.innerHTML = data.nameInput;
	emailCell.innerHTML = data.emailInput;
	paymentCell.innerHTML = data.payment;
	promotionCell.innerHTML = data.promotion ? 'on' : 'off';
	locationCell.innerHTML = data.location;
});
