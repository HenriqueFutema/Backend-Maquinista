const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("AAAA")
})

app.listen(3000, () => {
    console.log('Porta 3000');

})