import { Link } from "react-router-dom";

export default function ArticleListPage({ articles }) {
    return (
        <>
            <div className="cont">
                {
                articles.map(a => (
                    <div className="art-cont" >
                        <Link to={`/articles/${a.name}`}>
                            <h3 className="art-head">{a.title}</h3>
                            <p className="art-body">{a.content.substring(0, 150)}...</p>
                        </Link>
                    </div>
                ))
            }
            </div>
        </>
    )
}