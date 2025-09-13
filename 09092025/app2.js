const frutas =["Banana"];
frutas.push("Sandia");//al final
frutas.unshift("mango");//inicial
frutas.push("pera");//al final
frutas.unshift("fresa");//inicial

console.log(frutas);
//completo
for(let fruta of frutas){
    console.log(fruta);
}
//eliminar
console.log("-_-_-_-_-_-_-_-_-_-_-")
frutas.pop();//elimina el final 
frutas.shift();//elimina el incio
for(let fruta of frutas){
    console.log(fruta);
}
// const puerto = 3306;
// puerto = 3308;
// console.log(puerto);

