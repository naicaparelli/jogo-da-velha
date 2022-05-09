var jogador = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var resultadoJogo = document.getElementById('resultado-jogo');
var quadrado = document.getElementsByClassName('quadrado');
var stopGame = false;

mudarJogador('X');

function escolherQuadrado(id){
        if (stopGame === false){
            var quadrado = document.getElementById(id);
            if (quadrado.innerHTML !== "-") {
                return;
            }
           
            quadrado.innerHTML = jogador;
            quadrado.style.color = '#59375c';
    
            if (jogador === 'X') {
                jogador = 'O';            
            } else {
                jogador = 'X';
            }
            mudarJogador(jogador);
            checaVencedor();
        }            
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (checaSequencia(quadrado1, quadrado2, quadrado3) ||
        checaSequencia(quadrado4, quadrado5, quadrado6) || 
        checaSequencia(quadrado7, quadrado8, quadrado9) ||
        checaSequencia(quadrado1, quadrado4, quadrado7) ||
        checaSequencia(quadrado2, quadrado5, quadrado8) ||
        checaSequencia(quadrado1, quadrado5, quadrado9) || 
        checaSequencia(quadrado3, quadrado5, quadrado7) ||
        checaSequencia(quadrado3, quadrado6, quadrado9)) {       
        return;
    }
    if ((quadrado1.innerHTML !== "-") &&
        (quadrado2.innerHTML !== "-") &&
        (quadrado3.innerHTML !== "-") &&
        (quadrado4.innerHTML !== "-") && 
        (quadrado5.innerHTML !== "-") &&
        (quadrado6.innerHTML !== "-") && 
        (quadrado7.innerHTML !== "-") &&
        (quadrado8.innerHTML !== "-") && 
        (quadrado9.innerHTML !== "-")) {        
        resultadoJogo.innerHTML = 'Este jogo foi um empate!';
        return;
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado (quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background ='#0f0';
    quadrado2.style.background ='#0f0';
    quadrado3.style.background ='#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {   
    
    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        stopGame = true;
        mudaCorQuadrado (quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
                
    }
    return stopGame;
}

function reiniciarJogo() {
    mudarJogador('X');
    var quadrado = null;
    var repeticao = 1;
    vencedorSelecionado.innerHTML = null;
    resultadoJogo.innerHTML = 'Vencedor:';
    stopGame = false;
    for (; repeticao <= 9; repeticao++) {
        quadrado = document.getElementById(repeticao);
        quadrado.style.color = '#eee';
        quadrado.style.background = '#eee';
        quadrado.innerHTML = '-'; 
    }   
    
}



