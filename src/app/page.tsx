import Image from "next/image";
import styles from "./page.module.css";
import Banner from "../../components/Banner";

const getImages = async () => {
  const res = await fetch("https://picsum.photos/v2/list?page=1&limit=10");
  if (!res.ok) throw new Error("Failed to fetch images");
  return res.json();
};

export default async function Home() {
  const data = await getImages();
  return (
    <main className={styles.main}>
      <Banner imgList={data} />
    </main>
  );
}
