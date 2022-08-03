import page from './node_modules/page/page.mjs';
import { homeView } from './views/home.js';
import { articlesView } from './views/articles.js'
import { aboutView } from './views/about.js'
import { articleDetailsView } from './views/articleDetails.js'


page('/home', homeView)
page('/articles', articlesView)
page('/about', aboutView)
// page('/articles/:articleId', articleDetailsView)


page.start()