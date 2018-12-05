const fs = require("fs");
const writeStream = fs.createWriteStream("./tmp.txt");

const stdin = process.openStdin();
console.log("Hello, write here: \n");


stdin.on("data", (data) => {
    const text = data.toString();

    if(text.trim() === "exit"){
            console.log("\n Bye!");
            process.exit(0);
    } else {
        writeStream.write(text, (err) => { 
            if(err) throw err;
        });
    }

})