import { useState } from "react";

  const useScrollPosition = () => {
    const [scroll, updateScroll] = useState();    

    return [scroll, updateScroll]
  }

  export default useScrollPosition;

      // scroll.offSet < e.target.scrollTop
    // ? updateScroll({
    //     offSet: e.target.scrollTop,
    //     direction: "down"
    //   })
    // : updateScroll({
    //     offSet: e.target.scrollTop,
    //     direction: "up"
    //   });