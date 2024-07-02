const Products = ({ items }) => {
  return (
    <>
      <h1 className="text-white text-4xl text-left font-semibold my-20">
        Explore the line up
      </h1>
      <div className="flex gap-5 ">
        {items.map((item) => {
          return (
            <>
              <div className="text-white w-[22vw] space-y-4 text-center p-3 bg-black rounded-xl hover:cursor-pointer hover:shadow-xl hover:shadow-slate-500">
                <img
                  src={item.imgsrc}
                  alt=""
                  className="w-[17vw] m-auto h-[40vh] object-contain"
                />
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p>{item.detail}</p>
                <p className="font-semibold">{item.price}</p>
                <div className="flex align-middle justify-center gap-5">
                  <button className="bg-blue-500 text-white rounded-full py-2 px-4">
                    Learn More
                  </button>
                  <div className="text-blue-500 hover:underline text-2xl">
                    Buy ‣
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
