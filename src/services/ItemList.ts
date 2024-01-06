import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setItemList } from "../redux/reducer/itemListReducer"
import { useState } from "react"

export const baseUrl = "https://5fc9346b2af77700165ae514.mockapi.io/products"


const getList = async () => {
    await axios
        .get(baseUrl)
        .then((res) => console.log(res)).catch((err) => console.log(err))
};

export default getList