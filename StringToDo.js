// Remove Blanks

function removeBlanks(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] != " ") {
            newString += string[i]
        }
    }
    return newString
}

// Get Digits

function getDigits(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(string[i])) {
            newString += string[i]
        }
    }
    return Number(newString)
}

// Acronyms

function acronym(string) {
    const words = string.split(" ")
    let acro = ""
    for (word of words) {
        if (word[0]) {
            acro += word[0].toUpperCase()
        }
    }
    return acro
}

// Count Non-Spaces

function countNonSpaces(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] != " ") {
            count += 1
        }
    }
    return count
}

// Remove Shorter Strings

function removeShorterStrings(arr, val) {
    let newArr = [];
    for (string of arr) {
        if (string.length >= val) {
            newArr = [...newArr, string]
        }
    }
    return newArr
}