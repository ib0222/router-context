const Card = ({ image, title, price }) => {
  return (
    <div className="border p-3 rounded-xl bg-slate-300 hover:bg-slate-500 ease-in-out duration-300 cursor-pointer">
      <div>
        <img src={image} alt="" className="rounded" />
      </div>
      <div className="text-center mt-3">
        <h3>{title}</h3>
      </div>
      <div className="text-center mt-3">{price}</div>
    </div>
  );
};

export default Card;
