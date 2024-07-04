/*let superHeroes= [
    "Ironman",
    "Superman",
    "Hawkeye"
    ]
    superHeroes.splice(3, 0, 'flash')
    ;

    console.log(superHeroes)*/

    /*const superHeroes = ['ironman' , 'superman' ,'hawkeye']
superHeroes.unshift('spideerman');

console.log(superHeroes)*/


/*const superHeroes = ['ironman' , 'superman' ,'hawkeye']
superHeroes.splice(2, 0, 'spiderwoman')
console.log(superHeroes);*/


/*const usuarios = ["Erick", "Cristian", "Max", "Claudia"];
usuarios.pop();
console.log(usuarios);*/

/*const usuarios = ["Erick", "Cristian", "Max", "Claudia"];
usuarios.unshift('maria jose')*/


/*const usuarios = ["Erick", "Cristian", "Max", "Claudia"];
usuarios.splice(index, 1) ;
console.log(usuarios);*/


/*const peliculas = [
    {id: 1, nombre: "Thor"},
    {id: 2, nombre: "Ant-Man"},
    {id: 3, nombre: "Terminator"},
    {id: 4, nombre: "Ip Man"},
    {id: 5, nombre: "Rocky"},
    ]

    const indiceDeTerminator = peliculas.findIndex( peliculas => peliculas.nombre === "Terminator" );
console.log(indiceDeTerminator); 


if (indiceDeTerminator !== -1) {
    peliculas.splice(indiceDeTerminator, 1);
}

console.log(peliculas);*/

let trabajadores = [
    {nombre: "Contanza", cargo: "Chef"},
    {nombre: "Luis", cargo: "garzón"},
    {nombre: "Estefany", cargo: "Administradora"},
    {nombre: "Andrés", cargo: "Recepcionista"},
    {nombre: "Pedro", cargo: "garzón"},
    {nombre: "Felipe", cargo: "Aseo"},
    {nombre: "Maria", cargo: "garzón"},
    {nombre: "Diego", cargo: "garzón"},
    ]

    const trabajadores_filtrados = trabajadores.filter(x == x == "garzón");
console.log(trabajadores_filtrados);