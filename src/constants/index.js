import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
  
  export const navLists = ["Store", "Mac", "iPhone", "Support"];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Brilliant minds spend their days doing work a machine could do.",
        "Liberation from the soul-crushing work",
      ],
      video: highlightFirstVideo,
      videoDuration: 5,
    },
    {
      id: 2,
      textLists: ["Machines should serve humans", "Thinking partners. Creative work. Busywork automated."],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "Zero One has minds of genius and design of artistry.",
        "Working on your behalf.",
        "Far beynd mediocrity.",
      ],
      video: highlightThirdVideo,
      videoDuration: 5,
    },
    {
      id: 4,
      textLists: ["At the intersection of technology and human potential, something magical happens.","40% more time on creative, high-value work."],
      video: highlightFourthVideo,
      videoDuration: 5,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];