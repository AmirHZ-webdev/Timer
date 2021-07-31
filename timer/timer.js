const min = document.getElementById('min')
const sec = document.getElementById('sec')
const milsec = document.getElementById('milsec')
document.getElementById('start').addEventListener('click',start)
document.getElementById('stop').addEventListener('click',stop)
document.getElementById('reset').addEventListener('click',reset)
let minute = 0;
let second = 0;
let milsecond = 0;
let Interval;
let Interval1;
function start(){
 Interval=setInterval(starttime,999)
 Interval1= setInterval(milsecstart,99)
}
function stop(){
    clearInterval(Interval)
    clearInterval(Interval1)
}
function reset(){
    clearInterval(Interval)
    clearInterval(Interval1)
    sec.innerHTML="00"
    min.innerHTML='00'
    milsec.innerHTML='00'
    second=0
    minute=0
    milsecond=0
}
function milsecstart(){
    milsecond++
    if(milsecond <= 9){
        milsec.innerHTML="0" + milsecond   
    }if(milsecond > 9){
        milsec.innerHTML="00"
        milsecond=0
    }
}
function starttime(){
second++
if(second <= 9){
    sec.innerHTML="0" + second    
}if(second > 9){
    sec.innerHTML=second
}
if ( second > 59 ) { 
    minute++;
    min.innerHTML = "0" + minute;
    sec.innerHTML="00"
    second=0
    
}
    if ( minute > 9 ) {
    min.innerHTML =minute;
    }
}




