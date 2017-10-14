/**
 * Created by Administrator on 2017/8/22 0022.
 */
//音乐
var music=document.querySelector("#music")
var musicbtn=document.querySelector(".music_btn")
musicbtn.onclick=function () {
    if(music.paused){
       music.play();
        musicbtn.style.animationPlayState="running";
        musicbtn.style.background='url("images/musicBtn.png") 50% 50% no-repeat';
    }else {
       music.pause()
        musicbtn.style.background='url("images/musicBtnOff.png") 50% 50% no-repeat';
       console.dir(musicbtn.style)
        musicbtn.style.animationPlayState="paused";
    }
}
//灯
var colorb=document.querySelector(".swiper-light")
var before=document.querySelector(".before")
var after=document.querySelector(".after")
var light=document.querySelector(".lightoff")
console.log(light)
console.log(colorb)
light.onclick=function () {
    colorb.style.backgroundColor="#1A7FDC"
    before.style.display="none";
    after.style.display="block";
    if(after.style.display=="block"){
        before.style.display="none";
    }
}

