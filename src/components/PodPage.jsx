import Page from "./Page";

const PodPage = () => {

    const podPage = {
        title: "AirPods",
        desc: "",
        videosrc:
          "https://www.apple.com/105/media/us/airpods/2022/dc1310af-8cb9-4218-8d40-26bbe6a1d307/anim/hero/large.mp4",
        img1src:
          "https://www.apple.com/in/airpods/images/overview/tile_onetap_setup__fzj1m8dhjoq6_large.jpg",
        img1head: "One tap setup",
        img1desc: "",
        img2src:
          "https://www.apple.com/in/airpods/images/overview/tile_audio_sharing__ord9ku1kssq6_large.jpg",
        img2head: "Audio Sharing",
        img2desc: "",
        img3src:
          "https://www.apple.com/v/airpods/v/images/overview/tile_automatic_switching__etjisgj91gk2_large.jpg",
        img3head: "Automatic switching",
        img3desc: "",
        img4src:
          "https://www.apple.com/v/airpods/v/images/overview/tile_siri__8ksinuow82qq_large.jpg",
        img4head: "Siri",
        img4desc: "",
      };

  return (
    <div>
      <Page item={podPage} />
    </div>
  )
}

export default PodPage
