
/********************************************************** 
                        Start. 
 **********************************************************/
function start(){
    var iniciarOgame = confirm('Iniciar um novo jogo ?');
    if(iniciarOgame == false){
        alert('Você encerrou o jogo !');
    }else{
        faseUm();
    }
}


/********************************************************** 
                        Gave over. 
 **********************************************************/
function gameOver(){
    var jogarDeNovo = confirm('Game Over, quer jogar de novo ?');
    if(jogarDeNovo){
        faseUm();
    }else{
        alert('Você encerrou o jogo.');
    }
}


/********************************************************** 
                    inicio de tudo! 
 **********************************************************/
function faseUm(){
    alert('A noite de 25 de Abril parecia tranquila até que tudo ficou agitado, Gritaria, explosões correria e pânico para todos os lados! Você está em casa e não sabe o que esta acontecendo...')
    var respostaUm = confirm('Ficar em casa | Sair de casa para averiguar');
    if(respostaUm){
        sairDeCasa();
    }else{
        ficaEmCasa();
    }
}


/********************************************************** 
                    fica de casa. 
 **********************************************************/
function ficaEmCasa(){
    var liga = confirm('Você decidiu ficar em casa. Liga para seu irmão | Continuar tranquilo em casa');
    if(liga){
        ordasZumbis()
    }else{
        irmao();
    }
}


/********************************************************** 
                        irmao. 
 **********************************************************/
function irmao(){
    irmaoChegou = confirm('Seu irmão chegou na sua casa. e vocês precisam decidir: Continuar tranquilo em casa e esperar passar o tumulto | Sair de casa');
    if(irmaoChegou){
        sairDeCasa();
    }else{
        ordasZumbis();
    }
}


/********************************************************** 
                    Sair de casa. 
 **********************************************************/
function sairDeCasa(){
    var respostaDois = confirm(`Você decidiu sair de casa Sair a pé | Sair de carro`);
    if(respostaDois){
        sairDeCarro();
    }else{
        sairApe();
    }
}



/********************************************************** 
                    Sair a pe. 
 **********************************************************/
function sairApe(){
    saiuApe = confirm(`Voce saiu a pe, continuar averiguando a pe | ir para a casa dos pais`);
    if(saiuApe){
        casaDosPais();
    }else{
        ordasZumbis();
    }
}



/********************************************************** 
                    Sair de carro. 
 **********************************************************/
function sairDeCarro(){
    var foiDeCarro = confirm(`você decidiu sair de carro, Averiguar pela cidade | Ir para casa de seus pais onde sua filha foi passar o fim de semana`);
    if(foiDeCarro){
        casaDosPais();
    }else{
        foiAcidade();
    }
}



/********************************************************** 
                        Foi a cidade 
 **********************************************************/
function foiAcidade(){
    var chegouNaCidade = confirm(`As ruas estão um verdadeiro caos, um virus letal está tranformando todos em zumbis! Dar meia volta e ir para a casa dos pais | Prosseguir em busca de suprimentos`)
    if(chegouNaCidade){
        suprimentos();
    }else{
        casaDosPais();
    }
}


/********************************************************** 
                        suprimentos 
 **********************************************************/
function suprimentos(){
    var obteveSuprimentos = confirm('Você conseguiu bons suprimentos. continuar buscando suprimentos | Ir para casa dos pais');
    if(obteveSuprimentos){
        casaDosPais();
    }else{
        ordasZumbis();
    }
}

/********************************************************** 
                        Orda zumbi 
 **********************************************************/
function ordasZumbis(){
    alert('Você foi atacado por uma orda de Zumbis')
    gameOver();
}



 /********************************************************** 
                    casa dos pais 
 **********************************************************/
function casaDosPais(){
    var trep = confirm(`Ohh... não um carro capotado no meio caminho, parece ser um acidente grave, Ao lado do carro um mulher com uma criança pede ajuda desesperadamente Passar direto | Ajudar `);
    if(trep){
        alert(`Era tudo uma armadilha você foi cercado por um grupo de pessoas que está caçando suprimentos, eles te atacaram e você morreu!`);
        gameOver();
    }else{
        chegouAcasaDosPais()
    }
}



/********************************************************** 
                    Chegou a casa dos pais
 **********************************************************/
function chegouAcasaDosPais(){
    var chegouNosPais = confirm(`Chegando na casa dos seus pais não havia ninguém lá Sair e procurar pelos familiares | Procurar pistas na casa!`)
    if(chegouNosPais){
        pistaDosPais();
    }else{
        foiAcidade();
    }
}



/********************************************************** 
                        Pista dos pais. 
 **********************************************************/
function pistaDosPais(){
    var montanhas = confirm(`você encontrou um bilhete: Fomos para o alto das montanhas ao norte! Ir para as montanhas encontrar a família | Buscar suprimentos`);
    if(montanhas){
        foiAcidade();
    }else{
        alert('você chegou no alto das montanhas , encontrou sua família e agora possui um lugar seguro! você venceu');
        start();
    }
}