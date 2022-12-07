function i1(){
	m=+document.getElementById('m').value
    



n=m
 m1=[]
 m2=[]
 m3=[]
 m4=[]
var per=m

for (re=0;re<m;re++){
    m1[re]=[]
    m2[re]=[]
    m3[re]=[]
    m4[re]=[]
function f1(){
 
    
    for (j=0;j<n;j++){
      per=per+1
      m1[re][j]=per-n
     }
    
   n=n-1
   
   for (j=0;j<n;j++){
    per=per+1
      m2[re][j]=per-n-1
      
    }
   
  
   for (j=0;j<n;j++){
    per=per+1
      m3[re][j]=per-n-1
      
   }
   n=n-1
   for (j=0;j<n;j++){
    per=per+1
      m4[re][j]=per-n-2
            
    }
    per=per-2
return(n,per)
}
f1()

}
console.log(m1,m2,m3,m4,"pizda")

n=m

a1=[]
a2=[]
a3=[]
a4=[]
//////////////////////////
for(i=0;i<m;i++){
 a1[i]=[]
 for(j=0;j<m;j++){	
   if(m1[i][j]>0){
    a1[i][j]=m1[i][j]}
   else{a1[i][j]=0
  }
 }
 a1[i]=a1[i].splice(-i).concat(a1[i]);
}
///////////////////////////
for(i=0;i<m;i++){
 a2[i]=[]
 for(j=0;j<m;j++){	
   if(m2[i][j]>0){
    a2[i][j]=m2[i][j]}
   else{a2[i][j]=0
  }
 }
 a2[i]=a2[i].splice(-i-1).concat(a2[i]);
}
///////////////////////////
for(i=0;i<m;i++){
 a3[i]=[]
 for(j=0;j<m;j++){	
   if(m3[i][j]>0){
    a3[i][j]=m3[i][j]}
   else{a3[i][j]=0
  }
 }
 a3[i]=a3[i].splice(-i-1).concat(a3[i]);
}
///////////////////////////
for(i=0;i<m;i++){
 a4[i]=[]
 for(j=0;j<m;j++){	
   if(m4[i][j]>0){
    a4[i][j]=m4[i][j]}
   else{a4[i][j]=0
  }
 }
 a4[i]=a4[i].splice(-i-1).concat(a4[i]);
}
console.log(a1,'ss',a2,'ss',a3,'ss',a4,'ss')

a=a3
function rotate(a){ 
  var n=a.length; 
  for (var i=0; i<n/2; i++) { 
   for (var j=i; j<n-i-1; j++) { 
    var tmp=a[i][j]; 
    a[i][j]=a[j][n-i-1];
    a[j][n-i-1]=a[n-i-1][n-j-1];            
    a[n-i-1][n-j-1]=a[n-j-1][i]; 
     a[n-j-1][i]=tmp;
      } 
     } 
     return a; } 
 rotate(a)

function rotateB2(){
  a=a2
  rotate(a)
  rotate(a)
  rotate(a)
}
function rotateB3(){
  a=a3
  rotate(a)
}
function rotateB4(){
  a=a4
  rotate(a)
}
function Global(){
  rotateB2()
  rotateB3()
  rotateB4()
}
Global()
a=a1
b=a2
c=a3
d=a4
console.log(b,c,d,'ssds')
function fff(){
for (i=0;i<m;i++){
  for(j=0;j<m;j++){
    
   if(a[i][j]==0){
    a[i][j]=b[i][j]
   }
  }
 }
for (i=0;i<m;i++){
 for(j=0;j<m;j++){
   
  if(a[i][j]==0){
   a[i][j]=c[i][j]
  }
 }
}
for (i=0;i<m;i++){
  for(j=0;j<m;j++){
    
   if(a[i][j]==0){
    a[i][j]=d[i][j]
   }
  }
}

console.log(a,'1488')
}
fff()
out = document.getElementById("div1");
for(i=0;i<m;i++){
    g=JSON.stringify(a[i]);

    node = document.createElement('li');
    textnode = document.createTextNode(a[i]);
    node.appendChild(textnode);
    out.appendChild(node)
}
}
conf=document.getElementById("play-button")

conf.onclick = i1;




  