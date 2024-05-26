let score = localStorage.getItem('score');
if(!score){
    score = 0;
}
document.getElementsByClassName('score')[0].innerText = score;
