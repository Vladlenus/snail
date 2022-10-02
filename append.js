

function f1(){

    var aa= document.createElement("div");
        aa.innerText = "6";
        aa.setAttribute('id',i)
        document.body.appendChild(aa);
    }
function f2(){

    var aa= document.createElement("div");
        aa.innerText = "5";
        aa.setAttribute('id',i)
        document.body.appendChild(aa);
    }

function f3(){

var aa= document.createElement("div");
    aa.innerText = "4";
    aa.setAttribute('id',i)
    document.body.appendChild(aa);
}
for(i=0;i<12;i++){
    f1()}
    
for(i=6;i<18;i++){
    f2()}
for(i=12;i<24;i++){
    f3()}    

console.log('append')
