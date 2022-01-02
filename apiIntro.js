const shop = {
    name: 'Alia Store',
    address: 'Ranbir road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    isExpensive: false
};

const shopApi = JSON.stringify(shop);
console.log('stringify version = ',shopApi);
console.log('object = ',shop);
const convertShop = JSON.parse(shopApi);
console.log('converted string to object ',convertShop);