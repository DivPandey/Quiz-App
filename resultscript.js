let endScore = localStorage.getItem('score');
if(!endScore){
    endScore = 0;
}
document.getElementsByClassName('total-score')[0].innerText = `Your Score: ${endScore}`;
