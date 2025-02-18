
import { createContext, useEffect, useState } from "react";
//import { foodlist } from "../assets/manu";
import axios from 'axios'  //{axios}
export const StoreContext = createContext(null)
//import { StoreContext } from "../../Context/StoreContext.";




const StoreContextProvider = (props) => {
    const [cardItems, setCardItems] = useState({})
    //const url = "http://localhost:4001"
    const url = "https://backend-18-0jhq.onrender.com"
    //const url = "https://app.netlify.com/sites/backend-speed-del/overview"
    const [token, setToken] = useState("");
    const [foodlist, setFoodList] = useState([]);
    const [search, setSearch] = useState("milk");


    const addToCard = async (itemId) => {
        if (!cardItems[itemId]) {
            setCardItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url + "/api/card/add", { itemId }, { headers: { token } })

        }
    }
    const removeFromCard = async (itemId) => {
        setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (token) {
            await axios.post(url + "/api/card/remove", { itemId }, { headers: { token } })
        }
    }
    const getTotalCardAmount = () => {
        let totalAmount = 0;
        for (const item in cardItems) {
            if (cardItems[item] > 0) {

            }
            let itemInfo = foodlist.find((product) => product._id === item);
            totalAmount += itemInfo.price * cardItems[item]
        }
        return totalAmount;
    }
        
          
    const fetchhFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data)
    }
    const loadCardData = async (token) => {
        const response = await axios.post(url + "/api/card/get", {}, { headers: { token } });
        setCardItems(response.data.cardData);
    }
    useEffect(() => {
        async function loadData() {
            await fetchhFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCardData(localStorage.getItem("token"));
                (`${url}&search=${search}`)
            }
        }
        loadData();

    }, [search])


    const contextValue = {
        foodlist,
        cardItems,
        setCardItems,
        addToCard,
        removeFromCard,
        getTotalCardAmount,
        url,
        token,
        setToken,
        search,
        setSearch


    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider


/*

const [search,setSearch] = useState("milk");
    

   const sdata = async (item) =>{
    if (item ===item){
        setSearch((prev)=>({...prev,[item]:1}))

    }
    else{
        setSearch((prev) => ({...prev,[item]:prev[item]+1}))
    }

   }

import { createContext, useState } from "react";
import { foodlist } from "../assets/manu";
export const StoreContext =createContext(null)

const StoreContextProvider =(props)=>{
    const [cardItems,setCardItems] = useState({})
    
    

    const contextValue ={
        foodlist,
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider



useEffect(()=>{
        console.log(cardItems)
    },[cardItems])


    async function loadData() {
            await fetchhFoodList();
            
        }
        loadData();


        const fetchhFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data)
    }
    useEffect(() => {

        async function loadData() {
            await fetchhFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();

    }, [])


    //


    import axios from 'axios'; // Ensure this is imported

export const fetchhFoodList = async () => {
  try {
    const response = await axios.get('/api/food-list');
    return response.data;
  } catch (error) {
    console.error('Error fetching food list:', error);
    throw error;
  }
};

const loadData = async () => {
  const foodList = await fetchhFoodList();
  setFoodList(foodList); // Assuming `setFoodList` is your state updater
};

*/
