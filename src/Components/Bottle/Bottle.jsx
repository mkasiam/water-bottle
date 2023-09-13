const Bottle = ({ bottle,handlePurchase }) => {
  const { name, price, img, seller } = bottle;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="font-bold">Price: {price} $</p>
          <p>Brand: {seller}</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={()=>handlePurchase(bottle)}>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottle;
