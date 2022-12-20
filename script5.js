
$(document).on("click mousemove","body",function(e){ 
    var x = e.clientX;
    var y = e.clientY;
    var newposX = x+20;
    var newposY = y-150; $("#circle").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
    }
);
function op(element){
    document.getElementById('circle').style.display = "block"
    document.getElementById("circle").style.opacity = "0.7";

    let a = element.innerHTML;
    switch(a){
        case "kaspi1":
            document.getElementById('c-text').innerHTML = "Our Kaspi";
            document.getElementById('c-number').innerHTML = "+7 707 630 7165";
            break;
        
        case "patreon":
            document.getElementById('c-text').innerHTML = "Our Patreon";
            document.getElementById('c-number').innerHTML = "https://www.patreon.com/derpixon";
            break;
        
        case "visa":
            document.getElementById('c-text').innerHTML = "Our Visa";
            document.getElementById('c-number').innerHTML = "4400 4301 9047 2560";
            break;
    }

}

function op1(element){
    
    document.getElementById("circle").style.opacity = "0"; 
    document.getElementById('circle').style.display = "none";
}
function patreon(){
    window.open("https://www.patreon.com/derpixon", "patreon", "popup");
}
function Kaspi(){
    window.open("https://kaspi.kz/", "kaspi", "popup")
}

function visa(){
    window.open("https://www.visa.com.kz/ru_KZ", "visa", "popup");
} 

function yt(){
    window.open("https://youtu.be/dQw4w9WgXcQ", "YoutubeTab")
}
function insta(){
    window.open("https://www.instagram.com/kuka_uragan/")
}

function twitter(){
    window.open("https://twitter.com/TokayevKZ?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor");

}

function facebook(){
    window.open("https://ru-ru.facebook.com/zuck/")
}