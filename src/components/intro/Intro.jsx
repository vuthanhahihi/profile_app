import "./intro.scss";
import { ArrowDropDownCircleOutlined } from "@material-ui/icons";

export default function Intro({ items }) {
  return (
    <div className="container-fluid" id="intro">
      <div className="row">
        <div className="col-md-6 imgContainer">
          {items.map((item, index) => (
            <img key={index} src={item.url} alt="" />
          ))}
        </div>
        <div className="col-md-6 wrapper">
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
