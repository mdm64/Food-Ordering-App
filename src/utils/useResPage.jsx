import { useEffect, useState } from "react"

const useResPage = (resId) => {

    const [items, setItems] = useState(null);

    useEffect(() => {
        fetchApi();
    }, [])

    const fetchApi = async () => {
        const apiData = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId="+resId+"&isMenuUx4=true&submitAction=ENTER")
        const json = await apiData.json();
        let x = json?.data?.cards;
        setItems(x);
    }

    return items;
}

export default useResPage