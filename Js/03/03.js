let nombre = "Miguel Angel"
let apellido = "Molina"
let estudiante = nombre.concat(" ").concat(apellido)

let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()

let estudianteLength = estudiante.length

let inicialNombre = nombre.substring(0, 1)
let finalApellido = apellido.substring(apellido.length -1)
let estudianteSinEspacios = estudiante.replace(/ /g, "")
let nombreEnEstudiante = estudiante.includes(nombre)
