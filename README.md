# TerMUI
Terminal graphics for node with formatting and colour.

Example: 
```
var TermUI = require("../../app.js");

var termui = new TermUI();

console.log(termui.bar([
	{
		value: 20,
		title: "cats"
	},
	{
		value: 50,
		title: "dogs"
	},
	{
		value: 30,
		title: "other"
	}
]));
```

Output:
```
███████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
```
