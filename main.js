let hora = new Date().getHours();
let saudacao = "";

if(hora >=4 && hora <= 13){
    saudacao = "Bom Dia";
}else if(hora >= 13 && hora <= 18){
    saudacao = "Boa Tarde";
}else{
    saudacao = "Boa Noite";
}
console.log(saudacao)

document.getElementById("resultado").innerHTML = saudacao