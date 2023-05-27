function encrypt() {
    var inputText = document.getElementById("input-text").value;
    var encryptedText = replaceVowels(inputText);
    document.getElementById("output-text").value = encryptedText;
}

function replaceVowels(text) {
    var encryptedText = "";
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        switch (char.toLowerCase()) {
            case "e":
                encryptedText += "enter";
                break;
            case "i":
                encryptedText += "imes";
                break;
            case "a":
                encryptedText += "ai";
                break;
            case "o":
                encryptedText += "ober";
                break;
            case "u":
                encryptedText += "ufat";
                break;
            default:
                encryptedText += char;
        }
    }
    return encryptedText;
}

function decrypt() {
    var inputText = document.getElementById("input-text").value;
    var decryptedText = reverseReplaceVowels(inputText);
    document.getElementById("output-text").value = decryptedText;
}

function reverseReplaceVowels(text) {
    var decryptedText = "";
    var i = 0;
    while (i < text.length) {
        var char = text[i];
        if (char.toLowerCase() === "e") {
            if (text.substring(i, i + 5) === "enter") {
                decryptedText += "e";
                i += 5;
            } else {
                decryptedText += char;
                i++;
            }
        } else if (char.toLowerCase() === "i") {
            if (text.substring(i, i + 4) === "imes") {
                decryptedText += "i";
                i += 4;
            } else {
                decryptedText += char;
                i++;
            }
        } else if (char.toLowerCase() === "a") {
            if (text.substring(i, i + 2) === "ai") {
                decryptedText += "a";
                i += 2;
            } else {
                decryptedText += char;
                i++;
            }
        } else if (char.toLowerCase() === "o") {
            if (text.substring(i, i + 4) === "ober") {
                decryptedText += "o";
                i += 4;
            } else {
                decryptedText += char;
                i++;
            }
        } else if (char.toLowerCase() === "u") {
            if (text.substring(i, i + 4) === "ufat") {
                decryptedText += "u";
                i += 4;
            } else {
                decryptedText += char;
                i++;
            }
        } else {
            decryptedText += char;
            i++;
        }
    }
    return decryptedText;
}
