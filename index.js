let s=[
's/09.wav',
's/08.wav',
's/07.wav',
's/06.wav',
's/05.wav',
's/04.wav',
's/03.wav',
's/02.wav',
's/01.wav',
's/1.wav',
's/2.wav',
's/3.wav',
's/4.wav',
's/5.wav',
's/6.wav',
's/7.wav',
's/8.wav',
's/9.wav',
's/10.wav',
's/11.wav',
's/12.wav',
's/13.wav',
's/14.wav',
's/15.wav',
's/16.wav',
's/17.wav',
's/18.wav',
's/19.wav',
's/20.wav',
's/21.wav',
's/22.wav',
's/23.wav',
's/24.wav',
's/25.wav',
's/26.wav',
's/27.wav',
's/28.wav',
's/29.wav',
's/30.wav',
's/31.wav',
's/32.wav',
's/33.wav',
's/34.wav',
's/35.wav',
's/36.wav',
's/37.wav',
's/38.wav',
's/39.wav',
's/40.wav',
's/41.wav',
's/42.wav',
's/43.wav',
's/44.wav',
's/45.wav',
's/46.wav',
's/47.wav',
's/48.wav',
's/49.wav',
's/50.wav']

window.onload = function (){
    var k = document.getElementsByTagName("div");
    for(var i = 0; i < k.length; i++)
         k[i].ontouchstart = function (){
               j=this.id
               console.log(+j);
               a2();
               function a2(){
                var audio1 = new Audio()
                audio1.src = s[j];
                audio1.currentTime = 0;
                audio1.play(); }
           }
}
