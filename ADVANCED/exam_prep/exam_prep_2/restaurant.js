class Restaurant {
    constructor(budget) {
        this.budgetMoney = Number(budget);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        let currentHistory = [];
        products.forEach(el => {
            let msg;
            let [name, quantity, price] = el.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            if (price <= this.budgetMoney) {
                if (!this.stockProducts[name]) {
                    this.stockProducts[name] = 0;
                }
                this.stockProducts[name] = quantity;
                this.budgetMoney -= price;
                msg = `Successfully loaded ${quantity} ${name}`;
            } else {
                msg = `There was not enough money to load ${quantity} ${name}`;
            };
            currentHistory.push(msg);
            this.history.push(msg);
        });
        return currentHistory.join('\n');
    };

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal] == undefined) {
            price = Number(price);
            this.menu[meal] = { neededProducts, price }
            let menuLen = Object.entries(this.menu).length;
            if (menuLen == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${menuLen} meals in the menu, other ideas?`;
            };
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        };
    };

    showTheMenu() {
        let menuLen = Object.entries(this.menu).length;
        if (menuLen > 0) {
            let menu = [];
            Object.entries(this.menu).forEach(el => {
                menu.push(`${el[0]} - $ ${this.menu[el[0]].price}`);
            });
            return menu.join('\n');
        } else {
            return `Our menu is not ready yet, please come later...`;
        }
    };

    makeTheOrder(meal) {
        if (this.menu[meal] == undefined) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        else {
            let unavailable = false
            for (let el of this.menu[meal].neededProducts) {
                let [name, need] = el.split(' ');
                need = Number(need);
                let stockProduct = this.stockProducts[name];
                if (stockProduct == undefined || need > stockProduct) {
                    unavailable = true;
                }
            }
            if (unavailable) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            } else {
                for (let el of this.menu[meal].neededProducts) {
                    let [name, need] = el.split(' ');
                    need = Number(need);
                    this.stockProducts[name] -= need;
                }    
                let price = this.menu[meal].price;
                this.budgetMoney += price;
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`;                
            };
        };
    };
}

// test code 1
// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// Successfully loaded 10 Banana
// Successfully loaded 20 Banana
// Successfully loaded 50 Strawberries
// Successfully loaded 10 Yogurt
// There was not enough money to load 500 Yogurt
// Successfully loaded 5 Honey
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// test code 2
// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.showTheMenu())

// Great idea! Now with the frozenYogurt we have 1 meal in the menu, other ideas?
// Great idea! Now with the Pizza we have 2 meals in the menu, other ideas?
// frozenYogurt - $ 9.99
// Pizza - $ 15.55
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// test code 3
// let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());

// frozenYogurt - $ 9.99
// Pizza - $ 15.55
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// test code 4
let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

// Your order (frozenYogurt) will be completed in the next 30 minutes and will cost you 9.99.