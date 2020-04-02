const fs = require("fs");

// let newQuote = ""

// fs.readFile("quote.txt", "utf8", (error, contents) => {
// 	newQuote += contents;
// });

// let readFile = fs.createReadStream("OscarWilde.txt");
// let writeFile = fs.createWriteStream("quote.txt");

// readFile.pipe(writeFile);


// const file = fs.createWriteStream("OscarWilde.txt");
// let quote = "Be yourself. Everyone else is already taken.";

//fs.readFile("quote.txt", "utf8", (error, contents) => { 
//	console.log(contents);
//});


// fs.writeFile("quote.txt", quote, (err) => {
// 	console.log("Quote saved!");
// });

// for(let i=0; i < 5; i++) {
// 	console.log("iteration:", i);
// 	file.write("You can never be overdressed or overeducated.\n");
// }
// file.end();

let newQuote = "";

fs.readFile("OscarWilde.txt", "utf8", (error, contents) => {
	newQuote = contents;
	console.log("newQuote is now: ", newQuote);
});

fs.readFile("quote.txt", "utf8", (error, contents) => {
	newQuote += contents;
	console.log("newQuote is now: ", newQuote);
	
	fs.writeFile("quote.txt", newQuote, (err) => {
		console.log("newQuote saved!");
	});
});





	



