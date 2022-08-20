let quantidade = 0;
let i = 0; // conta quantidade de cartas definida pelo jogador
let j = 0; // conta o número de cartas viradas
let k = 0; // monitora se há até 2 cartas viradas
let l = 0; // conta as cartas que já formaram pares
let formaPar = [];
let elementoAntigo = "";
let lista = "";


iniciarJogo();

function iniciarJogo () {
    quantidade =  Number(prompt ('Com quantas cartas quer jogar? (4, 6, 8, 10, 12 ou 14)'));

    while (quantidade !== 4 && quantidade !== 6 && quantidade !== 8 && quantidade !== 10 && quantidade !== 12 && quantidade !== 14 ) {
    quantidade = Number(prompt ('Com quantas cartas quer jogar? (4, 6, 8, 10, 12 ou 14)')); 
    }

    inserirCartas (quantidade); 
}

function inserirCartas (quantidade) {
    let array = []; 

    lista = document.querySelector ('ul');
    
    for (i=0; i<quantidade; i++) {
        array.push(i+1);       
    }  

    array.sort(comparador);    
    function comparador() { 
	    return Math.random() - 0.5; 
    } 

    for (i=0; i<quantidade; i++) {
        lista.innerHTML = lista.innerHTML + `<li class = "carta verso carta${array[i]}" onclick = "virarCarta(this)"></li>`;
    } 
}


function virarCarta (elementoClicado) { 
    
    if (elementoClicado.classList.contains('verso')) {
       
        k = k + 1;

        j = j + 1;
        
        if (elementoClicado.classList.contains('carta1') || elementoClicado.classList.contains('carta2')) {
            elementoClicado.classList.add ('par1');
            formaPar.push('par1');
        }
        if (elementoClicado.classList.contains('carta3') || elementoClicado.classList.contains('carta4')) {
            elementoClicado.classList.add ('par2');
            formaPar.push('par2');
        }
        if (elementoClicado.classList.contains('carta5') || elementoClicado.classList.contains('carta6')) {
            elementoClicado.classList.add ('par3');
            formaPar.push('par3');
        }
        if (elementoClicado.classList.contains('carta7') || elementoClicado.classList.contains('carta8')) {
            elementoClicado.classList.add ('par4');
            formaPar.push('par4');
        }
        if (elementoClicado.classList.contains('carta9') || elementoClicado.classList.contains('carta10')) {
            elementoClicado.classList.add ('par5');
            formaPar.push('par5');
        }
        if (elementoClicado.classList.contains('carta11') || elementoClicado.classList.contains('carta12')) {
            elementoClicado.classList.add ('par6');
            formaPar.push('par6');
        }
        if (elementoClicado.classList.contains('carta13') || elementoClicado.classList.contains('carta14')) {
            elementoClicado.classList.add ('par7');
            formaPar.push('par7');
        }   
        
        elementoClicado.classList.remove ('verso');

        if (k === 2) {
            desvirarCarta(elementoClicado);
        }

        elementoAntigo = elementoClicado;
    }
}


function desvirarCarta (elementoClicado) {
    if (formaPar[0] === formaPar[1]) {
        l = l + 2;         
    }
    else {
        const primeiraCarta = elementoAntigo;
        setTimeout (desvirar, 1000);
                
        function desvirar () {
            primeiraCarta.classList.add ('verso');
            primeiraCarta.classList.remove (formaPar[0]);
            elementoClicado.classList.add ('verso');
            elementoClicado.classList.remove (formaPar[1]);
        }
    }
           
    k = 0;
    formaPar=[];
        
    if (l === quantidade) {
        finalizarJogo();
    }
}


function finalizarJogo() {

    alert ('Você ganhou em '+ j +' jogadas!');
  
    j = 0;
    i = 0;
    k = 0;
    l = 0;
    array = []; 
    formaPar = [];
    lista.innerHTML = ``;
        
    let novoJogo = prompt('Deseja jogar novamente? (sim ou não)');

    while (novoJogo !== 'sim' && novoJogo !== 'não') {
        novoJogo = prompt('Deseja jogar novamente? (sim ou não)');
    }

    if (novoJogo === 'sim') {
        iniciarJogo();
    }
}        
