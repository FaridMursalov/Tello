import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./markaSlider.scss";
import Toshiba from "../../../icons/Toshiba.svg";
import Philips from "../../../icons/Phipilps.svg";
import hp from "../../../icons/hp.svg";
import electroLux from '../../../icons/ElectoLux.svg'
import gorenje from "../../../icons/gorenje.svg"
import Bosch from '../../../icons/Bosh.svg'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 6,

      
    };
    return (
      <div className="container">
        <Slider {...settings}>
          

          <div>
              <div className="item">
                <img src={Toshiba} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={Philips} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={hp} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={electroLux} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={gorenje} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={Bosch} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={hp} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={Toshiba} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={gorenje} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={Bosch} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={electroLux} alt="" />{" "}
              </div>
          </div>
          <div>
            <div className="item">
              <img src={Philips} alt="" />{" "}
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
