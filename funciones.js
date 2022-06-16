(() => {
    function sacarCuadrado(value, callback) {
        setTimeout(() => {
            callback(value, value * value);
        }, 0 | Math.random() * 1000);
    }

    sacarCuadrado(5, (value, result) => {
        console.log(`El cuadrado de ${value} es ${result}`);
    });

})();


(() => {

    function cuadradoPromise(value) {
        if (typeof value == "string") {
            return Promise.reject(`Error el valor ${value} no es un número`);
        }

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    value,
                    result: value * value
                })
            }, 0 | Math.random() * 100)


        })
    }

    cuadradoPromise(0)
        .then(obj => {
            console.log(`${obj.value} al cuadrado es ${obj.result}`);
            return cuadradoPromise(1);
        })
        .then(obj => {
            console.log(`${obj.value} al cuadrado es ${obj.result}`);
            return cuadradoPromise(2);
        })
        .then(obj => {
            console.log(`${obj.value} al cuadrado es ${obj.result}`);
            return cuadradoPromise(3);
        })
        .then(obj => {
            console.log(`${obj.value} al cuadrado es ${obj.result}`);
            return cuadradoPromise(4);
        })
        .then(obj => {
            console.log(`${obj.value} al cuadrado es ${obj.result}`);
            return cuadradoPromise(5);
        })
        .then(obj => {
            console.log("fin");
        })
        .catch();

})()

//edit holaa desde github
