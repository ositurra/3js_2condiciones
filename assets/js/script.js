






/* ACTIVIDAD N°2*/

function sumaSticker(){
    st1=document.querySelector('#num1').value;
    st2=document.querySelector('#num2').value;
    st3=document.querySelector('#num3').value;



total = parseInt(st1) + parseInt(st2) + parseInt(st3);

if(total<=10){
    document.getElementById('resultado').innerHTML='Llevas ' + total + ' Stickers';
}else{
    document.getElementById('resultado').innerHTML='Llevas muchos stickers';
}

}


