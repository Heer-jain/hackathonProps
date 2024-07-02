import Products from "./Products";

const MacProd = () => {

    const macProduct = [
        {
          imgsrc:
            "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png",
          name: "MacBook Air 13” and 15”",
          detail: "Strikingly thin and fast so you can work, play or create anywhere",
          price: "From ₹99900.00",
        },
        {
          imgsrc:
            "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png",
          name: "MacBook Pro 14” and 16",
          detail: "The most advanced Mac laptops for demanding workflows",
          price: "From ₹169900.00",
        },
        {
          imgsrc:
            "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_imac_24__inq0od011wuq_large.png",
          name: "iMac",
          detail: "A stunning all-in-one desktop for creativity and productivity.",
          price: "From ₹134900.00",
        },
        {
          imgsrc:
            "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_studio_display__c0gbtkgtsx0m_large.png",
          name: "Studio Display",
          detail: "A 5K Retina display with stellar camera and audio.",
          price: "From ₹159900.00",
        },
      ];

  return (
    <div>
      <Products items={macProduct} />
    </div>
  )
}

export default MacProd
