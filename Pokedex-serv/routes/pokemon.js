const fs = require('fs');
const data = fs.readFileSync('./data/pokedex.json','utf-8')
const json = JSON.parse(data)

function links(router) {

   router.get('/pokemon/:id', function(req, res) {
    const idSelected = req.params.id
    const pokemon = json.find(element => {return idSelected == element.ndex} )
    res.send(pokemon)
    })

   router.get('/pokemon/:name', function(req, res) {
    const nom = req.params.name
    const pokemon = json.find(element => {return nom == element.name} )
    console.log(pokemon);
    res.send(pokemon)
    })

   router.get('/', function (req,res) {

    let tab = []
    for (let item of json)
     {
      tab.push({
       id: item.ndex,
       name: item.nom,
       type1 : item.type1,
       type2 : item.type2,
       couleur : item.couleur,
       attaques : item.attaques,
       poids : item.poids,
      })
     }

     // console.log(tab);
     res.send(tab)
   })

}

module.exports = links;
