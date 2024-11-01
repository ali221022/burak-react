import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../lib/types/product";

/** REDUX SLICE & SELECTOR */

const actionDispatch = (dispatch: Dispatch) => ({
   setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const popularDishesRetriever = createSelector(
   retrievePopularDishes,
   (popularDishes) => ({popularDishes})
);

export default function HomePage() {
 const { setPopularDishes } = actionDispatch(useDispatch());
 const { popularDishes } = useSelector(popularDishesRetriever);


 useEffect(() => {
   // Backend server data request => Data
   const result = [ {
      "_id": "66fa72dc1f67bd6086942249",
      "productStatus": "PROCESS",
      "productCollection": "DISH",
      "productName": "Steak",
      "productPrice": 15,
      "productLeftCount": 100,
      "productSize": "NORMAL",
      "productVolume": 1,
      "productDesc": "This is the most delicious Steak.",
      "productImage": [],
      "productViews": 0,
      "createdAt": "2024-09-30T09:43:56.211Z",
      "updatedAt": "2024-09-30T13:12:59.856Z",
      "__v": 0
  }]; 

   //Slice: Data => Store
   // @ts-ignore
   setPopularDishes(result);
 }, []);
     

    return <div className={"home-page"}>
       <Statistics />
       <PopularDishes />
       <NewDishes />
       <Advertisement />
       <ActiveUsers />
       <Events />
    </div>;
  }
  