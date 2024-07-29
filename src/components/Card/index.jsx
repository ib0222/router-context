import { useContext, useState } from "react"
import { CardContext } from "../../context/CardContext"
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io"

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
    <div className="relative border p-3 rounded-xl bg-slate-300 hover:bg-slate-500 ease-in-out duration-300 ">
      <div className="flex justify-end z-50">
        <button className="bg-white p-1 rounded-full" onClick={handleFavorite}>
          {favorites.findIndex((item) => item.id === id) !== -1 ? (
            <IoMdHeart className="size-5 text-red-700" />
          ) : (
            <IoIosHeartEmpty className="size-5 text-red-700" />
          )}
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
