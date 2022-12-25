import "./watch.scss";
import { ArrowBackOutlined } from "@mui/icons-material";
import trailer from "../../assets/trailer.mp4";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video controls autoPlay loop>
        <source src={trailer} />
      </video>
    </div>
  );
};

export default Watch;
