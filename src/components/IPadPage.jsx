import Page from "./Page";

const IPadPage = () => {

    const ipadPage = {
        title: "iPad",
        desc: "Touch, draw and type on one magical device",
        videosrc:
          "https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/xlarge.mp4#t=0",
        img1src:
          "https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_productivity__d55aee5so6ky_xlarge.jpg",
        img1head: "Productivity",
        img1desc: "Your workplace can be any place.",
        img2src:
          "https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_creativity__gcfv7x90x42u_xlarge.jpg",
        img2head: "Cerativity",
        img2desc: "Your workplace can be any place.",
        img3src:
          "https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_learning__es1tt702bf6u_xlarge.jpg",
        img3head: "Learing",
        img3desc: "Your classroom can be anywhere.",
        img4src:
          "https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_entertainment__dcynvyyoe7iq_xlarge.jpg",
        img4head: "Entertainment",
        img4desc: "Kick back. Tune in. Game on.",
      };

  return (
    <div>
      <Page item={ipadPage} />
    </div>
  )
}

export default IPadPage
