"use client";

import { FunctionComponent, useEffect, useLayoutEffect, useState } from "react";

interface PlayerProps {}

const Player: FunctionComponent<PlayerProps> = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect init", count);
  }, [count]);
  useLayoutEffect(() => {
    console.log("useLayoutEffect init", count);
  }, [count]);

  return (
    <div>
      人員 {count}
      <button onClick={() => setCount((count) => count + 1)}>click</button>
    </div>
  );
};

export default Player;
