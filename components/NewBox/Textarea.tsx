import { FunctionComponent, memo, useEffect, useState } from "react";

interface TextareaProps {
  id: number;
  content: string;
  editNewContentById: (id: number, content: string) => void;
}

const Textarea: FunctionComponent<TextareaProps> = ({
  id,
  content,
  editNewContentById,
}) => {
  const [onEdit, setOnEdit] = useState<boolean>(true);
  const [text, setText] = useState<string>("");
  useEffect(() => {
    setText(content);
  }, [content]);

  const handleChange = (value: string) => {
    setText(value);
  };

  return (
    <textarea
      key={id}
      value={text}
      readOnly={onEdit}
      rows={5}
      cols={10}
      onClick={() => setOnEdit((bool) => !bool)}
      onChange={(e) => handleChange(e.target.value)}
      onBlur={() => editNewContentById(id, text)}
    />
  );
};

const arePropsEqual = (prev: TextareaProps, next: TextareaProps) => {
  if (prev.content === next.content) return true;
  if (prev.id === next.id) return true;
  return false;
};

export default memo(Textarea, arePropsEqual);
