import { Comment } from "../types";

export const comments: Comment[] = [
  {
    title: "Birinci Yorum",
    text: "Bu ilk yorum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut diam sed elit pretium placerat. Nulla ac augue arcu. Integer nec odio nisi.",
    name: "John Doe",
    image: "/culture.webp",
    reverse: true, 
  },
  {
    title: "İkinci Yorum",
    text: "Bu ikinci yorum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sem et nunc tincidunt sollicitudin.",
    name: "Jane Doe",
    image: "/advisor.png",
    reverse: false, 
  },
  {
    title: "Üçüncü Yorum",
    text: "Bu üçüncü yorum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dui at nisi facilisis ullamcorper.",
    name: "Alice Smith",
    image: "/mission.jpg",
    reverse: true, 
  },
];