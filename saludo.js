function saludo (){
    
    do{
        var nombre = prompt("Ingrese su nombre")

        if(nombre.length<= 0){
            alert("Ingrese su nombre por favor")
        }
       
    }while(nombre.length<= 0)
    
    alert("Bienvenido " + nombre)
}

saludo()