import {createContext, useEffect, useState} from "react";
import newproduct1 from '../Components/Assets/New_Collections'


export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
      cart[index] = 0
    }
    return cart;
}

const getDefaultWishlist = () => {
    let wishlist = {};
    for (let index = 0; index < 300+1; index++) {
      wishlist[index] = 0
    }
    return wishlist;
}


const ShopContextProvider = (props) => {
    const [all_product, setAll_product]=useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const [wishlistItems, setWishlistItems] = useState(getDefaultWishlist())

    useEffect(() => {
        fetch('https://zanga-dtb7.onrender.com/allproducts')
            .then((response) => response.json())
            .then((data) => setAll_product(data));
    
  
        if (localStorage.getItem('auth-token')) {
            fetch('https://zanga-dtb7.onrender.com/getcart', { 
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => setCartItems(data));
        }
    }, []);


    useEffect(() => {
        fetch('https://zanga-dtb7.onrender.com/allproducts')
            .then((response) => response.json())
            .then((data) => setAll_product(data));
    
        if (localStorage.getItem('auth-token')) {
            fetch('https://zanga-dtb7.onrender.com/getwishlist', { 
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => setWishlistItems(data));
        }
    }, []);
    
const addToCart = (itemId) =>{

setCartItems ((prev) =>({...prev, [itemId] :prev[itemId] +1}));

if (localStorage.getItem('auth-token')){
    fetch('https://zanga-dtb7.onrender.com/addtocart', {
        method: 'POST',
        headers:{
            Accept: 'application/form-data',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({'itemId':itemId}), 
    })   
}
}

const removeFromCart = (itemId) =>{
    setCartItems ((prev) =>({...prev, [itemId] :prev[itemId] -1}))

    if (localStorage.getItem('auth-token')){
        fetch('https://zanga-dtb7.onrender.com/removefromcart', {
            method: 'POST',
            headers:{
                Accept: 'application/form-data',
                'auth-token': `${localStorage.getItem('auth-token')}`,
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({'itemId':itemId}), 
        })
  
        }
    }

    const addToWishlist = (itemId) =>{
        setWishlistItems ((prev) =>({...prev, [itemId] :prev[itemId] +1}));
        // this line means if localStorage has the auth-token, that means we are 
        // LoginSignup, then we can fetch in the 2nd line
        if (localStorage.getItem('auth-token')){
           
            fetch('https://zanga-dtb7.onrender.com/addtowishlist',{
                method: 'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({'itemId':itemId}), 
            })
            }
        
        }

    const removeFromWishlist = (itemId) =>{
        setWishlistItems ((prev) =>({...prev, [itemId] :prev[itemId] -1}))
        if (localStorage.getItem('auth-token')){
            fetch('https://zanga-dtb7.onrender.com/removefromwishlist',{
                method: 'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({'itemId':itemId}), 
            })
           
            }
        }
    



const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0)
            {
            let itemInfo = all_product.find((product) =>product.id===Number(item))
            totalAmount += itemInfo.new_price * cartItems[item]; 
        }
       
    }
    return totalAmount;
}

const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems)
    {
        if(cartItems[item] > 0)
        {
            totalItem  += cartItems[item];
        }
       
    }
    return totalItem;
}

const getTotalWishlistItems = () => {
    let totalWishlist =0;
    for (const item in wishlistItems)
    {
        if(wishlistItems[item] > 0)
            {
                totalWishlist  += wishlistItems[item];
            }
    }
    return totalWishlist;
}



    const contextValue = {getTotalWishlistItems, getTotalCartItems, getTotalCartAmount, 
        newproduct1, all_product, cartItems, wishlistItems,
        addToCart, removeFromCart, addToWishlist, removeFromWishlist};
    return (
    <div>
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    </div>
    )
}

export default ShopContextProvider;