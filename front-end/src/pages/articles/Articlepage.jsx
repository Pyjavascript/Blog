import { useParams } from "react-router-dom"
import articles from '../../article-content'

export default function Articlepage(){
    const {name} = useParams();
    const article = articles.find(a => a.name === name)
    
    return(
        <div className="cont-main">
        <h1 className="art-head">{article.title}</h1>
        <p className="art-body">{article.content}</p>
        </div>
    )
}