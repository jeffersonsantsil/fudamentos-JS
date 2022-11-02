
                //parâmetros
function soma (numero1, numero2){
    return numero1 + numero2;
}


                    //parâmetro padrão, caso o usúario não informe nada
function multiplica (numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(5, 4), soma(3,9)));