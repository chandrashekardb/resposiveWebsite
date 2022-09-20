import React,{useContext, useReducer, useEffect} from 'react'
import reducer from "./reducer";

const AppContext=React.createContext();

// const API="https://thapareactapi.up.railway.app";
const API="http://fakestoreapi.com/products"

const intialState={
    name:"",
    image:"",
    services:[],
};


const AppProvider=({children})=>{
    const [state, dispatch]=useReducer(reducer, intialState);

    const updateHomePage=()=>{
        return dispatch({
            type: "HOME_UPDATE",
            payload:{
                name:"Chandrashekar",
                image:"./images/hero1.png"
            }
        })
    }
    
    const updateAboutPage=()=>{
        return dispatch({
            type: "ABOUT_UPDATE",
            payload:{
                name:"Chandrashekar",
                image:"./images/hero2.png"
            }
        })
    };

    //To get the api data
const getServices=async(url)=>{
    try {
        const res= await fetch(url);
        const data=await res.json();
        dispatch({type:"GET_SERVICES", payload:data});
    } catch (error) {
        console.log(error);
    }
}

//To call the api
useEffect(()=>{
    getServices(API)
},[])


    return <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>{children}</AppContext.Provider>
};



//Global Contex
const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext, AppProvider, useGlobalContext};