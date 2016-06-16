function dibujar() {
    var ang = document.getElementById("Ángulo").value;
    var vel0 = document.getElementById("Velocidad Inicial").value;
    var angRad = ang*Math.PI/180;

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
    alert(ang+vel0);

}
