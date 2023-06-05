import { configureStore } from "@reduxjs/toolkit";
import compareMobile from "./Slices/HomeSlice"
export default configureStore({
    reducer:{
        compare:compareMobile
    }
})