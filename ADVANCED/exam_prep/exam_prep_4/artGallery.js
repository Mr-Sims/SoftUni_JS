class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibeArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    };

    addArticle(articleModel, articleName, quantity) {
        if (!Object.keys(this.possibeArticles).includes(articleModel.toLowerCase())) {
            throw new Error('This article model is not included in this gallery!');
        }
        let filtered = this.listOfArticles.filter(x => (x.articleName == articleName && x.articleModel == articleModel.toLowerCase()));
        if (filtered.length == 0) {
            let article = {
                articleModel: articleModel.toLowerCase(),
                articleName,
                quantity
            };
            this.listOfArticles.push(article);
        } else {
            this.listOfArticles
                .filter(x => (x.articleName == articleName && x.articleModel == articleModel.toLowerCase()))
                .map(x => x.quantity += quantity);
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    };

    inviteGuest(guestName, personality) {
        let filtered = this.guests.filter(x => (x.guestName == guestName));
        if (filtered.length == 0) {
            let points;
            if (personality == 'Vip') {
                points = 500;
            } else if (personality == 'Middle') {
                points = 250;
            } else {
                points = 50;
            }
            let guest = {
                guestName,
                points,
                purchaseArticle: 0,
            };
            this.guests.push(guest);
            return `You have successfully invited ${guestName}!`;
        } else if (filtered.length > 0) {
            throw new Error(`${guestName} has already been invited.`);
        }
    };

    buyArticle(articleModel, articleName, guestName) {
        let filtered = this.listOfArticles.filter(x => (x.articleName == articleName && x.articleModel == articleModel.toLowerCase()));
        let article = filtered[0];
        let filteredGuest = this.guests.filter(x => (x.guestName == guestName));
        let guest = filteredGuest[0];

        if (article == undefined) {
            throw new Error('This article is not found.');
        } else {
            if (article.quantity < 1) {
                return `The ${articleName} is not available.`;
            }
            if (guest == undefined) {
                return `This guest is not invited.`;
            }
            let articlePrice = this.possibeArticles[articleModel.toLowerCase()];
            if (guest.points < articlePrice) {
                return `You need to more points to purchase the article.`;
            }
            else if (guest.points >= articlePrice) {
                this.listOfArticles
                    .filter(x => (x.articleName == articleName && x.articleModel == articleModel.toLowerCase()))
                    .map(x => x.quantity--);

                this.guests
                    .filter(x => (x.guestName == guestName))
                    .map(x => {
                        x.points -= articlePrice;
                        x.purchaseArticle++
                    });
                return `${guestName} successfully purchased the article worth ${articlePrice} points.`;
            }
        }
    };

    showGalleryInfo(criteria) {
        let result = [];
        if (criteria == 'article') {
            result.push('Articles information:');
            for (let art in this.listOfArticles) {
                let article = this.listOfArticles[art];
                result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`);
            };
        }
        else if (criteria == 'guest') {
            result.push(`Guests information:`);
            for (let g in this.guests) {
                let guest = this.guests[g];
                result.push(`${guest.guestName} - ${guest.purchaseArticle}`);
            }
        }
        return result.join('\n');
    };
}


// // test input 1
const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
/*
Successfully added article Mona Liza with a new quantity- 3.
Successfully added article Ancient vase with a new quantity- 2.
Successfully added article Mona Liza with a new quantity- 1.
*/

// // test input 2
const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
console.log(artGallery.inviteGuest('John', 'Middle'));
/*
You have successfully invited John!
 You have successfully invited Peter!
 John has already been invited.
*/

// // test input 3
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
/*
John successfully purchased the article worth 200 points.
Peter successfully purchased the article worth 250 points.
This article is not found.
 */

// // test input 4
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
/*
Articles information:
picture - Mona Liza - 3
item - Ancient vase - 1
Guests information:
John - 1
Peter - 1
*/
