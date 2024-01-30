function Calcular(){
    let nomeUsuario = document.querySelector('.input-nome').value;
    let pesoUsuario = parseFloat(document.querySelector('.input-peso').value.replace(",","."));
    let alturaUsuario = parseFloat(document.querySelector('.input-altura').value.replace(",","."));
     
    let resultadoIMC = (pesoUsuario/alturaUsuario**2).toFixed(2);
    let grau, nivelObesidade;
    console.log(resultadoIMC);
     
    if (resultadoIMC<18.5){
        grau=0;
        nivelObesidade='Magreza';
    } else if(resultadoIMC<25){
        grau=0;
        nivelObesidade='Normal';
    } else if(resultadoIMC<30){
        grau=1;
        nivelObesidade='Sobrepeso';
    } else if(resultadoIMC<40){
        grau=2;
        nivelObesidade= 'Obesidade;'
    }else{
        grau=3;
        nivelObesidade='Obesidade grave';
    }
     
    let mensagem=`${nomeUsuario},seu IMC é ${resultadoIMC}! Resultado: ${nivelObesidade} Grau de Obesidade: ${grau}`;
     
    document.querySelector('.resultado').innerHTML=mensagem;
    }