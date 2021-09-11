let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
setInterval(()=>{
a = new Date();
date = a.toLocaleDateString(undefined, options);
time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
document.getElementById('time').innerHTML = date + "</br>" + time ;
}, 1000);

var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.png";
        document.body.style.backgroundImage = "url(night.jpg)";
    }else{
        icon.src = "moon.png";
        document.body.style.backgroundImage = "url(day.jpg)";
    }
}

