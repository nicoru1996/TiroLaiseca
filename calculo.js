function dibujar() {
    var ang = document.getElementById("Ángulo").value;
    var angUn = document.getElementById("Unidadesa0").value;
   if (angUn != "rad") {
       ang= (ang * Math.PI) / 180;
   }
    var vel0 = document.getElementById("velocidadInicial").value;
    var vel0Un = document.getElementById("Unidadesv0").value;
    if (vel0Un != "m/s") {
        vel0 = (vel0 * 1000) / 3600;
    }
    var Alt0 = Number( document.getElementById("Altura Inicial").value);
    var alt0Un = document.getElementById("Unidadesh0").value;
    if (alt0Un != "m") {
        Alt0 =Alt0 * 1000;
    }
    //Fijarse si las unidades son correctas... y si no, hacer conversión


    /*
     if(angUn!="rad"){
     var angRad = ang*Math.PI/180;
     }
     else{
     angRad=ang;
     }
     /*onblur="verificarValor(this.id)"
     ....
     */

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width; //Blanquear canvas

    var xMax= canvas.width;
    var yMax= canvas.height;
    var yPos;
    var margenEjes=10;

    //Eje X
    ctx.beginPath();
    ctx.moveTo(margenEjes,margenEjes);
    ctx.lineTo(margenEjes,yMax-margenEjes);
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    //Inserte código acá xD
    ctx.beginPath();
    ctx.moveTo(margenEjes,yMax-margenEjes);
    ctx.lineTo(xMax-margenEjes,yMax-margenEjes);
    ctx.stroke();
    ctx.closePath();

    //Grafico
    ctx.beginPath();
    ctx.arc(0+margenEjes,yMax-margenEjes,5,0,2*Math.PI); //x,y,radio circulo,
    ctx.stroke();

    //Calculos
    var tiem = (2*vel0*Math.sin(ang))/9.81;
    if (Alt0==0){
        var tiemax = (vel0*Math.sin(ang))/9.81;
    }
    else {
        var tiemax = ((vel0*Math.sin(ang)-Math.sqrt(Math.pow(vel0*Math.sin(ang),2))+2*9.81))/9.81;
    }
    var hmax = (Number(Alt0)+((Math.pow(vel0,2)*Math.pow(Math.sin(ang),2))/(2*9.8)));
    var distmax = vel0*Math.cos(ang)*tiemax;
    if (Alt0==0) {
        var dist = ((Math.pow(vel0, 2)) * Math.sin(2 * ang)) / 9.8;
    }
    else{
        var dist = vel0*Math.cos(ang)*tiem;
    }




    //graficador //**Todavia no funciona con Altura Inicial. solo calculo.
    for(var x=10; x<dist; ){
        yPos = (x*Math.tan(ang)-((9.8*Math.pow(x,2))/(2*Math.pow(vel0,2)*Math.pow(Math.cos(ang),2))))+Number(Alt0);
        ctx.arc(x,yMax-yPos,1,0,2*Math.PI);
        ctx.strokeStyle="darkred";
        ctx.stroke();
        x=x+4;
        if (ang==Math.PI/2){x=x/2}
    }

    //***Tabla resultados hecha con inputs, no se puede mostrar los resultados ahi.
    alert("Distancia: "+dist);
    document.getElementById("DistanciaFinal").value=Math.round(dist*100)/100;
    alert("Distancia de alura máxima: "+distmax);
    document.getElementById("disthmax").value=Math.round(dist*100)/100;
    alert("Tiempo hasta el máximo: "+tiemax);
    document.getElementById("tiemhmax").value=Math.round(tiemax*100)/100;
    alert("Tiempo de vuelo: "+tiem);
    document.getElementById("Tiempovuelo").value=Math.round(tiem*100)/100;
    alert("Altura Máxima "+hmax);
    document.getElementById("altmax").value=Math.round(hmax*100)/100;
    alert("Tiempo de Altura Máxima: "+tiemax);
    
}

//function verificarValor(idElem){
    //if(document.getElementById(idElem).value = isNaN()){
        ///alert("El valor de "+ document.getElementById(idElem).name +" es incorrecto.");
        //document.getElementById(idElem).value ="";
    //}
///}
