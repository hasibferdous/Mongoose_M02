import express from "express";
import cors from "cors";

const app = express()

//using cors 
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
  })