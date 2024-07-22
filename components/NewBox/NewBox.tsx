import { FunctionComponent, memo, Suspense, useState } from "react";
import { New } from "@/util/postData";
import styles from "./style.module.css";
import Textarea from "./Textarea";
interface NewProps extends New {
  editNewContentById: (id: number, content: string) => void;
}

const NewBox: FunctionComponent<NewProps> = ({
  id,
  uid,
  title,
  content,
  editNewContentById,
}) => {
  console.log("render posts", id, title, content);
  return (
    <div className={`${styles.card} card`}>
      <div className={styles.cardTitle}>
        <h1>{title}</h1> <span>建立者:{uid}</span>
      </div>
      <Textarea
        id={id}
        content={content}
        editNewContentById={editNewContentById}
      />
    </div>
  );
};
const arePropsEqual = (prev: NewProps, next: NewProps) => {
  // console.log(`${prev.content} || ${next.content}`);
  if (prev.content !== next.content) return false;
  if (prev.id !== next.id) return false;
  return true;
};

export default memo(NewBox, arePropsEqual);
