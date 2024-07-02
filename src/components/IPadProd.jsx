import Products from "./Products";

const IPadProd = () => {

    const ipadProduct = [
        {
          imgsrc:
            "https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_pro__6bgrkek0jnm2_large.png",
          name: "iPad Pro",
          detail: "The ultimate iPad experience with the most advanced technology.",
          price: "From ₹99900.00",
        },
        {
          imgsrc:
            "https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_air__cr381zljqdiu_large.png",
          name: "iPad Air",
          detail: "Serious performance in a thin and light design.",
          price: "From ₹59900.00",
        },
        {
          imgsrc:
            "https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_10th_gen__ej5p5x6yf2gm_xlarge.png",
          name: "iPad",
          detail: "The colourful, all‑screen iPad for the things you do every day.",
          price: "From ₹34900.00",
        },
        {
          imgsrc:
            "https://imageio.forbes.com/specials-images/imageserve/616464d4cfa696b6534d17a1/0x0.png?format=png&height=600&width=1200&fit=bounds",
          name: "iPad mini",
          detail: "The full iPad experience in an ultra-portable design",
          price: "From ₹49900.00",
        },
      ];

  return (
    <div>
      <Products items={ipadProduct} />
    </div>
  )
}

export default IPadProd
