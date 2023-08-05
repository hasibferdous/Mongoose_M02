const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 5000

async function boot() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-practice');
        console.log("Database Connected");
        app.listen(port, () => {
          console.log(`Example app listening on port ${port}`)
        })
    }
    catch(err){
        console.log("Failed to connect",err);
    }
    }

    boot()
app.get('/', (req, res) => {
  res.send('Hello World!')
})
