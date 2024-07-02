import Products from "./Products";

const PodProd = () => {

    const podProduct = [
        {
          imgsrc:
            "https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg",
          name: "AirPods",
          detail: "3rd Generation",
          price: "From ₹19900.00",
        },
        {
          imgsrc:
            "https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png",
          name: "AirPods",
          detail: "2nd Generation",
          price: "From ₹41900.00",
        },
        {
          imgsrc:
            "https://www.apple.com/v/airpods/v/images/overview/airpods_max__f265q4g4ddym_large.png",
          name: "AirPods Max",
          detail: "",
          price: "₹59900.00",
        },
      ];

  return (
    <div>
      <Products items={podProduct} />
    </div>
  )
}

export default PodProd
