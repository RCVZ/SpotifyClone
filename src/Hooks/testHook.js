import { useState } from "react";

  const useScrollPosition = (e) => {
    const [scroll, updateScroll] = useState({
      offSet: 0,
      direction: "down"
    });

    scroll.offSet < e.target.scrollTop
    ? updateScroll({
        offSet: e.target.scrollTop,
        direction: "down"
      })
    : updateScroll({
        offSet: e.target.scrollTop,
        direction: "up"
      });

    return scroll.offSet
  }

  export default useScrollPosition;