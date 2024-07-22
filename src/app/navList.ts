export interface nav {
  id: string;
  name: string;
  route: string;
}

const navList: nav[] = [
  {
    id: "homePage",
    name: "首頁",
    route: "/",
  },
  {
    id: "player",
    name: "人員",
    route: "/player",
  },
  {
    id: "news",
    name: "新聞",
    route: "/news",
  },
];

export default navList;
