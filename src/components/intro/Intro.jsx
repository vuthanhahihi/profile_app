import "./intro.scss";
import { ArrowDropDownCircleOutlined } from "@material-ui/icons";

export default function Intro({ items }) {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          {items.map((item, index) => (
            <img key={index} src={item.url} alt="" />
          ))}
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Xin chào, mình là</h2>
          {items.map((item) => (
            <span key={item.id}>
              <h1>{item.name}</h1>
              <h3>{item.job}</h3>
            </span>
          ))}
          <a href="#portfolio">
            <ArrowDropDownCircleOutlined className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
