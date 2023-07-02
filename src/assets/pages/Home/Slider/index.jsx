import  { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './slider.scss'
import SliderCard from "../../../../components/SliderCard";
import iphones from '../../../imgs/Slider 1.svg'
import iphone_14 from '../../../imgs/64b4b14c08324a6ff2a6bcc8dc109c65.png'


export default class SimpleSlider extends Component {
 data = [{key:1,
  campaign: "Buy & Sell",
  title : "What's Now & Next",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus ",
  img : iphones
},
{ key:2,
  campaign: "20% SALE",
title: "Iphone 14 (128GB)",
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus",
img: iphone_14


}

]



  render() {
    const settings = {
      dots: true,
      infinite: true,
      
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      
      arrows: false,
      autoplay:true,
      autoplaySpeed:3000,
      responsive: [
        {
          breakpoint: 762,
          settings: {
            dots: false
          }
        }
      ],
      
    };
    return (
      <div className="my_slider"> 
       

        <Slider {...settings}>
          { this.data.map((slider)=>(<div key={slider.key}>
            <h3><SliderCard  campaign={slider.campaign} title={slider.title} image={slider.img} description={slider.description}/></h3>
          </div>))
          
  }
        </Slider>
      </div>
    );
  }
}