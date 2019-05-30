const functions = require("./addition");
// const jest = require("jest");

// console.log(add);

test("should Make good Add", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("should Make good Minus", () => {
  expect(functions.sub(2, 2)).toBe(0);
});

// test("User Fetch name should be Lean", () => {
//   //   expect.assertions(1);
//   expect.assertions(1);
//   return functions
//     .getUser()
//     .then(data => expact(data.name).toEqual("Leanne Graham"));
// });

test("User Fetch name should be Lean", async () => {
  //   expect.assertions(1);
  expect.assertions(1);
  const data = await functions.getUser();
  console.log(data);
  expect(data).toEqual("Leanne Graham");
});
