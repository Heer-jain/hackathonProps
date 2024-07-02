import "./App.css";
import IPhonePage from "./components/IPhonePage.jsx";
import IPhoneProd from "./components/IPhoneProd.jsx";
import IPadPage from "./components/IPadPage.jsx";
import IPadProd from "./components/IPadProd.jsx";
import MacPage from "./components/MacPage.jsx";
import MacProd from "./components/MacProd.jsx";
import PodPage from "./components/PodPage.jsx";
import PodProd from "./components/PodProd.jsx";
import WatchPage from "./components/WatchPage.jsx";
import WatchProd from "./components/WatchProd.jsx";
// import Page from "./components/Page.jsx";
// import Products from "./components/Products.jsx";
function App() {
  // const ipadProduct = [
  //   {
  //     imgsrc:
  //       "https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_pro__6bgrkek0jnm2_large.png",
  //     name: "iPad Pro",
  //     detail: "The ultimate iPad experience with the most advanced technology.",
  //     price: "From ₹99900.00",
  //   },
  //   {
  //     imgsrc:
  //       "https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_air__cr381zljqdiu_large.png",
  //     name: "iPad Air",
  //     detail: "Serious performance in a thin and light design.",
  //     price: "From ₹59900.00",
  //   },
  //   {
  //     imgsrc:
  //       "https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_10th_gen__ej5p5x6yf2gm_xlarge.png",
  //     name: "iPad",
  //     detail: "The colourful, all‑screen iPad for the things you do every day.",
  //     price: "From ₹34900.00",
  //   },
  //   {
  //     imgsrc:
  //       "https://imageio.forbes.com/specials-images/imageserve/616464d4cfa696b6534d17a1/0x0.png?format=png&height=600&width=1200&fit=bounds",
  //     name: "iPad mini",
  //     detail: "The full iPad experience in an ultra-portable design",
  //     price: "From ₹49900.00",
  //   },
  // ];
  // const ipadPage = {
  //   title: "iPad",
  //   desc: "Touch, draw and type on one magical device",
  //   videosrc:
  //     "https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/xlarge.mp4#t=0",
  //   img1src:
  //     "https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_productivity__d55aee5so6ky_xlarge.jpg",
  //   img1head: "Productivity",
  //   img1desc: "Your workplace can be any place.",
  //   img2src:
  //     "https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_creativity__gcfv7x90x42u_xlarge.jpg",
  //   img2head: "Cerativity",
  //   img2desc: "Your workplace can be any place.",
  //   img3src:
  //     "https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_learning__es1tt702bf6u_xlarge.jpg",
  //   img3head: "Learing",
  //   img3desc: "Your classroom can be anywhere.",
  //   img4src:
  //     "https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_entertainment__dcynvyyoe7iq_xlarge.jpg",
  //   img4head: "Entertainment",
  //   img4desc: "Kick back. Tune in. Game on.",
  // };

  // const allProducts = [ipadPage, ipadProduct]

  return (
    <div className="bg-black p-5 ">
      {/* <Page item={ipadPage} />
      <Products items={ipadProduct} /> */}
      <IPadPage/>
      <IPadProd/>
      <MacPage/>
      <MacProd/>
      <PodPage/>
      <PodProd/>
      <WatchPage/>
      <WatchProd/>
      <IPhonePage/>
      <IPhoneProd/>
    </div>
  );
}

export default App;
