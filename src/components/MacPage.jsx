import Page from "./Page";

const MacPage = () => {

    const macPage = {
        title: "Mac",
        desc: "If you can dream it, Mac can do it.",
        videosrc:
          "https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/xlarge.mp4",
        img1src:
          "https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_performance__dh5hyac1zf8m_xlarge.jpg",
        img1head: "Performance and Battery Life",
        img1desc: "Go fast. Go far.",
        img2src:
          "https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_ease__bvgkz2zdltxy_xlarge.jpg",
        img2head: "Getting started",
        img2desc: "Easy to use. Easy to love.",
        img3src:
          "https://www.apple.com/in/mac/home/images/overview/consider/mac_iphone__gh1tblkt6bqm_xlarge.jpg",
        img3head: "Mac and iPhone",
        img3desc: "Dream Team",
        img4src:
          "https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_security__gfwda10khdym_xlarge.jpg",
        img4head: "Privacy and Security",
        img4desc: "Your business is nobody else’s.",
      };

  return (
    <div>
      <Page item={macPage} />
    </div>
  )
}

export default MacPage
