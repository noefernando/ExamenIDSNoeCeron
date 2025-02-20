Array.prototype.myOwnReduce = function(callback, initialValue) {
    let acumulator = initialValue || this[0];  // Si no se pasa un initialValue, usamos el primer valor
    for (let i = 1; i < this.length; i++) {  // Comienza desde el segundo elemento
        acumulator = callback(acumulator, this[i]);  // Llama a la función callback
    }
    return acumulator;  // Devuelve el valor final
};

// Función para probar myOwnReduce
function testReduce() {
    const array = [1, 2, 3, 4, 5];
    const callback = (acumulator, current) => acumulator + current;  // Suma los valores

    const result = array.myOwnReduce(callback, 0);  // Usamos el método con el array
    document.getElementById("result").innerText = "Resultado: " + result;  // Muestra el resultado
}