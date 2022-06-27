export default class HeadphonesStoreService{

    data =[
        {
            id: 1,
            img: "apple_byz_s8521.png",
            title: 'Apple BYZ S8521',
            oldprice: 3527,
            discount: '',
            price: 2927,
            rate: 4.7,
            type: 'wired'
        },    
        {
            id:2,
            img: "apple_earpods.png",
            title: 'Apple EarPods',
            oldprice: '',
            discount: '',
            price: 2327,
            rate: 4.5,
            type: 'wired'
        }, 
        {
            id:3,
            img: "JVC-Wood-Black.png",
            title: 'JVC Wood Black',
            oldprice: '',
            discount: 10,
            price: 15999,
            rate: 4.5,
            type: 'wired'
        }, 
        {
            id: 4,
            img: "Bang-&-Olufsen-BeoPlay-H3.png",
            title: 'Bang & Olufsen BeoPlay H3',
            oldprice: 10999,
            discount: '',
            price: 9399,
            rate: 4.7,
            type: 'wired'
        },    
        {
            id:5,
            img: "Razer-Hammerhead-Duo.png",
            title: 'Razer Hammerhead',
            oldprice: '',
            discount: '',
            price: 6999,
            rate: 4.7,
            type: 'wired'
        }, 
        {
            id:6,
            img: "Samsung-HS130-Blue.png",
            title: 'Samsung HS130',
            oldprice: '',
            discount: '15',
            price: 5999,
            rate: 4.3,
            type: 'wired'
        }, 
        {
            id:7,
            img: "apple_airpods.png",
            title: 'Apple AirPods',
            oldprice: '',
            discount: '',
            price: 9527,
            rate: 4.7,
            type: 'wireless'
        }, 
        {
            id:8,
            img: "gerlax_gh-04.png",
            title: 'GERLAX GH-04',
            oldprice: '',
            discount: '',
            price: 6527,
            rate: 4.7,
            type: 'wireless'
        }, 
        {
            id:9,
            img: "borofone_bo4.png",
            title: 'BOROFONE BO4',
            oldprice: '',
            discount: '',
            price: 7527,
            rate: 4.7,
            type: 'wireless'
        }, 
        {
            id: 10,
            img: 'samsung-galaxy-buds.png',
            title: 'Samsung Galaxy Buds2',
            oldprice: 6999,
            discount: '',
            price: 5599,
            rate: 4.8,
            type:'wireless'
        }
    ];


    getHeadphones = async () => {
        return this.data;
    }

};