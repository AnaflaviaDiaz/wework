describe("test", () => {
  describe("validateRegisterVisitor(name, dni, cel)", () => {
    it("la función de validateRegisterVisitor debe devolver un objeto con propiedades name, dni y cel", () => {
      const visitor = validateRegisterVisitor("Anaflavia", "77139896", "993722088");
      assert.ok(visitor.hasOwnProperty("name"));
      assert.ok(visitor.hasOwnProperty("dni"));
      assert.ok(visitor.hasOwnProperty("cel"));
    });
    it("debe retornar como valor de las propiedades true para comprobar que son válidas", () => {
			const visitor = validateRegisterVisitor("Anaflavia", "77139896", "993722088");
			assert.equal(visitor.name, true);
			assert.equal(visitor.dni, true);
			assert.equal(visitor.cel, true);
		});
		it("debe retornar como valor de las propiedades false para comprobar que son inválidas", () => {
			const visitor = validateRegisterVisitor("", "", "");
			assert.equal(visitor.name, false);
			assert.equal(visitor.dni, false);
			assert.equal(visitor.cel, false);
    });
	});
	describe("validateLoginAdmin(email, password)", () => {
    it("la función de validateLoginAdmin debe devolver un objeto con propiedades email y password", () => {
      const admin = validateLoginAdmin("ana@gmail.com", "123456");
      assert.ok(admin.hasOwnProperty("email"));
      assert.ok(admin.hasOwnProperty("password"));
    });
    it("debe retornar como valor de las propiedades true para comprobar que son válidas", () => {
			const admin = validateLoginAdmin("ana@gmail.com", "123456");
			assert.equal(admin.email, true);
			assert.equal(admin.password, true);
		});
		it("debe retornar como valor de las propiedades false para comprobar que son inválidas", () => {
			const admin = validateLoginAdmin("", "");
			assert.equal(admin.email, false);
			assert.equal(admin.password, false);
    });
  });
});
