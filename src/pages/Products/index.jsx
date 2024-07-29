import React, { useState ,useEffect} from "react";
import Card from "../../components/Card";

const Products = () => {
  const [data,setData] = useState()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  },[]);

  console.log(data);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-20 gap-10 my-4 ">
      {data.map(() => (
        <Card image={data.image} title={data.title} price={data.price}/>
      ))}
      
    </div>
  );
};

export default Products;
