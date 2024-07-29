import React, { useEffect, useState } from "react"
import Card from "../../components/Card"
import Loading from "../../components/Loading"

const Products = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div>
      <h1 className="text-center text-4xl my-6 font-semibold">All products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 lg:mx-20 gap-10 my-4 ">
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
    </div>
  )
}

export default Products
