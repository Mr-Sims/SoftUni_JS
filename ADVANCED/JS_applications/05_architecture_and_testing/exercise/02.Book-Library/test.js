const { chromium } = require('playwright-chromium')
const { expect } = require('chai')

const mockData = {
    "d953e5fb-a585-4d6b-92d3-ee90697398a0":{
        "author":"J.K.Rowling",
        "title":"Harry Potter and the Philosopher's Stone"
    },
    "d953e5fb-a585-4d6b-92d3-ee90697398a1":{
        "author":"Svetlin Nakov",
        "title":"C# Fundamentals"
    }
};

function json(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
};

describe('Tests', async function() {
    this.timeout(50000)
    let page, browser;

    before (async () => {
        browser = await chromium.launch({headless: false, slowMo: 500})
    });

    after(async () => {
        await browser.close()
    });

    beforeEach(async () => {
        page = await browser.newPage()
    });
    
    afterEach(async () => {
        await page.close()
    });

    it('screenshot', async () => {
        await page.goto('http://localhost:5500');
        await page.screenshot({path: 'page.png'})
    });

    it('load and display all books', async () => {
        await page.route('**/jsonstore/collections/books*', (route) => {
            route.fulfill(json(mockData));
        });

        await page.goto('http://localhost:5500');
        await page.click('text=load all books');

        await page.waitForSelector('text=Harry Potter');

        const rows = await page.$$eval('tr', (rows) => rows.map(r => r.textContent.trim()))
        expect(rows[1]).to.contains('Harry Potter');
        expect(rows[1]).to.contains('J.K.Rowling');
        expect(rows[2]).to.contains('C# Fundamentals');
        expect(rows[2]).to.contains('Svetlin Nakov');
    })

    it.only('book create', async () => {
        await page.goto('http://localhost:5500')

        await page.fill('form#createForm >> input[name="title"]', 'Title')
        await page.fill('form#createForm >> input[name="author"]', 'Author')

        

        const [request] = await Promise.all([
            page.waitForRequest(request => request.method() == 'POST'),
            page.click('form#createForm >> text=Submit')
        ])

        const data = JSON.parse(request.postData());
        // console.log(data.title);
        // console.log(data.author);

        expect(data.title).to.equal('Title')
        expect(data.author).to.equal('Author')
    });
});
