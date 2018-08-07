const btnLogoutAdmin = document.getElementById("btn-logout-admin");
const bodyTableVisitors = document.getElementById("content-table-visitors");

window.onload = () => {
	getPublicPost();
}

btnLogoutAdmin.addEventListener("click", () => {
  logoutAdmin();
});

const tableVisitor = (visitor) => {
	time = new Date(visitor.date);
	bodyTableVisitors.innerHTML += `
	<tr>
		<td>${visitor.name}</td>
		<td>${time.toLocaleString()}</td>
	</tr>
	`;
}
