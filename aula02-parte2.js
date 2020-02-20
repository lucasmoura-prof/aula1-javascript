function explicacaoJson() {
    var users = [
        { name: 'Clodovil Cunha', age: 37 },
        { name: 'Gretchen Poderosa', age: 60 },
        { name: 'Inês Brasil', age: 50 },
    ];
    
    var user = { name: 'Charmander', age: 1 };
    
    // JSON = Java Script Object Notation
    
    console.log(users);
    
    // JSON.stringify -> converte um objeto/array para JSON (string)
    console.log(JSON.stringify(users));
    
    // {"name":"Charmander","age":1}
    console.log(JSON.stringify(user));
    
    // JSON.parse -> converte um JSON (string) em um objeto/array
    var pokemon = JSON.parse('{"name":"Charmander","age":1}');
    console.log(pokemon);       
}

//explicacaoJson();

// Promises
var myPromise = function (username) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/' + username);
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) { // espera terminar a requisição
                if (xhr.status === 200) {
                    // sucesso
                    var response = JSON.parse(xhr.responseText);
                    resolve(response.id);
                } else {
                    // erro
                    reject('Erro na requisição');
                }
                
            }
        }

        // resolve -> função que será chamada se tiver sucesso
        // reject -> função que será chamada se houver erros
    });
}

/*myPromise('lucasmoura-prof')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });*/


axios.get('https://api.github.com/users/lucasmoura-prof')
    .then(function (response) {
        console.log("axios", response);
        console.log(response.data);
    })
    .catch(function (error) {
        console.log("axios", error);
    }); 


setInterval(function() {
    console.log('Código que será executado após 3s');
}, 3000); // 3 segundos -> 3000ms



