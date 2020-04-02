const fs = require("fs");
let quote = "Be yourself. Everyone else is already taken.";

fs.writeFile("quote.txt", quote, (err) => {
console.log("quote.txt restored!");
});

