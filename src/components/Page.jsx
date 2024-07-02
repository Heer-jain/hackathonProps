const Page = ({ item }) => {
  return (
    <div className="bg-black p-4 w-full ">
      <div className=" text-white flex justify-between my-10">
        <h1 className="text-7xl font-bold">{item.title}</h1>
        <p className="text-2xl w-[23vw] text-right">{item.desc}</p>
      </div>
      <div className="grid gap-6 my-3 p-3 text-white">
        <video
          src={item.videosrc}
          autoPlay
          loop
          muted
          className="video h-[102vh] w-[50vw] rounded-2xl hover:cursor-pointer"
        ></video>
        <img
          src={item.img1src}
          alt=""
          className="img1 h-[50vh] w-[30vw] rounded-2xl relative hover:cursor-pointer hover:shadow-lg hover:shadow-slate-800"
        />
        <div className="absolute left-[50vw] text-left font-semibold p-4 w-[17vw]">
          <h2 className="text-lg">{item.img1head}</h2>
          <p className="text-2xl text-wrap">{item.img1desc}</p>
        </div>
        <img
          src={item.img2src}
          alt=""
          className="img2  h-[50vh] w-[30vw] rounded-2xl relative hover:cursor-pointer hover:shadow-lg hover:shadow-slate-800"
        />
        <div className="absolute left-[67vw] text-left font-semibold p-4 w-[17vw]">
          <h2 className="text-lg">{item.img2head}</h2>
          <p className="text-2xl text-wrap">{item.img2desc}</p>
        </div>
        <img
          src={item.img3src}
          alt=""
          className="img3  h-[50vh] w-[30vw] rounded-2xl relative hover:cursor-pointer hover:shadow-lg hover:shadow-slate-800"
        />
        <div className="absolute left-[50vw] top-[80vh] text-left font-semibold p-4 w-[17vw]">
          <h2 className="text-lg">{item.img3head}</h2>
          <p className="text-2xl text-wrap">{item.img3desc}</p>
        </div>
        <img
          src={item.img4src}
          alt=""
          className="img4  h-[50vh] w-[30vw] rounded-2xl relative hover:cursor-pointer hover:shadow-lg hover:shadow-slate-800"
        />
        <div className="absolute left-[67vw] top-[80vh] text-left font-semibold p-4 w-[17vw]">
          <h2 className="text-lg">{item.img4head}</h2>
          <p className="text-2xl text-wrap">{item.img4desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
