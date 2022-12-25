import "./listItem.scss";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import trailer from "../../assets/trailer.mp4";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    >
      <img
        src="https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_FMjpg_UX1000_.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <video controls autoPlay loop>
            <source src={trailer} />
          </video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>3h 12m</span>
              <span className="limit">16+</span>
              <span>2022</span>
            </div>
            <div className="desc">
              Jake Sully and Ney'tiri have formed a family and are doing
              everything to stay together. However, they must leave their home
              and explore the regions of Pandora. When an ancient threat
              resurfaces, Jake must fight a difficult war against the humans.
            </div>
            <div className="genre">Sci-fi/Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
