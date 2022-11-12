
class gato {
 //2. Definir mis atributos como variables vacias
    nombre = "";
    edad = 0;
    raza = "";
    caracter = "";

 //4. Agregar constructores. Son los que ayudan a instanciar o materializar
 constructor(nombre,edad,raza,caracter) { //funcion especial para construir donde necesitamos parametros
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza ;
    this.caracter = caracter;
}

//3.Definir los metodos que serán definidos como funciones o acciones
maullar (){
    console.log("Miau");
}

dormir(){
    console.log("Zzzz");
}

ronronear(){
    console.log("Prrrr");
}

}
//Para empezar a crear o instanciar objetos (gatos) vamos a utilizar la palabra reservada new

var Gardfield = new gato("Gardfield", 9, "Naranja", "Dormilon");
var Felix = new gato("Felix",4, "Caricaturas", "Amistoso");
var Kitty = new gato("Kitty",1,"kawaii", "tranquilo");
var Chiquitin = new gato("Chiquitin", 2, "blanco", "comelon");
var Tessa = new gato("Tessa", 3, "negra", "floja");

console.log(Gardfield);
Gardfield.dormir();

console.log(Felix);
Felix.maullar();

console.log(Kitty);
Kitty.ronronear();

console.log(Chiquitin);
Chiquitin.dormir();

console.log(Tessa);
Tessa.maullar();