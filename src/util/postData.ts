import postData from "./posts.json";

export interface New {
  id: number;
  title: string;
  content: string;
  uid: string;
  createdAt: number;
  likeCount: number;
}

export const getNews = async (id: number, length: number) => {
  if (id === news.length) return [];
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return news.filter((n) => n.id > id).slice(0, length);
};

export const news: New[] = postData;
