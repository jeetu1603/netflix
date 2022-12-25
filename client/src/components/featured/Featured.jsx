import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://static.tnn.in/photo/msid-96224338,imgsize-84726,updatedat-1671013079203,width-200,height-200,resizemode-75/96224338.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/pp_avatar_thewayofwater_logo_97_b382cbde.png"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non
          recusandae sunt voluptate, distinctio magnam velit odio architecto
          suscipit molestiae pariatur est earum quod? Facere vero suscipit
          cupiditate omnis deleniti.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
