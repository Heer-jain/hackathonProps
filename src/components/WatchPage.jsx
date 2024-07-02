import Page from "./Page";

const WatchPage = () => {

    const watchPage = {
        title: "Apple Watch",
        desc: "To wear it is to love it.",
        videosrc:
          "https://www.apple.com/105/media/ww/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/xlarge.mp4",
        img1src:
          "https://www.apple.com/v/watch/bm/images/overview/consider/feature_pride__kyvpfjjosjey_xlarge.jpg",
        img1head: "New Pride Edition Strap",
        img1desc: "Let your light shine.",
        img2src:
          "https://www.apple.com/in/watch/images/overview/consider/feature_fitness__bqrhzxk45liu_xlarge.jpg",
        img2head: "Fitness",
        img2desc: "Every move count.",
        img3src:
          "https://www.apple.com/v/watch/bm/images/overview/consider/feature_health__b8l8jg8aa0b6_xlarge.jpg",
        img3head: "Health",
        img3desc: "Knows you by heart.",
        img4src:
          "https://www.apple.com/v/watch/bm/images/overview/consider/feature_family_setup__ghz0t0it1hay_xlarge.jpg",
        img4head: "Family Setup for Apple Watch",
        img4desc: "Great for kids who don’t have an iPhone yet.",
      };

  return (
    <div>
      <Page item={watchPage} />
    </div>
  )
}

export default WatchPage
