function distancia(str1, str2) {
    let maxLength = Math.max(str1.length, str2.length);
    let diffCount = 0;

    for (let i = 0; i < maxLength; i++) {
        if (str1[i] !== str2[i]) {
            diffCount++;
        }
    }

    return diffCount;
}

function compareStrings() {
    const str1 = document.getElementById("string1").value;
    const str2 = document.getElementById("string2").value;

    const result = distancia(str1, str2);
    document.getElementById("diffResult").innerText = result;
}
