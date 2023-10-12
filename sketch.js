function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  strokeWeight(3)
  let a=0
  let b=15
  let c=0
  let d=-15
  
  for(var i=0; i<100; i++){
    for(var j=0;j<100;j++){
      
   
    
     line(a,c,b,d)
    line(a+30,c,b,d)
    a=a+30
   b=b+30
    
    
    
    //line(15,30,30,15)
   // line(45,30,30,15)
  //line(45,30,60,15)
  //  line(75,30,60,15)
    
   }
    a=0
    b=15
    c=c+10
      d=d+10
    
  }
}