registerVisitor = `
<header id="header-principal">
	<nav class="navbar navbar-light bg-app" id="big-nav">
		<a class="navbar-brand lite">
			<img src="img/icons/identificacion-de-visitante.png" width="30" height="30" class="d-inline-block align-top" alt=""> Visitor
		</a>
		<form class="form-inline">
			<button type="button" class="btn btn-outline-lite my-2 my-sm-0" id="btn-loggin-admin" type="submit">Administrador</button>
		</form>
	</nav>
</header>
<form class="container">
	<div class="form-group">
		<h2 class="text-center margin-title">Registro de visitas</h2>
	</div>
	<div class="form-group spaces">
		<h6>Completa tus datos personales</h6>
	</div>
	<div class="form-group spaces">
		<label>Nombre Completo</label>
		<input type="text" class="form-control" placeholder="Escribe tu nombre completo">
	</div>
	<div class="form-group spaces">
		<label>DNI</label>
		<input type="number" class="form-control" placeholder="Escribe tu DNI">
	</div>
	<div class="form-group spaces">
		<label>Celular</label>
		<input type="number" class="form-control" placeholder="Escribe tu número de celular">
	</div>
	<div class="align-content-center text-center spaces">
		<button type="button" class="btn btn-app" id="btn-register-visitor">Aceptar</button>
	</div>
</form>
`;