import DetailedFoodCard from "./DetailedFoodCard";

const FoodCard = (props) => {
    const {itemParam} = props;
    // console.log(itemParam.itemCards);

    return (
        <div>
            {
                itemParam.itemCards.map((item) => {
                    return <DetailedFoodCard key={item.card.info.id} data={item.card.info}/>
                })
            }
        </div>
    )
}

export default FoodCard;