"use client";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./style.module.css";
import { New, getNews } from "@/util/postData";
import ObserverNew from "./observerNew";
interface NewsProps {}
/* 
  1. 渲染 posts
  2. 載入更多的 post
  3. 編輯post中的content
  4. Q:更新一筆 render全部畫面
     A:將整包資料丟入New 改為 單筆丟入New 就可以透過memo去辨識是否需要re-render
  5. 往下滑自動載入content
  6. 調整載入體驗
  7. Q:在news調整後會重新去觀察之前取消觀察的元素
     A:紀錄觀察過的數量 observedNumber 僅觀察index大於observedNumber的元素
  8. 將observe與fetch功能拆分
*/

const News: FunctionComponent<NewsProps> = () => {
  const [news, setNews] = useState<New[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getLastDataIdRef = useRef<number>(0);
  const isInit = useRef<boolean>(true);

  const fetchNews = useCallback(async (length: number) => {
    try {
      setLoading(true);
      const posts = await getNews(getLastDataIdRef.current, length);
      if (posts.length === 0) {
        alert("文章已讀取完畢");
        return;
      }
      getLastDataIdRef.current = posts[posts.length - 1].id;
      setNews((n) => [...n, ...posts]);
    } catch (error) {
      console.error("fetch news error", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const editNewContentById = useCallback((id: number, content: string) => {
    // 利用hash 判讀文字是否有變更(未做)
    setNews((prevNew) =>
      prevNew.map((n) => (n.id === id ? { ...n, content } : n))
    );
  }, []);

  useEffect(() => {
    if (isInit.current) {
      isInit.current = false;
      fetchNews(10);
    }
  }, [fetchNews]);

  return (
    <div id="newsContainer" className={styles.newsContainer}>
      <ObserverNew
        news={news}
        editNewContentById={editNewContentById}
        fetchNews={fetchNews}
      />
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default News;
