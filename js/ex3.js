const sendDatas = async (datas) => {
	const response = await fetch("https://thejsway-server.herokuapp.com/api/countries", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(datas),
	}).then(response => response.text());
	console.log(response)
};

const datas = {
	name: "Maxence",
	countries: [
		{ name: "Portugal", year: 2019 },
		{ name: "USA", year: 2022 },
		{ name: "Indonesia", year: 2010 },
		{ name: "Japan", year: 2019 },
		{ name: "South Africa", year: 2014 },
		{ name: "Italy", year: 2013 },
	],
};

sendDatas(datas);
