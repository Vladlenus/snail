let s=['s/1.wav','s/2.wav','s/3.wav','s/4.wav','s/5.wav','s/6.wav',
's/7.wav','s/8.wav','s/9.wav','s/10.wav','s/11.wav','s/12.wav','s/13.wav',
's/14.wav','s/15.wav','s/16.wav','s/17.wav','s/18.wav','s/19.wav','s/20.wav','s/21.wav',
's/22.wav','s/23.wav','s/24.wav','s/25.wav'
]




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