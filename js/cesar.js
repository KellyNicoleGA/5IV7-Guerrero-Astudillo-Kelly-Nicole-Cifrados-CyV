var cesar = cesar || (function(){
    var proceso = function(txt, desp, action){
        var replace = (function(){//funcion aninoma
        //primero se necesita la matriz del alfabeto
        // el cifrado lo hace caracter popr caracter
            var abc = ['a', 'b', 'c','d','e','f','g','h', 'i', 'j','k','l','m','n',
            'o', 'p', 'q','r','s','t','u','v', 'w', 'x','y','z'];
            var longitud = abc.length;
            //obtener el posicionamiento por parte de la llave privada
            return function(c){
                //vamos a saber la posicion
                var i = abc.indexOf(c.toLowerCase());//hacer minuscula

                //saber donde estamos dentro de la matriz, y como la vamos a reorrer
                //que pasa cuando llegue al final (regresar)

                if(i!=-1){
                    //primero obtenemos la posicion para el desplazamiento
                    var pos = i;//que si esta adentro del rango
                    //cifrar o descifrar
                    if(action){
                        //cuando sea verdad, cifrar (adelante)
                        pos += desp;
                        //como se va a mover
                        pos -= (pos >= longitud)?1:0;

                    }else{
                        //descifrar (atras)
                        pos -= desp;
                        //movimiento
                        pos += (pos <0)?1:0;
    

                    }return abc[pos];

                }return c;

            };
        })();//llamar la funcion anonima
        //necesitamos saber que el texto este acorde al abecedario
        //expresion regular
        var re = (/([a-z])/ig);
        //una funcion que se encargue del intercambio
        return String(txt).replace(re, function(match){
            return replace(match);
        });
    };
    return{
        encode: function(txt, desp){
            return proceso(txt, desp, true); //saber que se esta cifrando

        },
        decode: function(txt, deso){
            return proceso(txt,deso, false);//descifrando
        }
    };
})();

//funcion de cifrado
function cifrar(){
    document.getElementById("resultado").innerHTML=
    cesar.encode(document.getElementById("cadena").value,3);
}
//funcion descifrado
function descifrar(){
    document.getElementById("resultado").innerHTML=
    cesar.decode(document.getElementById("cadena").value,3);
}