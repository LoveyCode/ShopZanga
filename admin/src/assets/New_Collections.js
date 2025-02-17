import p4 from './Boxers-3.jpg';
import p5 from './Boxers-4.jpg';
import p10 from './gown-1.jpg';
import p11 from './gown-2.jpg';
import p12 from './gown-3.jpg';
import p22 from './jumpsuit-1.jpg';
import p23 from './jumpsuit-2.jpg';
import p24 from './jumpsuit-3.png';
import p25 from './jumpsuit-4.jpg';
import p36 from './kids-11.jpeg';
import p37 from './kids-12.png';
import p42 from './Men-singlet-1.jpg';
import p43 from './Men-singlet-2.jpg';
import p45 from './men-singlet-4.jpg';
import p46 from './Men-t-shirt.jpeg';
import p50 from  './Socks-1.jpg';
import p9 from './Cufflinks-3.jpg';
import p31 from './kids-6.jpg';
import p64 from  './women-lingerie-pant-2.jpg';
import p73 from  './women-top-2.jpg';
import p75 from  './women-top-4.jpg';
import p7 from './cufflnks-1.jpeg';
import p20 from './joggers-3.jpg';
import p21 from './joggers-4.jpg';
import p53 from  './t-shirrt-white.jpeg';
import p44 from './men-singlet-4.jpg';
import p48 from './plain-facecap-blue.jpg';
import p60 from  './women-jeans-2.jpg';






let newproduct1=[
    {
        id: 4,
        name: "Floral Boxers",
        category: "men",
        image: p4,
        new_price: 4000.00,
        old_price: 5000.00,
    },
    {
        id: 5,
        name: "Red Boxers",
        category: "men",
        image: p5,
        new_price: 4000.00,
        old_price: 5000.00,
    },
{
    id: 10,
    name: "Red gown",
    category: "women",
    image: p10,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 11,
    name: "Grey gown with V neck",
    category: "women",
    image: p11,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 12,
    name: "Purple gown",
    category: "women",
    image: p12,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 22,
    name: "Fancy blue Jumpsuit",
    category: "women",
    image: p22,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 23,
    name: "Black off-shoulder jumpsuit",
    category: "women",
    image: p23,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 46,
    name: "Blue grey t shirt",
    category: "men",
    image: p46,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 50,
    name: "Socks",
    category: "men",
    image: p50,
    new_price: 4000.00,
    old_price: 5000.00,
},
// {
//     id: 51,
//     name: "Men blue suit",
//     category: "men",
//     image: p51,
//     new_price: 4000.00,
//     old_price: 5000.00,
// },
{
    id: 9,
    name: "Cufflinks",
    category: "men",
    image: p9,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 31,
    name: "Ankara set",
    category: "kids",
    image: p31,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 64,
    name: "Lingerie",
    category: "women",
    image: p64,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 73,
    name: "Top",
    category: "women",
    image: p73,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 75,
    name: "Top",
    category: "women",
    image: p75,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 24,
    name: "Jumpsuit",
    category: "women",
    image: p24,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 25,
    name: "Red jumpsuit",
    category: "women",
    image: p25,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 36,
    name: "Play set",
    category: "kids",
    image: p36,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 37,
    name: "Midi Joggers set",
    category: "kids",
    image: p37,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 42,
    name: "White singlet",
    category: "men",
    image: p42,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 43,
    name: "Black singlet",
    category: "men",
    image: p43,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 45,
    name: "3 color singlet set",
    category: "men",
    image: p45,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 7,
    name: "Custom Cufflinks",
    category: "men",
    image: p7,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 20,
    name: "Joggers",
    category: "women",
    image: p20,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 21,
    name: "Joggers-3 colors set",
    category: "women",
    image: p21,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 44,
    name: "Men blue suit",
    category: "men",
    image: p44,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 53,
    name: "White t-shirt",
    category: "men",
    image: p53,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 48,
    name: "blue face cap",
    category: "men",
    image: p48,
    new_price: 4000.00,
    old_price: 5000.00,
},
{
    id: 60,
    name: "Women jeans",
    category: "women",
    image: p60,
    new_price: 4000.00,
    old_price: 5000.00,
},
        
]





export default  newproduct1;