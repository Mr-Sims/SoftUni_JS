function solution() {
    class Post {
        constructor(title, content) {
            this.title = title,
                this.content = content
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
        toTest() {
            return `this is a test ${this.constructor.name}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content)
            this.likes = likes
            this.dislikes = dislikes
            this.comments = []
        }

        addComment(value) {
            this.comments.push(value)
        }

        toString() {
            let result = super.toString() + `\nRating: ${this.likes - this.dislikes}\n`
            let comments = []
            if (this.comments.length > 0) {
                for (let comment of this.comments) {
                    comments.push(` * ${comment}`)
                }
                return result + comments.join('\n')
            } else {
                return result
            }
        }

    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content)
            this.views = views
        }
        toString() {
            return super.toString() + `\nViews: ${this.views}`

        }
        view() {
            this.views += 1
            return this
        }

    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
