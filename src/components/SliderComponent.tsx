import React, { FunctionComponent } from 'react';
import Slider, { Settings } from 'react-slick';
import { EuiFlexGroup, EuiFlexItem, EuiIcon, EuiImage, EuiText, EuiTitle } from '@elastic/eui';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';


const CustomNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <EuiImage
      className={className}
      style={{ ...style, display: "block", width: '60px', height: '60px' }}
      src="/rightArrow1.png"
      alt="right"
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <EuiImage
      className={className}
      style={{ ...style, display: "block", width: '60px', height: '60px' }}
      src="/leftArrow1.png"
      alt="left"
      onClick={onClick}
    />
  );
};

export interface SliderComponentProps{
  filename:string
}

const SliderComponent: FunctionComponent<SliderComponentProps> = ({
  filename
}) => {
  const sliderImages = [
    { id: 1, src: `/${filename}`, alt: 'Image 1',title:'Advertising' },
    { id: 2, src: `/${filename}`, alt: 'Image 2',title:'Marketing' },
    { id: 3, src: `/${filename}`, alt: 'Image 3',title:'Solution' },
  ];
  
  const settings:Settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true,
    autoplaySpeed:2200,
    adaptiveHeight: true,
    nextArrow:<CustomNextArrow/>,
    prevArrow:  <CustomPrevArrow />,
  };

  return (
    <EuiFlexGroup justifyContent="center" alignItems="center">
      <EuiFlexItem grow={true}>
        <div className="slider-container">
          <Slider {...settings}>
            {sliderImages.map(image => (
              <div key={image.id} className="slider-content">
                <EuiImage  src={image.src} alt={image.alt} className="slider-image" />
                <h1 style={{textAlign:'center'}}><strong>{image.title}</strong></h1>
              </div>
            ))}
          </Slider>
        </div>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}

export default SliderComponent;
