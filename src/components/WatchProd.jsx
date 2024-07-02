import Products from "./Products";

const WatchProd = () => {

    const watchProduct = [
        {
          imgsrc:
            "https://www.apple.com/v/watch/bm/images/overview/select/product_se__frx4hb13romm_xlarge.png",
          name: "Apple Watch SE",
          detail: "All the essentials. Light on price.",
          price: "From ₹29900.00",
        },
        {
          imgsrc:
            "https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png",
          name: "Apple Watch Series 9",
          detail: "Powerful sensors, advanced health features",
          price: "From ₹41900.00",
        },
        {
          imgsrc:
            "https://www.apple.com/in/watch/images/overview/select/product_u2__ebztafh9rvau_xlarge.png",
          name: "Apple Watch Ultra 2",
          detail: "The most rugged and capable.",
          price: "From ₹89900.00",
        },
      ];

  return (
    <div>
      <Products items={watchProduct} />
    </div>
  )
}

export default WatchProd
