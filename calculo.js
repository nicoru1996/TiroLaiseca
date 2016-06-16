function dibujar() {
    var ang = document.getElementById("Ángulo").value;
    var angRad = ang*Math.PI/180;
    var vel0 = document.getElementById("Velocidad Inicial").value;
    var Alt0 = document.getElementById("Altura Inicial").value;

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width; //Blanquear canvas

    var xMax= canvas.width;
    var yMax= canvas.height;
    var yPos;
    ctx.arc(0,yMax,5,0,2*Math.PI); //x,y,radio circulo,
    ctx.stroke();



    for(var x=10; x<xMax; ){
        yPos = x*Math.tan(angRad)-((9.8*Math.pow(x,2))/(2*Math.pow(vel0,2)*Math.pow(Math.cos(angRad),2)));
        ctx.arc(x,yMax-yPos,3,0,2*Math.PI);
        ctx.strokeStyle="darkred";
        ctx.stroke();
        x=x+7;
    }

    var dist= ((Math.pow(vel0,2))*Math.sin(2*angRad))/9.8;
    var hmax=((Math.pow(vel0,2)*Math.pow(Math.sin(angRad),2))/(2*9.8))+Alt0;
    var tiem=(2*vel0*Math.sin(2*angRad))/9.81;
    var tiemax=(vel0*Math.sin(angRad))/9.81;

    alert(dist);
    alert(tiem);
    alert(hmax);
    alert(tiemax);
    
}
