import express from 'express'
const app = express();
const articleInfo = [
    {articleName:"learn-node", upvote:0},
    {articleName:"learn-react", upvote:0},
    {articleName:"learn-mongoose", upvote:0},
]

app.use(express.json())
app.get('/',(req,res) => {
    res.send('backend is live')
})
app.get('/username/:name',(req,res) => {
    const {name} = req.params;
    res.send(`your name is ${name}`);
    
})
app.post('/api/articles/:articleName/upvote', (req,res) => {
    const {articleName} = req.params;
    const article = articleInfo.find(ar => ar.articleName == articleName)
    if(!article){
        res.send('No articlr found')
    }
    article.upvote += 1;
    res.send({
        messsage:"Success",
        articleInfo
    })
})
app.get('/data',(req,res) => {
    res.send(articleInfo)
})

app.listen(8000, () => {
    console.log("backend started...");
    
})