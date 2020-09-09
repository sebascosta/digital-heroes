let express = require ('express')
console.log(express);

const app = express();
const json = require ('./heroes.json')

app.listen ( 3000, ()=> console.log ("sevidor activo"))

app.get ('/', function(req, res){
    res.send (" Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.")
})

app.get ('/heroes', function(req, res){
    res.sendfile('heroes.json')})