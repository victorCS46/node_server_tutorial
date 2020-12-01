// let get = async () => {
    //     await axios.get(`https://pokeapi.co/api/v2/pokemon/volcarona`)
    //     .then( (response) => {
    //         let data = response.data
    //         let js = {
    //             name: data.name,
    //             index: data.id,
    //             ability: data.abilities[0].ability.name,
    //             stats: {
    //                 ps: data.stats[0].base_stat,
    //                 attack: data.stats[1].base_stat,
    //                 defense: data.stats[2].base_stat,
    //                 sp_attack: data.stats[3].base_stat,
    //                 sp_defense: data.stats[4].base_stat,
    //                 speed: data.stats[5].base_stat,
    //             }
    //         } 
    //         console.log(`Name: ${data.name}`)
    //         console.log(`No.: ${data.id}`)
    //         console.log(`Ability: ${data.abilities[0].ability.name}`)
    //         console.log(`====Stats====`)
    //         console.log(`PS: ${data.stats[0].base_stat}`)
    //         console.log(`Attack: ${data.stats[1].base_stat}`)
    //         console.log(`Defense: ${data.stats[2].base_stat}`)
    //         console.log(`Sp. Attack: ${data.stats[3].base_stat}`)
    //         console.log(`Sp. Defence: ${data.stats[4].base_stat}`)
    //         console.log(`Speed: ${data.stats[5].base_stat}`)
    //     })
    //     .catch( (err) => {
    //         console.log('No pokemon with that name')
    //     })
    // }
    // get()
    
    // http.createServer( (req, res) => {
    
    //     res.writeHead(200, {'content-type': 'application/json'})
    //     let output = {
    //         name: 'Victor',
    //         age: 20,
    //         url: req.url
    //     }
    //     res.write(JSON.stringify(output))
    //     res.end()
    // }).listen(3000, '127.0.0.1')
    
    // console.log('listen: http://127.0.0.1:3000')
    
    // const http = require('http');
    
    // const hostname = '127.0.0.1';
    // const port = 3000;
    
    // const server = http.createServer((req, res) => {
    //   res.statusCode = 200;
    //   res.setHeader('Content-Type', 'text/plain');
    //   res.end('Hello, World!\n');
    // });
    
    // server.listen(port, hostname, () => {
    //   console.log(`Server running at http://${hostname}:${port}/`);
    // });