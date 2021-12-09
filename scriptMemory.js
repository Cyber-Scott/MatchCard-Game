
var cadArr, theScore, show, loose, easy, a, revealed, cad, mainScore, theScore, hard, cardNum, down, pick, initNum, score, scoreKeep, difficulty;

cardNum = document.querySelectorAll(".card");
down = document.querySelectorAll('.down');
easy = document.querySelector('.btn-e');
hard = document.querySelector('.btn-h');
revealed = document.querySelector('#revealed');
mainScore = document.querySelector('#main-score');
theScore = 0;
scoreKeep = 0;
loose = 0;
score = [];
difficulty = 'easy';



        
reset();






cardNum[0].onclick = function(){
    a = 0;
    innerCalc(a);
};

cardNum[1].addEventListener('click' , function(){
    a = 1;
    innerCalc(a);
}); 

cardNum[2].addEventListener('click' , function(){
    a = 2;
    innerCalc(a);
}); 

cardNum[3].addEventListener('click' , function(){
    a = 3;
    innerCalc(a);
}); 

cardNum[4].addEventListener('click' , function(){
    a = 4;
    innerCalc(a);
}); 

cardNum[5].addEventListener('click' , function(){
    a = 5;
    innerCalc(a);
}); 


cardNum[6].addEventListener('click' , function(){
    a = 6;
    innerCalc(a);
}); 

cardNum[7].addEventListener('click' , function(){
    a = 7;
    innerCalc(a);
}); 

cardNum[8].addEventListener('click' , function(){
    a = 8;
    innerCalc(a);
}); 

cardNum[9].addEventListener('click' , function(){
    a = 9;
    innerCalc(a);
}); 

cardNum[10].addEventListener('click' , function(){
    a = 10;
    innerCalc(a);
}); 

cardNum[11].addEventListener('click' , function(){
    a = 11;
    innerCalc(a);
}); 



cardNum[12].addEventListener('click' , function(){
    a = 12;
    innerCalc(a);
}); 

cardNum[13].addEventListener('click' , function(){
    a = 13;
    innerCalc(a);
}); 

cardNum[14].addEventListener('click' , function(){
    a = 14;
    innerCalc(a);
}); 

cardNum[15].addEventListener('click' , function(){
    a = 15;
    innerCalc(a);
}); 








easy.addEventListener('click' , function(){
    this.classList.add('selected');
    hard.classList.remove('selected');

    down[0].style.display = 'none';
    down[1].style.display = 'none';
    down[2].style.display = 'none';
    down[3].style.display = 'none';
    difficulty = 'easy';

    reset();
});

hard.addEventListener('click' , function(){
    this.classList.add('selected');
    easy.classList.remove('selected');

    down[0].style.display = 'inherit';
    down[1].style.display = 'inherit';
    down[2].style.display = 'inherit';
    down[3].style.display = 'inherit';
    difficulty = 'hard';

    reset();
});







function shuffle(cadArr){
    cadArr.sort(() => Math.random() - 0.5);
}


function reset(){
    for(var i = 0; i < cardNum.length; i++){
        cardNum[i].textContent = '#';
        cardNum[i].style.background = '#bf0135';
    }

    if(difficulty === 'easy'){
        cadArr = [1, 2, 3, 3, 2, 1, 4, 5, 4, 6, 6, 5];
        initNum = cadArr[Math.floor(Math.random() * cadArr.length)];
    } else if(difficulty === 'hard') {
        cadArr = [1, 2, 3, 3, 2, 1, 4, 4, 5, 6, 5, 7, 8, 6, 8, 7];
        initNum = cadArr[Math.floor(Math.random() * cadArr.length)];
    };

    shuffle(cadArr); 
    // for(var i = 0; i < cadArr.length; i++){
    //     revealed.textContent = cadArr;
    // }

    

    loose = 0;
    score = []; 
    scoreKeep = 0;
    theScore = 0;
    theReset();
}



function theReset(){
    score = [];
    scoreKeep = 0;
}



function click(){
    score[0].style.background = 'white';
    score[1].style.background = 'white';

    theScore++;
    mainScore.textContent = theScore;

    theReset();

    flipOver();
    stop();
}



function innerCalc(a){

if(cardNum[a].textContent === '#'){

    cad = cardNum[a];

    cardNum[a].textContent = [cadArr[a]];
    revealed.textContent = cardNum[a].textContent;

    if(score.length < 2){
        score.push(cad);
        
        scoreKeep++;
    }

    if(score[0].textContent === cad){
        score.push(cardNum[a]);
        scoreKeep++;
    }

    if(score[1]){
        if(score[0].textContent === score[1].textContent){
            click();
        }else{
            // flipWon();
            theReset();
            normalize();
        }
    }
}

} 




function gameOver(){
    if(theScore === 6 && difficulty === 'easy'){
        alert('====YOU WIN====YOU MUST PLAY AGAIN');
        reset();
    } else if(theScore === 8 && difficulty === 'hard'){
        alert('====YOU WIN====YOU MUST PLAY AGAIN');
        reset();
    }
}

function flipOver(){
    var show = setInterval(gameOver , 700);
}

function stop(){
    clearInterval(show);
}

 








function normalize(){
    for(var i = 0; i < cardNum.length; i++){

        if(cardNum[i].style.background != 'white'){
            cardNum[i].textContent = '#';
            cardNum[i].style.background = '#bf0135';  
        }
    }
}


// function flipWon(){
//     var won = setInterval(normalize , 500);
// }

// function stopWon(){
//     clearInterval(won);
// }
















// ======================================

// IF PLAYER'S GUESS IS INCORRECT SCORE--
// ELSE SCORE++



// MAKE ARRAY OF cadArr , LOOP THROUGH THIS ARRAY TO
// PICK THE MAIN cadArr;
// *HINT USE A FUNCTION CUNSTRUCTOR TO CHECK IF ALPHABETS OR NUMBERS;

// THEN COMPARE THE SELECTED ACCORDING TO TYPE

// ======================================

























