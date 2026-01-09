import { useParams } from "react-router-dom"
import articles from '../article-content'

export default function Articlepage(){
    const {name} = useParams();
    const article = articles.find(a => a.name === name)
    console.log(article);
    
    return(
        <>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
        </>
    )
}