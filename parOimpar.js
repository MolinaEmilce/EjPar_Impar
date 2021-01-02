function parOimpar(num){
    if(num===0){
        console.log('Tiene que ser distinto a cero');
    }else{
        num%2 ===0 ? console.log('Es para'): console.log('Es Impar');
    }
}
parOimpar(1);