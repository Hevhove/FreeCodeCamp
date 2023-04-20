// Assignment
function rot13(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (/[A-Z]/.test(str[i])) {
            let ASCIICode = str[i].charCodeAt(0);
            if (ASCIICode < 78)
                ASCIICode += 13;
            else
                ASCIICode -= 13;
            result += String.fromCharCode(ASCIICode);
        }
        else
        {
            result += str[i];
        }
    }
    return result;
}

// Testing
console.log(rot13("SERR PBQR PNZC"));