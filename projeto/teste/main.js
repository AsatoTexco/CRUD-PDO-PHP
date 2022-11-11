



alert("OLAAAAA")


function validar() {

    const nomes = ["Arthur","joao","marcos","augusto","francio", "luis"];

    const ano = ["2A","1B","3C","9A","6B","2B"]

    const idNomes = [123,321,456,654,789,987];

    var inputUser = parseInt(document.getElementById("id").value);


    for(index = 0; index <= idNomes.length; index++){

        if (inputUser === idNomes[index]){

            console.log(nomes[index], ano[index]);
            break
    
    
        }

    }

}



