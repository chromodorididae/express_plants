//npm init -y
//npm i express

const express = require('express')
const app = express()
const PORT = 3000
//change to 8080 if being used

const plants = ['Rose', 'Tulip', 'Carnation'];

// convert function to arrow function, remove () ?

//CANNOT GET / - NO ROOT ROUTE

// /:indexOfPlantsArray
/// :color
// /plants



// app.get('/:indexOfPlantsArray', (req, res) => {
//     if (plants[req.params.index]) {
//         res.send(plants[req.params.indexOfPlantsArray]);

//     }else {
//         res.send ('cannot find anything at this index' + req.params.indexOfPlantsArray);
//     }
// }); //

//ONLY 1 RESPONSE PER REQUEST

app.get('/awesome', (req, res) => {
    // console.log('/awesome')
    res.send(`<h1>Plants rule</h1>
    <img src="https://nintendosoup.com/wp-content/uploads/2022/11/Pokemon-Anime-Sprigatito.jpg" height= "360" width="640">`);
}); //request 1

app.get("/:indexOfPlantsArray", (req, res) => {
    res.send(plant[req.params.indexOfPlantArray]);
}); //request 2

// app.get('/:index', (req, res) () => {
//     res.send(plants[req.params.index]);
        //a second res.send would not work
// });


//HOWDY PT 1
//add howdy route below:
// app.get('/hello/:firstname/:lastname', (req, res) => {
//     console.log(req.params);
//     res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
//     //in your browser, go to localhost:3000/hello/bob/bobbybob
//     // { firstname: 'bob', lastname: 'bobbybob' } input into url
//     //check the req.params console.log in Terminal
// }); //prints hello bob bobbybob

// path => params => params

// HOWDY PT 2

app.get('/howdy/:firstName', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send('hello ' + req.query.title + ' ' + req.params.firstName)
}); //prints HELLO DUKE BOB
// /howdy/bob?title=duke&year2001

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT)
})

//place routes in the order which they are defined

