const div = document.getElementById("div");
console.log(div);

// declare all characters
const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
    let result = "TBC" + ""; //concatenate 
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    div.innerHTML = result;
    // return result;
}

console.log(generateString(8));


