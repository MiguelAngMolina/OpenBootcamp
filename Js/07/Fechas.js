const Fecha = new Date()
console.log(Fecha)

const FechaNac = new Date(2002, 10, 28)

const Comparador = Fecha > FechaNac
console.log(Comparador)

const DiaNac = FechaNac.getDate()
console.log(DiaNac)

const MesNac = FechaNac.getMonth()+1
console.log(MesNac)

const AnyNac = FechaNac.getFullYear()
console.log(AnyNac)
