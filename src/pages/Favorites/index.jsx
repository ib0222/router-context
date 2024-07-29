import React, { useContext } from "react"
import { CardContext } from "../../context/CardContext"
import Card from "../../components/Card"
const Favorites = () => {
  const { favorites, setFavorites } = useContext(CardContext)
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-20 gap-10 my-4 ">{
      favorites.map((item) => (
        <Card
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
      ))
    }</div>
}

export default Favorites
