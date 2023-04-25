const BOTON = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

BOTON.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        if(DATO >= 30){
            let flujo = calcFlujoMayor(DATO);
            let mantenimiento = (flujo*1.5).toFixed(3);
            FLU.innerHTML = flujo + ' cc/hr';
            MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
            FLU.style.display = 'block';
            MAN.style.display = 'block'; 
        } else{
            ERROR.style.display = 'none'
            let flujo = calcFlujo(DATO);
            let mantenimiento = (flujo*1.5).toFixed(3);
            FLU.innerHTML = flujo + ' cc/hr';
            MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
            FLU.style.display = 'block';
            MAN.style.display = 'block'; 
        }
        
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})

function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    
    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo.toFixed(3);
}

//Cálculo de flujo cuando peso es mayor a 30 kg
function calcFlujoMayor(peso){
    let flujo = 0;
    let supCorporal= ( (peso * 4) + 7) / (peso + 90);
    flujo = supCorporal *2000
    return flujo.toFixed(3);
}