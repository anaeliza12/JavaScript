//var nome = "Ana"
//var idade = 18
//alert("Bem vindo " + nome + " Sua idade: " + idade);
//var frase = "Japao eh kegal"

//console.log(nome.toUpperCase());
//console.log(idade);
//console.log(frase.replace("Japao", "Brasil"));
//var lista = ["mala", "pera", "abacate"];
//lista.pop();*/
//console.log(lista);
//console.log(lista.toString());*/
//console.log(lista.join(" E ")); 

/*var comida = [{nome: "morango", cor: "vermelho"}, {nome: "pessego", cor: "laranja"}];
console.log(comida[1].cor);
alert(comida[0].cor);*/


/*var idade = prompt("Informe sua idade: " );
if(idade >= 18 ){
    alert("Maior de idade");
}else {
  alert("Menor de id  a  de");
};*/

  /*var objeto = [{nome: "panela", cor: "prata"}, {nome: "prato", cor: "branco"}];
  console.log(obj  eto.nome);

  var cor = prompt("Informe sua cor favorita: ");

/*console.log(lista.length);*/

/*var count = 0;
while( count <= 5){
    console.log(count);
    count++;
};*/

/*var count;
for(count = 0; count <= 5; count++){
    alert(count);

}*/
/*var data = new Date();
alert(data.getMonth() + 2);*/


/*functin soma(n1, n2){
    return n1 + n2;
};
console.log(soma(9, 7));

functio setReplace(frase, frase1, nome)
    return frase.replace(nome frase1)

}
alert(setReplace("amo vc: Ana ", "amo vooce", "Ana"));*/

/*function soma(n1, n2){
    return n1 + n2;
}
console.log(soma(8, 10));

function setReplace(frase, nome, nome2)
{
    return nome.replace(frase, nome2)
}
console.log(setReplace("eu amo vc", "ana0", "bia"));*/

/*function validaIdade(idade){
    var  validar;
    if(idade <= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Informe sua idade: ");
console.log(validaIdade(idade));*/

/*var info =  {

    nome: "ana",
    idade: 18,
    estaAprovada: true,
    sobrenome: "Perobelli"
};
console.log(info);*/

/*var pessoa = ["Ana ", 18, "Sao Paulo"];
console.log(pessoa.length);
console.log(pessoa);*/

//var corSite = "azul";
//function alteraCor(cor, tonalidade){
//    corSite = cor + ' ' + tonalidade;
//}
//console.log(corSite);
//alteraCor("azul", "escuro");
//console.log(corSite); /*É a forma mais indicada*/

//var idade = 18;
//function alteraIdade(Idade){
    //}
    //    idade = Idade;
//console.log(idade);
//alteraIdade(24);
//console.log(idade);
//var idade = prompt("informe sua idade: ");
//if(idade >= 18){
//    idade =  "maior de idade";
//}else{
//    idade = "menor de idade";
//}
//console.log(dade);





 //igualdade estrita:
 // = = = tem a funcao de comparar os valores e tambem o tipo: se eh uma String, nuemro,etc (é exibido como true ou false)

 //igualdade solta:
 // = = ignora tipo e compara valores por ex: ("1" == 1) : true
 //pois mesmo sendo uma string ele apenas compara o numero
//NÃO RECOMENDADO!!









//// Operador ternario
//
//var idade = prompt("Informe sua idade");
//var determinaIdade = idade <= 18 ? "Meneor de idade" : "Maior de idade";
//console.log(determinaIdade);
//







// Operador logico (&&)
// Retorna TRUE quandoos dois operandos forem TRUE ex
//var idade = prompt("Informe sua idade: ");
//var maiordeIdade = idade<= 18 ? true :  false;
//var salario = prompt("Informe seu salario: ");
//var terSalario = salario <=1200 ? false : true;
//var podeEntrar = maiordeIdade && terSalario;
//console.log(podeEntrar);






// Operador logico ou (||)
// Retorna TRUE se UM deles forem TRUE

