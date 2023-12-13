const c=document.getElementById('attend').getContext("2d");
const gra=c.createLinearGradient(200,0,200,150);
gra.addColorStop(0.2, "rgba(29,201,139,0.5)");
gra.addColorStop(0.8, "rgba(85,66,246,0.5)");
let attend=[100,75,50,25,0,50,100,100];
c.beginPath();
for(let k=0;k<=7;k++){

    c.lineTo(((k)*58.75)+40,110-(attend[k]*1.1))
}
c.lineTo(451,110);
c.lineTo(40,110);
c.closePath();
c.strokeStyle="rgba(255,255,255,1)";
c.stroke();
c.fillStyle=gra;
c.fill();

let pers=["100%","75%","50%","25%","0%"];
let mont=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"];

c.font="10px Arial";
c.fillStyle="grey";
for(let j=0;j<=4;j++){
    c.fillText(pers[j], 0, 27.5*j+7);
}
for(let j=0;j<=7;j++){
    c.fillText(mont[j], (58.75*j)+32, 125);
}
for(let i=0;i<=7;i++){
    c.moveTo((i*58.75)+40,0);
    c.lineTo((i*58.75)+40,110);
}
for(let i=0;i<=5;i++){
    c.moveTo(40,i*27.5);
    c.lineTo(450,i*27.5);
}
const grad=c.createLinearGradient(200,0,200,150);
grad.addColorStop(0, "rgba(0,0,0,0.2)");
grad.addColorStop(1, "rgba(0,0,0,0.5)");
c.strokeStyle=grad;
c.setLineDash([]);
c.lineWidth=1;
c.stroke();


const r=document.getElementById('rate').getContext("2d");

r.beginPath();
r.arc(55, 35, 32,  0.3 * Math.PI,  1.9* Math.PI);
r.strokeStyle="white";
r.lineCap = "round";
r.lineWidth=6;
r.webkitImageSmoothingEnabled=true;
r.stroke();

r.beginPath();
r.arc(55, 35, 32, 0.5 * Math.PI,  1.9* Math.PI);
r.strokeStyle="rgba(29,201,139,1)";
r.lineCap = "round";
r.lineWidth=6;
r.webkitImageSmoothingEnabled=true;
r.stroke();