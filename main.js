let hora = new Date ().getHours()-1;
let saudacao = "" ;

if (hora < 12) {
    saudacao = "Bom dia!";
} else if(hora >= 12 && hora <=18){
    saudacao = "Boa tarde!";
}else {
    saudacao = "Boa noite!";
}

console.log(saudacao);

document.getElementById("resultado").innerHTI 