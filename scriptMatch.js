
var cadArr, easy, hard, cardNum, down, pick, firstPick;

cardNum = document.querySelectorAll(".card");
down = document.querySelectorAll('.down');
easy = document.querySelector('.btn-e');
hard = document.querySelector('.btn-h');
pick = [];

cadArr = [1, 2, 3, 3, 2, 1];
shuffle(cadArr);




cardNum[0].addEventListener('click' , function(){
    this.textContent = [cadArr[0]];
    pick.push([cadArr[0]]);
    click()
}); 

cardNum[1].addEventListener('click' , function(){
    this.textContent =[cadArr[1]];
     pick.push([cadArr[1]]) ;
     click()
}); 

cardNum[2].addEventListener('click' , function(){
    this.textContent =[cadArr[2]];
     pick.push([cadArr[2]]) ;
     click()
}); 

cardNum[3].addEventListener('click' , function(){
    this.textContent = [cadArr[3]];
     pick.push([cadArr[3]])  ;
     click()
}); 

cardNum[4].addEventListener('click' , function(){
    this.textContent = [cadArr[4]];
    pick.push([cadArr[4]]) ;
    click()
}); 

cardNum[5].addEventListener('click' , function(){
    this.textContent = [cadArr[5]];
    pick.push([cadArr[5]]) ;
    click()
}); 



cardNum[6].addEventListener('click' , function(){
    this.textContent = [cadArr[6]] ;
    pick.push([cadArr[6]])  ;
}); 

cardNum[7].addEventListener('click' , function(){
    this.textContent = [cadArr[7]] ;
    pick.push([cadArr[7]]) ;
}); 

cardNum[8].addEventListener('click' , function(){
    this.textContent = [cadArr[8]] ;
    pick.push([cadArr[8]]) ;
}); 


// function click(){
//     for(var i = 0; i < cardNum.length; i++){
//         if(cardNum[i].textContent == 2){
//             cardNum[i].style.display = 'none';
//         }
//   }
// }



easy.addEventListener('click' , function(){
    this.classList.add('selected');
    hard.classList.remove('selected');

    down[0].style.display = 'none';
    down[1].style.display = 'none';
    down[2].style.display = 'none';
    cadArr = [1, 2, 3, 3, 2, 1];
    shuffle(cadArr);

    reset();
});

hard.addEventListener('click' , function(){
    this.classList.add('selected');
    easy.classList.remove('selected');

    down[0].style.display = 'inherit';
    down[1].style.display = 'inherit';
    down[2].style.display = 'inherit';
    cadArr = [1, 2, 3, 3, 2, 1, 4, 4, 4];
    shuffle(cadArr);

    reset();
});




function shuffle(cadArr){
    cadArr.sort(() => Math.random() - 0.5);
}

function reset(){
    for(var i = 0; i < cardNum.length; i++){
        cardNum[i].textContent = '#';
    }
}






// if [0] = [1] then remove from cadArr 
// >>>>>> push clicked cards from main array into temp. check array
// >>>>>> remove both picks and clear temp. array when 1st & 2nd pick match
// >>>>>> remove both picks from main cadArr
        //  -----find score[1].textContent in cadArr and delete

// else change picked card back to initial state
// >>>>>> setTimeout to change both unmatched cards back to normal
//        also xlear temp.arr
// and change player














// var interval;

// function change(){
//     interval = setInterval(flip , 3000);
// }

// function flip(){
//     for(var i = 0; i < cardNum.length; i++){
//         cardNum[i].style.color = 'blue';
//     }
// }

// function stop(){
//     clearInterval(interval);
// }






var cadArr, theScore, won, show, loose, easy, a, revealed, mainScore, theScore, hard, cardNum, down, pick, initNum, score, scoreKeep, difficulty;

cardNum = document.querySelectorAll(".card");
down = document.querySelectorAll('.down');
easy = document.querySelector('.btn-e');
hard = document.querySelector('.btn-h');
revealed = document.querySelector('#revealed');
mainScore = document.querySelector('#main-score');
theScore = 0;
pick = [];
scoreKeep = 0;
loose = 0;
score = [];
difficulty = 'easy';


        
reset();




cardNum[0].addEventListener('click' , function(){
    a = 0;
    innerCalc(a);
});

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







easy.addEventListener('click' , function(){
    this.classList.add('selected');
    hard.classList.remove('selected');

    down[0].style.display = 'none';
    down[1].style.display = 'none';
    down[2].style.display = 'none';
    difficulty = 'easy';

    reset();
});

hard.addEventListener('click' , function(){
    this.classList.add('selected');
    easy.classList.remove('selected');

    down[0].style.display = 'inherit';
    down[1].style.display = 'inherit';
    down[2].style.display = 'inherit';
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
        cadArr = [1, 2, 3, 3, 2, 1];
        initNum = cadArr[Math.floor(Math.random() * cadArr.length)];
    } else if(difficulty === 'hard') {
        cadArr = [1, 2, 3, 3, 2, 1, 4, 4, 4];
        initNum = cadArr[Math.floor(Math.random() * cadArr.length)];
    };


    alert('Pick the boxes containing the number ==> ' + initNum);

    shuffle(cadArr); 
    for(var i = 0; i < cadArr.length; i++){
        revealed.textContent = cadArr;
    }

    loose = 0;
    score = []; 
    scoreKeep = 0;

    reveal(); 
    stopWon();
    revealed.style.display = 'inherit';
}



function click(){
    score[0].style.background = 'white';
    score[1].style.background = 'white';

    mainScore.textContent = theScore++;
}



function innerCalc(a){
    cardNum[a].textContent = [cadArr[a]];
    pick.push([cadArr[a]]);
    

    if(parseInt(cardNum[a].textContent) === initNum){
        score.push(cardNum[a]);
        scoreKeep++;
    } else{
        loose++
    }

    if(scoreKeep === 2){
        click();
        flipWon();
    }

    if(loose === 3){
        alert('next player');
        reset();
        shuffle(cadArr);

    }
}




      
      


function reveal(){
    show = setInterval(flip , 2000);
}

function flip(){
    // for(var i = 0; i < cardNum.length; i++){
    //     cardNum[i].style.color = 'blue';
    // }

    revealed.style.display = 'none';
    stop();
}



function flipWon(){
    won = setInterval(reset , 1000);
}

function stopWon(){
    clearInterval(won);
}

function stop(){
    clearInterval(show);
}










// ======================================

// IF PLAYER'S GUESS IS INCORRECT SCORE--
// ELSE SCORE++



// MAKE ARRAY OF cadArr , LOOP THROUGH THIS ARRAY TO
// PICK THE MAIN cadArr;
// *HINT USE A FUNCTION CUNSTRUCTOR TO CHECK IF ALPHABETS OR NUMBERS;

// THEN COMPARE THE SELECTED ACCORDING TO TYPE

// ======================================

























