const storeRevenue = require('./storeRevenue');

const sampleData = [
    ['Australia', undefined, undefined],
    ['NSW', 'Australia', undefined],
    ['Sydney', 'NSW', undefined],
    ['Newcastle', 'NSW', undefined],
    ['Sydney Store 1', 'Sydney', 10000],
    ['Sydney Store 2', 'Sydney', 15000],
    ['Sydney Sub Store 21', 'Sydney Store 2', 8000],
    ['Sydney Sub Store 22', 'Sydney Store 2', 9000],
    ['Newcastle Store 1', 'Newcastle', 5000],
    ['Victoria', 'Australia', undefined],
    ['Melbourne', 'Victoria', undefined],
    ['Melbourne Store 1', 'Melbourne', 20000],
    ['Vietnam', undefined, undefined],
    ['Saigon', 'Vietnam', undefined],
    ['Ha Noi', 'Vietnam', undefined],
    ['Saigon Store 1', 'Saigon', 5000],
    ['HN Store 1', 'Ha Noi', 5000],
    ['HN Store 2', 'Ha Noi', 6000]
];

storeRevenue.getLocationAmount('Australia', sampleData) // return 67,000
storeRevenue.getLocationAmount('Newcastle', sampleData) // return 5,000
storeRevenue.getLocationAmount('Sydney Store 2', sampleData) // return 32,000
storeRevenue.getLocationAmount('Ha Noi', sampleData) // return 11,000

//For testing, when samples are given not in order
const sampleDataOutOfOrder = [
    ['Sydney Sub Store 21', 'Sydney Store 2', 8000],
    ['Sydney Sub Store 22', 'Sydney Store 2', 9000],
    ['Australia', undefined, undefined],
    ['NSW', 'Australia', undefined],
    ['Sydney', 'NSW', undefined],
    ['Newcastle', 'NSW', undefined],
    ['Sydney Store 1', 'Sydney', 10000],
    ['Sydney Store 2', 'Sydney', 15000],
    ['Newcastle Store 1', 'Newcastle', 5000],
    ['Victoria', 'Australia', undefined],
    ['Melbourne', 'Victoria', undefined],
    ['Melbourne Store 1', 'Melbourne', 20000],
    ['Vietnam', undefined, undefined],
    ['Saigon', 'Vietnam', undefined],
    ['Saigon Store 1', 'Saigon', 5000],
    ['HN Store 1', 'Ha Noi', 5000],
    ['HN Store 2', 'Ha Noi', 6000],
    ['Ha Noi', 'Vietnam', undefined]
];
storeRevenue.getLocationAmount('Australia', sampleDataOutOfOrder) // return 67,000
storeRevenue.getLocationAmount('Newcastle', sampleDataOutOfOrder) // return 5,000
storeRevenue.getLocationAmount('Sydney Store 2', sampleDataOutOfOrder) // return 32,000
storeRevenue.getLocationAmount('Ha Noi', sampleDataOutOfOrder) // return 11,000
