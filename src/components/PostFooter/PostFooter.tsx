import React, { useState } from "react";
import { PostProps } from "../../interface";
import "./PostFooter.scss";

// Part of the post component, displays data of the footer of the post
const PostFooter = (props: PostProps) => {
    const [like, setLike] = useState(false);

    // Sets the state of the like to determine the color of the like icon
    const handleClick = () => {
        like ? setLike(false) : setLike(true);
    }

  return (
    <div className="post-footer-container">
      <div className="interactons">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKcSURBVHgBdVRBaxNBFP5ms2kpNpDiQayoqQZalND0IF4TFcR6SL1ZRUoRBb1IT/4SkZ6iN6HQmosnNdVrDy4IbZCCCxp6qMWYoJhkZ55vZnazsU2GzM7O5L1vvve991ZgwLhWXSsQxJIkWQhIZXiiq8gLlPKUkpXP88uvD/uI/s1CdSPTTlCZHQrWWaF/VbyCiCf8hIOid2PZPwLEIPmOQ1V2SGunTuhsJr/LEIQMkFkb5Kji9s2HnvZ3IiadRARCxlkaEMLt09N4cC4XMbE365WQFoGo5jfKmR6QBaG0ZSB7oUglkR2fwONsHqVTWSg+I6XZKDP5ke6iXdYY7vzH9RLTzkRM7EomHL1PuUkTug5JEMLQ+Kc0Kw2Kwsza84LLxrckyDDRAIYNM5H8XprM4sqJMwYolRxhVueRGhnF1v4edn7u9/RyHCy5UtFsJOhYwsVEchTf/rQM9UfZ2V5Gn164/F+6L66vhroxK0kFl0XNm6zwwf2pHBbPzqBS30Xl+y4mx8YxaLS6Hau4jVk/Mm5XswHXCq/HksnYmgjDRrPbBlRcCiY81sUP+FBa4WKQ4Th4X/9qGVkH4pLwnEDKD6ZqdRpCb4puHTKebW8ZRgZIKaGIPBY7eKGEs2T/sIa66Gq/DnD97StcOn4yDoNH/XcTrfbfUBoLJuBUTKHm3pSruh6mUxO4yul+t+cbIJi2QFh8MMVDKtbF1Bbg79x5MuVqoITAMuv06UvzIF1r/LAAQGQYgoSMKd5zTA1KUFGbmBbRXaxEUOTubkSKxxXcx4AvIIRZ4aYVgoq1xRW/B6SH7mIpgzm29q2I1MtM2FdWP0W6UzbJobntuyte5C8GZSW3sbrA/VdisDwzy0ffIAbcRCBf1u6tbB72+QfG5haxiWZvYAAAAABJRU5ErkJggg=="
          alt="like-button"
        />
        <p className="likes">{String(props.post.likes)} Likes</p>
        <p className="comments">{String(props.post.comments)} Comments</p>
      </div>
      <hr />
      <div className="buttons-div">
        <div className="click-div" onClick={handleClick}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.315 1.695A.75.75 0 0 1 11 1.25 3.75 3.75 0 0 1 14.75 5v3.25h4.906a2.75 2.75 0 0 1 2.745 3.162l-1.38 9a2.75 2.75 0 0 1-2.745 2.338H4A2.75 2.75 0 0 1 1.25 20v-7A2.75 2.75 0 0 1 4 10.25h2.513l3.802-8.555ZM7.75 11.16l3.716-8.36A2.25 2.25 0 0 1 13.25 5v4c0 .414.336.75.75.75h5.669a1.25 1.25 0 0 1 1.25 1.437l-1.38 9a1.25 1.25 0 0 1-1.25 1.063H7.75V11.16Zm-1.5 10.09v-9.5H4A1.25 1.25 0 0 0 2.75 13v7A1.25 1.25 0 0 0 4 21.25h2.25Z"
              fill={like ? "blue" : "#737877"}
            ></path>
          </svg>
          <span>Like</span>
        </div>
        <div className="click-div">
          <span>Comment</span>
        </div>
      </div>
    </div>
  );
};

export default PostFooter;
