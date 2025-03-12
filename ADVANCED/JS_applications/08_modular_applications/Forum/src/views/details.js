import { getTopicById, getCommentsByTopicId } from '../api/data.js';
import { spinner } from '../common/spinner.js';
import { html, until } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (promise) => html`
<div class="drop main">
    ${until(promise, spinner())}
</div>`;

const topicCard = (topic, isOwner, comments) => html`
    <header>
        <h1>${topic.title}</h1>
        <div class="controls">
            ${isOwner
        ? html`<a class="action" href="/edit/${topic._id}"}>Edit</a><a class="action" href="javascript:void(0)">Delete</a>`
        : html`<span>${topic.author.username}</span>`}
        </div>
    </header>
    <div class="topic-content">
        <p>${topic.content}</p>
    </div>
    ${commentForm()}
    <div class="topic-content">
        ${comments.map(commentsCard)}
    </div>
`;

const commentsCard = (comment) => html`
<article class="comment">
    <header>By: ${comment.author.username}</header>
    <div class="topic-content">
        <p >${comment.content}</p>
    </div>
</article>
`;

const commentForm = () => html`
<div class="topic-content">
        <form>
            <input type="text" name="comment-content" />
        </form>
    </div>
`



export function showDetails(ctx) {
    ctx.render(detailsTemplate(loadTopic(ctx.params.id)));
}

async function loadTopic(id) {
    const [topic, comments] = await Promise.all([
        getTopicById(id),
        getCommentsByTopicId(id)
    ]);

    console.log(comments)

    const userData = getUserData();
    const isOwner = userData.id == topic._ownerId;

    return topicCard(topic, isOwner, comments);
}