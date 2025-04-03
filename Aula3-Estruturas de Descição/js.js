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

  if (cod == codNike) {
    document.getElementById("desc").innerHTML = decNike;
    document.getElementById("preco").innerHTML = pNike;
    document.getElementById("quant").innerHTML = q;
    document.getElementById("vt").innerHTML = pNike * q;

  } else if (cod == codAdidas) {
    document.getElementById("desc").innerHTML = decAdidas;
    document.getElementById("preco").innerHTML = pAdidas;
    document.getElementById("quant").innerHTML = q;
    document.getElementById("vt").innerHTML = pAdidas * q;
  } else {
    document.getElementById("desc").innerHTML = "Código Inválido";
    document.getElementById("preco").innerHTML = "Código Inválido";
    document.getElementById("quant").innerHTML = "Código Inválido";
    document.getElementById("vt").innerHTML = "Código Inválido";
  }
}

function exercicio6() {
    const VFSul = 10;
    const VFNorte = 50;
    const VFNordeste = 30;
    const VFSudeste = 40;
    const VFCO = 85;

    let cod = Number(document.getElementById("cod").value);
    let quant = Number(document.getElementById("quant").value);
    let p = Number(document.getElementById("p").value);


    if (cod == 1) {
        document.getElementById("codD").innerHTML = cod;
        document.getElementById("PV").innerHTML = p;
        document.getElementById("VST").innerHTML = quant * p;
        document.getElementById("VF").innerHTML = VFSul;
        document.getElementById("VT").innerHTML = quant * p + VFSul;
    } else if(cod == 2) {
        document.getElementById("codD").innerHTML = cod;
        document.getElementById("PV").innerHTML = p;
        document.getElementById("VST").innerHTML = quant * p;
        document.getElementById("VF").innerHTML = VFNorte;
        document.getElementById("VT").innerHTML = quant * p + VFNorte;

    } else if (cod == 3 || cod == 5){
        document.getElementById("codD").innerHTML = cod;
        document.getElementById("PV").innerHTML = p;
        document.getElementById("VST").innerHTML = quant * p;
        document.getElementById("VF").innerHTML = VFNordeste;
        document.getElementById("VT").innerHTML = quant * p + VFNordeste;

    } else if(cod >= 6 && cod <=9) {
        document.getElementById("codD").innerHTML = cod;
        document.getElementById("PV").innerHTML = p;
        document.getElementById("VST").innerHTML = quant * p;
        document.getElementById("VF").innerHTML = VFSudeste;
        document.getElementById("VT").innerHTML = quant * p + VFSudeste;

    } else if(cod >= 10 && cod <= 15 || cod >= 25 && cod <=30) {
        document.getElementById("codD").innerHTML = cod;
        document.getElementById("PV").innerHTML = p;
        document.getElementById("VST").innerHTML = quant * p;
        document.getElementById("VF").innerHTML = VFCO;
        document.getElementById("VT").innerHTML = quant * p + VFCO;

    }else {
        alert("O codigo digitado é invalido!!");
    } 

}

    