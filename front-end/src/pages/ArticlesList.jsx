import articles from '../article-content'
import ArticleListPage from '../ArticleListPage'
export default function ArticleList(){
    return(
        <>
        <h1>Articles</h1>
        <ArticleListPage articles={articles}/>
        </>
    )
}