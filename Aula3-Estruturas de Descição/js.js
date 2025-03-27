function exercicio1() {
   let n1 = Number(document.getElementById("n1").value);
   let n2 = Number(document.getElementById("n2").value);

    if (n1 == n2) {
        document.getElementById("mensagem").innerHTML = "Os números são iguais!";
    } else {
        document.getElementById("mensagem").innerHTML = "Os números são diferentes!";
    }
}


function exercicio2() {
   let a = Number(document.getElementById("a").value);
   let b = Number(document.getElementById("b").value);
   let c = Number(document.getElementById("c").value);
    
    soma = a+b;

    if (soma == c) {
        document.getElementById("mensagem").innerHTML = "A soma de A+B é igual a C!";
    } else if (soma > c){
        document.getElementById("mensagem").innerHTML = "A soma de A+B é maior que C!";
    } else {
        document.getElementById("mensagem").innerHTML = "A soma de A+B é menor que C!";
    }
}


function exercicio3() {
    let salario = Number(document.getElementById("salario").value);

    if(salario < 500) {
        document.getElementById("mensagem").innerHTML = "Você tem direito ao reajuste de salário!";
    } else {
        document.getElementById("mensagem").innerHTML = "Você não tem direito ao reajuste de salário!"

    }
}

function exercicio4() {
    let salario = Number(document.getElementById("salario").value);

    if(salario <= 500) {
        document.getElementById("mensagem").innerHTML = "Você tem direito ao aumento de salário, seu salário agora é de: " + Number(salario + (salario * 0.3));
    } else {
        document.getElementById("mensagem").innerHTML = "Você não tem direito ao aumento de salário!"

    }
}

function exercicio5() {
  const codNike = 5;
  const codAdidas = 10;

  const decNike = "Tênis Nike";
  const decAdidas = "Tênis Adidas";

  const pNike = 500;
  const pAdidas = 300;

  let cod = Number(document.getElementById("cod").value);
  let q = Number(document.getElementById("q").value);

  if
}