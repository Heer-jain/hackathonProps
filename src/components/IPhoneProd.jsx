import Products from "./Products";

const IPhoneProd = () => {

    const iPhoneProduct = [
        {
          imgsrc:
            "https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_15_pro__bpnjhcrxofqu_xlarge.png",
          name: "iPhone 15 Pro",
          detail: "The ultimate iPhone.",
          price: "From ₹5621.00/mo. for 24 mo. or ₹134900.00",
        },
        {
          imgsrc:
            "https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_14__cjgvgyn9cquu_xlarge.png",
          name: "iPhone 14",
          detail: "As amazing as ever.",
          price: "From ₹2912.00/mo. for 24 mo. or ₹69900.00",
        },
        {
          imgsrc:
            "https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_13__gnwdyqfq7i2y_xlarge.png",
          name: "iPhone 13",
          detail: "All kinds of awesome.",
          price: "From ₹2496.00/mo. for 24 mo. or ₹59900.000",
        },
        {
            imgsrc:
              "https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_se__gmvp19w01mum_xlarge.png",
            name: "iPhone SE",
            detail: "Serious power. Serious value.",
            price: "From ₹2079.00/mo. for 24 mo. or ₹49900.00",
          },
      ];

  return (
    <div>
      <Products items={iPhoneProduct} />
    </div>
  )
}

export default IPhoneProd
