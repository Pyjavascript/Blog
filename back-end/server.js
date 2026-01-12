import express from 'express'
const app = express();

app.get('/',(req,res) => {
    res.send('backend is live')
})

app.listen(8000, () => {
    console.log("backend started...");
    
})