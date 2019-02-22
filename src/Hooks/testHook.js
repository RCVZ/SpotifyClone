import React, { useState } from "react";

  const useScrollPosition = () => {
    const [scroll, updateScroll] = useState({
      offSet: 0,
      direction: "down"
    });

    // scroll.offSet < e.target.scrollTop
    // ? updateScroll({
    //     offSet: e.target.scrollTop,
    //     direction: "down"
    //   })
    // : updateScroll({
    //     offSet: e.target.scrollTop,
    //     direction: "up"
    //   });

    return [scroll.offSet, updateScroll]
  }

  export default useScrollPosition;