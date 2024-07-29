import { useContext } from "react"
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
    <div className="relative border p-3 rounded-xl bg-slate-300 hover:bg-slate-500 ease-in-out duration-300 flex flex-col min-h-[400px]">
      <div className="flex-1 flex justify-center items-center h-1/2">
        <img
          src={image}
          alt={title}
          className="rounded object-contain mix-blend-multiply w-full h-full"
        />
      </div>
      <div className="flex-1 text-center font-bold flex flex-col justify-center items-center h-1/2">
        <h3 className="text-lg font-semibold tracking-wide text-slate-800 line-clamp-2">
          {title}
        </h3>
        <p className="text-lg mt-2 text-slate-700">{price} $</p>
      </div>
      <button
        className="bg-white p-1 rounded-full absolute right-3 top-3"
        onClick={handleFavorite}
      >
        {favorites.findIndex((item) => item.id === id) !== -1 ? (
          <IoMdHeart className="text-red-700" />
        ) : (
          <IoIosHeartEmpty className="text-red-700" />
        )}
      </button>
    </div>
  )
}

export default Card
