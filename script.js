let quantidade =  Number(prompt ('Com quantas cartas quer jogar? (4, 6, 8, 10, 12 ou 14)'));

while (quantidade !== 4 && quantidade !== 6 && quantidade !== 8 && quantidade !== 10 && quantidade !== 12 && quantidade !== 14 ) {
    quantidade = Number(prompt ('Com quantas cartas quer jogar? (4, 6, 8, 10, 12 ou 14)'));
}

function inserirCartas (quantidade) {

    const lista = document.querySelector ('ul');

    for (i=3; i<quantidade; i++) {

        let item = `<li class = "carta">
                        <img src = "Arquivos Úteis - Projeto 04 - Parrot Card Game/parrot.png" />
                    </li>`

    lista.innerHTML = lista.innerHTML + item;
    }

    minhaArray.sort(comparador);
    function comparador() { 
        return Math.random() - 0.5; 
    }
}




