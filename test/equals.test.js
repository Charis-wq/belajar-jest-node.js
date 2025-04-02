test ("test for tobe", () =>{
    let name = "Abdul";
    let hello = `Hello ${name}`;

    expect(hello).toBe("Hello Abdul");
});

test("test for equals", () => {
    let person = {id : "charis"};
    Object.assign(person, {name: "Charis"});
  
    expect(person).toEqual({id: "charis", name: "Charis"});

});
