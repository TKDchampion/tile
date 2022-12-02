export const API_URL = {
    // Article
    getAllNewsArticles: () => 'article/getAllNews',
    getArticleDetail: (id: string) => `article/getDetailById/${id}`,
    getArticleForUser: () => 'article/getByUser',
    createArticle: () => 'article/create',
    updateArticle: (id: string) => `article/update/${id}`,
    deleteArticle: (id: string) => `article/delete/${id}`,
}