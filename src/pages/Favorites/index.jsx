import React, { useContext } from 'react'
import { CardContext } from '../../context/CardContext'

const Favorites = () => {
  const {favorites,setFavorites} = useContext(CardContext)
  return (
    <div>
      {favorites}

    </div>
  )
}

export default Favorites