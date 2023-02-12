DatosPersonales = {
    Nombre: "Miguel Angel",
    Apellido: "Molina",
    Edad : 20,
    Altura: 1.85,
    eresDesarrollador: true
}
const EdadMia = DatosPersonales.Edad
console.log(EdadMia)

const DatosTodos =[
{
    ...DatosPersonales
},    
{
    Nombre: "Felipe",
    Apellido: "Ortiz",
    Edad : 21,
    Altura: 1.82,
    eresDesarrollador: false

},
{   Nombre: "Cristian",
    Apellido: "Perez",
    Edad : 22,
    Altura: 1.95,
    eresDesarrollador: true
}]

console.log(DatosTodos)

const ListaOrd = DatosTodos.sort((a,b) => b.Edad - a.Edad 
)
console.log(ListaOrd)