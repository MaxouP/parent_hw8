const getUserByUsername = async (username) => {
	try {
		const response = await fetch(`https://api.github.com/users/${username}`);
		return response.json();
	} catch (err) {
		console.log(err);
	}
};

const handleLookup = async () => {
	const username = document.getElementById("user").value;
	const user = await getUserByUsername(username);
	renderUser(user);
};

const renderUser = (user) => {
	document.getElementById("picture").src = user.avatar_url;
	fillTable(user);
};

const fillTable = (data) => {
	const nameCell = document.getElementsByName("name")[0];
	const blogCell = document.getElementsByName("blog")[0];
	const createdCell = document.getElementsByName("created")[0];
	nameCell.innerHTML = data.name;
	blogCell.innerHTML = data.blog;
	createdCell.innerHTML = data.created_at;
};

document.getElementById("lookup").addEventListener("click", () => handleLookup());
