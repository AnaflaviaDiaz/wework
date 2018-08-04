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
});
