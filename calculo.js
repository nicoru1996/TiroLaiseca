function verificarValor(idElem){
        if( document.getElementById(idElem).value==""){
               alert("El Campo "+ document.getElementById(idElem).name +" ,está vacío.");
               document.getElementById(idElem).value ="";
            }
    }
function verificarTodo() {
        if (document.getElementById("velocidadInicial").value == "") {
                alert("Complete TODOS los campos");
                return
            }
        if (document.getElementById("Angulo").value == "") {
                alert("Complete TODOS los campos");
              return;
            }
        if (document.getElementById("AlturaInicial").value == "") {
                alert("Complete TODOS los campos");
                return;
            }
        else {
                dibujar()
            }
    }

function dibujar() {

    //Conversión de unidades para la calcuadora
    var ang = document.getElementById("Angulo").value;
    var angUn = document.getElementById("Unidadesa0").value;
    if (angUn != "rad") {
               ang= (ang * Math.PI) / 180;
           }
    var vel0 = document.getElementById("velocidadInicial").value;
    var vel0Un = document.getElementById("Unidadesv0").value;
    if (vel0Un != "m/s") {
                vel0 = (vel0 * 1000) / 3600;
       }
    var Alt0 = Number( document.getElementById("AlturaInicial").value);
    var alt0Un = document.getElementById("Unidadesh0").value;
    if (alt0Un != "m") {
           Alt0 =Alt0 * 1000;
           }

    //Calculos
    if (Alt0==0){
        var tiem = (2*vel0*Math.sin(ang))/9.81;
           }
    else {
        var tiem = (vel0*Math.sin(ang)+Math.sqrt(Math.pow(vel0*Math.sin(ang),2)+2*9.81*Alt0))/9.81;
              }
    var tiemax = (vel0*Math.sin(ang))/9.81;
    var hmax = (Number(Alt0)+((Math.pow(vel0,2)*Math.pow(Math.sin(ang),2))/(2*9.8)));
    if (Alt0==0) {
        var dist = ((Math.pow(vel0, 2)) * Math.sin(2 * ang)) / 9.81;
    }
    else{
        var dist = vel0*Math.cos(ang)*tiem;
    }

    if (Alt0==0) {
        var dmax = dist / 2;
    }
    else{
        var dmax = vel0*Math.cos(ang)*tiemax;
    }

    //Canvas
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
    ctx.beginPath();
    ctx.moveTo(margenEjes,yMax-margenEjes);
    ctx.lineTo(xMax-margenEjes,yMax-margenEjes);
    ctx.stroke();
    ctx.closePath();
    
    animar(ang,vel0,Alt0,dist,0);
    
    //Conversión resutados
    var UHM = document.getElementById("uhm").value;
    if (UHM != "m") {
        hmax= hmax / 1000;
    }
    var UDM = document.getElementById("udm").value;
    if (UDM != "m") {
        dmax= dmax / 1000;
    }
    var UDT = document.getElementById("udt").value;
    if (UDT != "m") {
        dist= dist / 1000;
    }
    var UTM = document.getElementById("utm").value;
    if (UTM != "s") {
        tiemax= tiemax / 60;
    }
    var UTV = document.getElementById("utv").value;
    if (UTV != "s") {
        tiem = tiem /60;
    }

    //Resultados
    document.getElementById("DistanciaFinal").value=Math.round(dist*100)/100;
    document.getElementById("disthmax").value=Math.round(dmax*100)/100;
    document.getElementById("tiemhmax").value=Math.round(tiemax*100)/100;
    document.getElementById("Tiempovuelo").value=Math.round(tiem*100)/100;
    document.getElementById("altmax").value=Math.round(hmax*100)/100;
}

function animar(ang,vel0,Alt0,dist,x) {


    //Canvas
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var xMax= canvas.width;
    var yMax= canvas.height;
    var yPos;
    var margenEjes=10;

    ctx.beginPath();
    //graficador
        yPos = 10+(x*Math.tan(ang)-((9.8*Math.pow(x,2))/(2*Math.pow(vel0,2)*Math.pow(Math.cos(ang),2))))+Number(Alt0);
        ctx.arc(x+10,yMax-yPos,2,0,2*Math.PI);
        ctx.strokeStyle="darkred";
        ctx.stroke();
        x=x+4;
    if(x<=dist)
    setTimeout(function(){
        animar(ang,vel0,Alt0,dist,x);
    }, 40)
}