import { FunctionComponent } from "react";
import styles from "./style.module.css";
import Image from "next/image";

interface imgProps {
  id: string;
  author: string;
  download_url: string;
}

interface BannerProps {
  imgList: Array<imgProps>;
}

const Banner: FunctionComponent<BannerProps> = ({ imgList }) => {
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselTrack}>
        {imgList.map((img) => (
          <Image
            key={`${img.id}-${img.author}`}
            src={img.download_url}
            alt={`${img.author}`}
            width={500}
            height={300}
            className={styles.carouselImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
