import React, { useState, useEffect, useContext } from "react"
import Card from "../../components/Card"
import Loading from "../../components/Loading"
import { CardContext } from "../../context/CardContext"
const Products = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-20 gap-10 my-4 ">
      {data.length === 0 ? (
        <Loading />
      ) : (
        data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))
      )}
    </div>
  )
}

export default Products
