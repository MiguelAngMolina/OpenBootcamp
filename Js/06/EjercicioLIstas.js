const lista = ["Arroz", "Maiz", "Jabon", "Leche", "Carne"]

lista.push("Aceite de Girasol")
console.log(lista)
lista.pop()

console.log(lista)

const pelis= [
    {
        titulo: "Toy Story",
        director: "John Lasseter",
        fecha: new Date(1995, 12, 25)
    },
    {
        titulo: "Ratatouille",
        director: "Brad Bird",
        fecha: new Date(2007, 06, 27)
    },
    {
        titulo: "Joker ( El bromas )",
        director: "Todd Phillips",
        fecha: new Date(2019, 10, 04)
    }
]

const peliculasRecientes = pelis.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))

console.log(peliculasRecientes)

const directores = pelis.map(pelicula => {
    return pelicula.director
})

console.log(directores)

const titulos = pelis.map(pelicula =>  pelicula.titulo)

console.log(titulos)


const directores_titulos = directores.concat(titulos)
console.log(directores_titulos)
const directores_titulos_prop = [...directores, ...titulos]
console.log(directores_titulos_prop)