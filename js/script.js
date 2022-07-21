const runner = document.querySelector('.runner');
const enemy = document.querySelector('.pipe');
const score = document.querySelector('.score');
const scoreGameOver = document.querySelector('.scoreGameOver');
const gameOver = document.querySelector('.game-over');

const jump = () => {
    runner.classList.add('jump');
    setTimeout(() => {
        runner.classList.remove('jump');
    },500);
}
function reload() {
    location.reload();
}
const verif = setInterval(() => {
    const enemyPosition = enemy.offsetLeft;
    const runnerPosition = +window.getComputedStyle(runner).bottom.replace('px','');

    

    if (enemyPosition <= 100 && enemyPosition >0 && runnerPosition <= 58) {

        enemy.style.animation = 'none';
        enemy.style.left = `${enemyPosition}px`;
        
        runner.style.animation = 'none';
        runner.style.bottom = `${runnerPosition}px`;

        var randomDie = getRandomIntInclusive(1,2);

        runner.src = `./img/zenitsudie${randomDie}.gif`;
        runner.style.width = '122px';

        scoreGameOver.innerHTML = scoreValue;
        gameOver.style.visibility = 'visible';
        clearInterval(verif);
        clearInterval(scoreCount);

    }

}, 10);



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const scoreCount = setInterval(() => {
    scoreValue = `${parseInt(score.innerHTML) + 1}`;
    score.innerHTML = parseFloat(scoreValue);
    if (scoreValue >= 3) {
        enemy.style.border = '3px solid red';
        enemy.style.borderRadius = '50%';
        if (scoreValue >=5){
            enemy.style.border = 'none';
            enemy.style["-webkit-animation-duration"] = "1.5s";
            enemy.style.right = '-100%';
            if (scoreValue >=9){
                enemy.style.border = '3px solid red';
                enemy.style.borderRadius = '50%';
                if (scoreValue >=11){
                    enemy.style.border = 'none';
                    enemy.style["-webkit-animation-duration"] = "1s";
                    enemy.style.right = '-100%';
                    score.style.color = 'red';
                    if (scoreValue >=14){
                        enemy.style.border = '3px solid red';
                        enemy.style.borderRadius = '50%';
                        if (scoreValue >=15){
                            enemy.style.border = 'none';
                            enemy.style["-webkit-animation-duration"] = "0.8s";
                            enemy.style.right = '-100%';
                            if (scoreValue >=18){
                                enemy.style.border = '3px solid red';
                                enemy.style.borderRadius = '50%';
                                if (scoreValue >=19){
                                    enemy.style.border = 'none';
                                    enemy.style["-webkit-animation-duration"] = "1s";
                                    enemy.style.right = '-100%';
                                    if (scoreValue >=23){
                                        enemy.style.border = '3px solid red';
                                        enemy.style.borderRadius = '50%';
                                        if (scoreValue >=24){
                                            enemy.style.border = 'none';
                                            enemy.style["-webkit-animation-duration"] = "0.77s";
                                            enemy.style.right = '-100%';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }   
    }
    

}, 650);


document.addEventListener('mousedown', jump);





