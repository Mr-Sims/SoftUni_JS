function extensibleObject() {
    return {
        extend: function(template) {

            let objProto = Object.getPrototypeOf(this);
            let templateEntries = Object.entries(template);
            for (const [key, value] of templateEntries) {
                if (typeof (value) == 'function') {
                    objProto[key] = value;
                } else {
                    this[key] = value;
                }
            }
        }
    }
}
const myObj = extensibleObject();
console.log(myObj)

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);

console.log(myObj)
console.log(myObj.__proto__)

