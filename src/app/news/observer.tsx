import { New } from "@/util/postData";
import { FunctionComponent, useEffect, useRef } from "react";
import NewBox from "../../../components/NewBox";

interface ObserverNewProps {
  news: New[];
  editNewContentById: (id: number, content: string) => void;
  fetchNews: (length: number) => void;
}

const ObserverNew: FunctionComponent<ObserverNewProps> = ({
  news,
  editNewContentById,
  fetchNews,
}) => {
  const observedNumber = useRef<number>(0);

  useEffect(() => {
    if (news.length > 0) {
      console.log("update news , reObserver");
      const card = document.querySelectorAll(".card");

      const observer = new IntersectionObserver(
        (entries, server) => {
          entries.forEach((entry) => {
            console.log("ertry");
            // 已經看過的就移除觀察
            if (entry.isIntersecting) server.unobserve(entry.target);
          });
        },
        {
          // rootMargin: "top right bottom left" 改變viewport(可視範圍)的偵測範圍
          // 因為上方有header所以上方要少60px
          rootMargin: "-60px 0px 0px 0px ",
        }
      );
      // 觀察所有元素(觀察沒觀察過的元素)
      card.forEach((c, index) => {
        if (index > observedNumber.current) observer.observe(c);
      });
      observedNumber.current = card.length;

      const lastCard = document.querySelector(".card:last-child");
      const lastCardObserver = new IntersectionObserver(
        async (entries, server) => {
          const last = entries[0];
          if (last.isIntersecting) {
            server.unobserve(last.target);
            fetchNews(30);
          }
        },
        {
          rootMargin: "0px 0px 660px 0px",
        }
      );
      if (lastCard) lastCardObserver.observe(lastCard);

      return () => {
        observer.disconnect();
        lastCardObserver.disconnect();
      };
    }
  }, [fetchNews, news]);
  console.log("render all newbox");
  return (
    <>
      {news.map((n) => (
        <NewBox
          key={n.id}
          id={n.id}
          uid={n.uid}
          title={n.title}
          content={n.content}
          editNewContentById={editNewContentById}
          createdAt={n.createdAt}
          likeCount={n.likeCount}
        />
      ))}
    </>
  );
};

export default ObserverNew;
