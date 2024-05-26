let endScore = localStorage.getItem('ScoreOverview');
if(!endScore){
    endScore = 0;
}
document.getElementsByClassName('total-score')[0].innerText = endScore;
