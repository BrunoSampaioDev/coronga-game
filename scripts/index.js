
/********************************************************** 
                        Inicia o game. 
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
                        Fase 1 
 **********************************************************/
function faseUm(){
    var respostaUm = confirm('João acordou na terra de Coronga, Vai sair de casa, ou vai para seu pc e aprender a programar? Ok para Ficar, cancel para sair.');
    if(respostaUm){
        faseDois();
    }else{
        gameOver();
    }
}



/********************************************************** 
                        Fase 2. 
 **********************************************************/
function faseDois(){
    var respostaDois = confirm('João fez projetos e exercício ? Ok para sim, Cancel para não');
    if(respostaDois){
        win();
    }else{
        gameOver();
    }
}


/********************************************************** 
                        Venceu o game. 
 **********************************************************/
function win(){
    alert('João criou um portfolio, fez o case da entrevista e passou! parabéns você ganhou !');
    start();
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