//var idade = true;
//var carteira = false;
//var liberado = idade || carteira;
//console.log("ta liberado", liberado);
//
//// Operador logico NOT (!)
// var recusado = !idade;
// console.log("ta recusado", recusado);









//OBJETO
//var pessoa = {
//    nome: "Ana ELiza",
//    idade: 18,
//    sobrenome: "Perobelli"
//};
//console.log(pessoa);











//Arrays: conjunto de dados
//
//var ana = [
//    18, "gemeos","crista", true
//
//
//];
//console.log(ana.length);
//console.log(ana[1]);
//




/*Function: responsavel pela entrada e saida de dados [verbo  +  susbstantivo*/

//var corSite = "azul";
//function resetaCor(cor, tonalidade){
//    corSite = cor + ' ' + tonalidade;
//};
//
//resetaCor("vermelho", "escuro");
//console.log(corSite);

//var pontos = 100;
//var tipo = pontos >= 100 ? "premium" : "comum";
//console.log(tipo);


//var maiorIdade = true;
//var carteira = true;
//var podeAplicar = maiorIdade && carteira;
//console.log(podeAplicar);
//
//
//var reprovado = !maiorIdade;
//console.log(reprovado);



//valores nao booleanos

//falsy
// 0
// ''
// NaN
// false
// null
// undefined

//truthy ex: 

//var corAtual = "preto";
//var corAntiga = "amarelo";
//var cor = corAtual || corAntiga;
//console.log(cor);






// If e else
//var horas = 8;
//
//if (horas >= 6 && horas <= 12){
//    console.log("Boom dia!!");
//}
//else if(horas > 12 && horas <= 17){
//    console.log("Boa tarde!!")
//
//
//}
//else{
//    console.log("Boa noite!")
//};
//





//switch case

//var permissao = "comum";
//
//switch (permissao){
//    case permissao : "comum"
//    console.log("Usuario comum")
//    break;
//
//    case permissao : "gerente"
//    console.log("Usuario gerente")
//    break;
//
//    case permissao : "diretor"
//    console.log("Usuario diretor")
//    break;
//
//    default: console.log("Usuario Invalido!!")
//   
//};




//while

//var i = 0;
//
//while( i >= 5){
//    if(i % 2 !== 0) {
//    console.log(i);
//    i++;
//    }
//}
//
//for(var i = 0; i >= 5; i++) {
//    console.log('aprendendo');
//
//
//
//var titulo = document.querySelector("span");
//titulo.textContent = "Luna - nutricao e magia";
//
var campos = [

    document.querySelector("#nome"),
    document.querySelector("#data"),
    document.querySelector("#peso"),
    document.querySelector("#altura")


];
console.log(campos)
var tbody = document.querySelector("table tbody");

document.querySelector("form").addEventListener("submit", function(evento){ 
    evento.preventDefault();
var tr = document.createElement("tr");

campos.forEach(function(campo){
    var td = document.createElement("td");
    td.textContent = campo.value;
    tr.appendChild(td);

   
});

var td = document.createElement("td");
    td.textContent = ( campos[2].value / (campos[3].value * campos[3].value)
    ).toFixed(2);
    tr.appendChild(td);

    tbody.appendChild(tr); })
//var campos = [
//
//    document.querySelector("#idade"),
//    document.querySelector("#data"),
//    document.querySelector("#peso"),
//    document.querySelector("#altura"),
//
//];
//
//var tbody = document.querySelector("table body");
//
//document.querySelector("form").addEventListener("submit", function(evento){
//    evento.preventDefault;
//    var tr = document.createElement("tr");
//    
//
//
// campos.forEach(function(campo) {
//    var td = document.createElement("td");
//    td.textContent = campo.value;
//    tr.appendChild(td);
//});
//
//  var td = document.createElement("td");
//  td.textContent = (campos[2].value / (campos[3].value * campos[3].value)).toFixed[2];
//  tr.appendChild(td);
//
//  tbody.appendChild("tr");
//
// 
//});