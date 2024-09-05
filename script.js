let stop=document.getElementById('stop');
let start=document.getElementById('start');
let reset=document.getElementById('reset');
let container=document.getElementById("button");
let laps=document.getElementById("lap");
let btn=document.getElementById("btn");
let enterlaps=document.getElementById("Enterlaps");
let hour=0;
let milli=0;
let sec=0;
let min=0;
let result="";
let span=document.getElementById("text");
let id;
span.innerText="00:00:00:00";
start.addEventListener("click",()=>{
    toggle(); 
    id=setInterval(settime,10);
});

reset.addEventListener("click",()=>{
    resettime();
});

stop.addEventListener("click",()=>{
    stoptime();
    toggleAgain();
});

laps.addEventListener("click",()=>{
    let li=document.createElement("li");
    li.innerText=result;
    enterlaps.appendChild(li);
});


function settime(){
    milli++;
    if(milli>=100){
        sec++;
        milli=0;
    }
    if(sec>=60){
        min++;
        sec=0;
    }
    if(min>=60){
        hour++;
        min=0;
    }
    result=pad(hour) + ":" + pad(min) + ":" + pad(sec) + ":" + pad(milli);
    // span.innerText="";
    // console.log(result);
    span.innerHTML=result;
}



function stoptime(){
    clearInterval(id);
}

function resettime(){
    span.innerText="00:00:00:00";
    enterlaps.innerHTML="";
    milli=0;
    sec=0;
    min=0;
    hour=0;
    result="";
}

function toggle(){
    container.classList.remove("hidden");
    btn.classList.add("hidden")
}

function toggleAgain(){
    container.classList.add("hidden");
    btn.classList.remove("hidden")
}

function pad(num, size = 2) {
    let s = "000" + num;
    return s.substr(s.length - size);
}
