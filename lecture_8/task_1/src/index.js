const fs = require("fs");
const writeStream = fs.createWriteStream("./tmp.txt");

const io = process.openStdin();
console.log("Hello, write here: \n");


io.on("data", (data) => {
    let text = data.toString();

    if(text.trim() === "exit"){
            console.log("\n Bye!");
            process.exit(0);
    } else {
        writeStream.write(text, (err) => { if(err) throw err; });
    }

})