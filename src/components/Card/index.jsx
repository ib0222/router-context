import { useContext } from "react"
import { CardContext } from "../../context/CardContext"

const Card = ({ id, image, title, price }) => {
  const { favorites, setFavorites } = useContext(CardContext)

  const handleFavorite = () => {
    const foundIndex = favorites.findIndex((item) => item.id === id)
    if (foundIndex === -1) {
      setFavorites([...favorites, { id, image, title, price }])
    } else {
      setFavorites(favorites.filter((item) => item.id !== id))
    }
  }

  return (
    <div className="border p-3 rounded-xl bg-slate-300 hover:bg-slate-500 ease-in-out duration-300 ">
      <div className="flex justify-end">
        <button className="p-2 bg-white" onClick={handleFavorite}>
          ❤️
        </button>
      </div>
      <div className="flex justify-center w-">
        <img
          src={image}
          alt=""
          className="rounded object-contain w-24 mix-blend-multiply"
        />
      </div>
      <div className="text-center mt-3 font-bold">
        <h3>{title}</h3>
      </div>
      <div className="text-center mt-3">{price} $</div>
    </div>
  )
}

export default Card
