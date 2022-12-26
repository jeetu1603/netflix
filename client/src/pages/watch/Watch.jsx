import "./watch.scss";
import { ArrowBackOutlined } from "@mui/icons-material";
import { useLocation, Link } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const movie = location.state?.movie;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video controls autoPlay loop>
        <source src={movie?.video} />
      </video>
    </div>
  );
};

export default Watch;
