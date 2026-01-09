import { Link } from "react-router-dom";

export default function ArticleListPage({articles}){
    return (
        <>
         {
           articles.map(a => (
           <Link to={`/articles/${a.name}`}>
            <h3>{a.title}</h3>
            <p>{a.content.substring(0,150)}...</p>
           </Link>
           ))
        }
        </>
    )
}