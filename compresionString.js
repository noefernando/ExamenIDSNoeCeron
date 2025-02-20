// Función para comprimir la cadena
function compressString(str) {
    let compressed = "", count = 1;
    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) count++;
        else {
            compressed += str[i - 1] + count;
            count = 1;
        }
    }
    return compressed.length < str.length ? compressed : str;
}

// Función para obtener el string y mostrar el resultado
function conteoString() {
    const str = document.getElementById("string3").value;
    document.getElementById("diffResultCompress").innerText = compressString(str);
}
