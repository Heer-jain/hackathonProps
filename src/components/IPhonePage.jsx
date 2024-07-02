import Page from "./Page";

const IPhonePage = () => {

    const iPhonePage = {
        title: "iPhone",
        desc: "Designed to be loved.",
        videosrc:
          "https://www.apple.com/105/media/ww/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/xlarge.mp4",
        img1src:
          "https://www.apple.com/v/iphone/home/bu/images/overview/consider/camera__cerpczobiwwi_xlarge.jpg",
        img1head: "Advanced Cameras",
        img1desc: "Selfie-takers. Movie-makers. Boundary-breakers",
        img2src:
          "https://www.apple.com/v/iphone/home/bu/images/overview/consider/chip__cpj93oio1oya_xlarge.jpg",
        img2head: "Apple-Designed Chips",
        img2desc: "The kind of fast you can feel.",
        img3src:
          "https://www.apple.com/v/iphone/home/bu/images/overview/consider/battery__f9km4l6jlv6u_xlarge.jpghttps://www.apple.com/v/watch/bm/images/overview/consider/feature_health__b8l8jg8aa0b6_xlarge.jpg",
        img3head: "Battery",
        img3desc: "The power of great battery life.",
        img4src:
          "https://www.apple.com/v/iphone/home/bu/images/overview/consider/innovation__b03hhgj3xx9e_xlarge.jpg",
        img4head: "Innovation",
        img4desc: "Beautiful and durable, by design.",
      };

  return (
    <div>
      <Page item={iPhonePage} />
    </div>
  )
}

export default IPhonePage
