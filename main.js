const c=document.getElementById("attend").getContext("2d");
const gra=c.createLinearGradient(200,0,200,150);
gra.addColorStop(0, "rgba(29,201,139,1)");
gra.addColorStop(1, "rgba(85,66,246,1)");
const min=150;
const mul=1.5;
c.beginPath();
c.moveTo(40,min-[85*mul]);
c.lineTo(90,min-[75*mul]);
c.lineTo(140,min-[98*mul]);
c.lineTo(190,min-[74*mul]);
c.lineTo(240,min-[69*mul]);
c.lineTo(290,min-[87*mul]);
c.lineTo(340,min-[50*mul]);
c.lineTo(390,min-[50*mul]);
c.lineTo(440,min-[63*mul]);
c.lineTo(440,min+1);
c.lineTo(40,min+1);
c.closePath();
c.strokeStyle="rgba(29,201,139,1)";
c.stroke();
c.fillStyle=gra;
c.fill();

let pers=["100%","75%","50%","25%","0%"];
let mont=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"];

c.font="10px Arial";
c.fillStyle="grey";
for(let j=0;j<=4;j++){
    c.fillText(pers[j], 0, 36.5*j+7);
}

c.fillText("Jan", 40, 170);
c.fillText("Feb", 100,170);
c.fillText("Mar", 150, 170);
c.fillText("Apr", 200, 170);
c.fillText("May", 250, 170);
c.fillText("Jun", 300, 170);
c.fillText("Jul", 350, 170);
c.fillText("Aug", 400, 170);


for(let i=0;i<=5;i++){
    c.moveTo(40,i*37.5);
    c.lineTo(440,i*37.5);
}
for(let i=1;i<=8;i++){
    c.moveTo([i*50]-10,0);
    c.lineTo([i*50]-10,150);
}
c.strokeStyle="rgba(0,0,0,0.5)";
c.lineWidth=1;
c.stroke();