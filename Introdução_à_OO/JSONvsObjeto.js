const obj = {
	a: 1,
	b: 2,
	c: 3,
	soma() {
		return a + b + c;
	},
};
console.log("1)", JSON.stringify(obj));
// console.log(JSON.parse("{a:1, b:2, c:3}"));
// console.log("2)", JSON.parse("{'a':1, 'b':2, 'c':3}"));
console.log("3)", JSON.parse('{"a":1, "b":2, "c":3}'));
console.log("4)", JSON.parse('{"a":1, "b":"string", "c":true, "d":{}, "e":[]}'));
console.log("5)", JSON.parse('{"a":1.7, "b":"string", "c":true, "d":{}, "e":[]}'));
