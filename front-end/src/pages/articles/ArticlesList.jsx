import articles from '../../article-content'
import ArticleListPage from './ArticleListPage'
export default function ArticleList() {
    return (
        <>
            <ArticleListPage articles={articles} />
        </>
    )
}