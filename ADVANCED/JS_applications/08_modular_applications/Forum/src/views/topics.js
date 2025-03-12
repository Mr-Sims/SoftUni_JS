import { getAllTopics } from '../api/data.js';
import { spinner } from '../common/spinner.js';
import { html, until } from '../lib.js';

const topicsTemplate = (topicsPromise) => html`
<h1>Topics</h1>
<div>
    
   ${until(topicsPromise, spinner())}
</div>`

const topicPreviewCard = (topic) => html`
<article class="preview drop">
    <header><a href="${`/topic/${topic._id}`}">${topic.title}</a></header>
    <div>
        <span>Post by: ${topic.author.username}</span> | <span>22 Comments</span>
    </div>
</article>`;


export function showTopics(ctx) {
    ctx.render(topicsTemplate(loadTopics()));
}

async function loadTopics() {
    const topics = await getAllTopics();
    return topics.map(topicPreviewCard)
}