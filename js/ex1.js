const fetchDatas = async () => {
	return await fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
		.then((response) => response.json())
		.catch((err) => console.log(err));
};

const renderDatas = async () => {
	const datas = await fetchDatas();
	var table = document.getElementById("paintings");
	datas.map((data, index) => {
		var row = table.insertRow(index + 1);
		var cell = row.insertCell(0);
		cell.innerHTML = data.name;
		cell = row.insertCell(1);
		cell.innerHTML = data.year;
		cell = row.insertCell(2);
		cell.innerHTML = data.artist;
	});
};

renderDatas();
