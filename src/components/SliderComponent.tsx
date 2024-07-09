import { EuiImage } from '@elastic/eui';
import { FunctionComponent } from 'react';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './SliderComponent.css';


const CustomNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <EuiImage
      className={className}
      style={{
        ...style, display: "block", width: '60px', height: 'auto',
      }}
      src="/icons/RIGHT SCROLL BUTTON.png"
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
      style={{
        ...style, display: "block", width: '60px', height: 'auto',
        zIndex: 2
      }}
      src="/icons/LEFT SCROLL BUTTON.png"
      alt="left"
      onClick={onClick}
    />
  );
};

export interface SliderComponentProps {
  filename: string
  autoplay: boolean
}

const SliderComponent: FunctionComponent<SliderComponentProps> = ({
  filename,
  autoplay
}) => {
  const sliderImages = [
    { id: 1, src: `/${filename}`, alt: 'Image 1', title: 'Advertising' },
    { id: 2, src: `/OUTDOOR DISPLAY ONE.png`, alt: 'Image 2', title: 'Marketing' },
    { id: 3, src: `/BILL_BOARD.png`, alt: 'Image 3', title: 'Solution' },
  ];

  const adImages = [
    { id: 1, src: `/outdoor/BILL BOARD.png`, alt: 'Image 1', title: 'Outdoor' },
    { id: 2, src: `/outdoor/FLAGS.png`, alt: 'Image 2', title: 'Outdoor' },
    { id: 3, src: `/outdoor/OUTDOOR DISPLAY ONE.png`, alt: 'Image 3', title: 'Outdoor' },
    { id: 4, src: `/outdoor/OUTDOOR DISPLAY TWO.png`, alt: 'Image 4', title: 'Outdoor' },
    { id: 5, src: `/outdoor/STANDINGS.png`, alt: 'Image 5', title: 'Outdoor' },
    { id: 6, src: `/print/MAGAZINE ONE.png`, alt: 'Image 6', title: 'Print' },
    { id: 7, src: `/print/MAGAZINE TWO.png`, alt: 'Image 7', title: 'Print' },
    { id: 8, src: `/television/TELEVISION ADS.png`, alt: 'Image 8', title: 'Television' },
  ]

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay,
    autoplaySpeed: 2200,
    adaptiveHeight: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  return (
<div className='slider-wrapper'>
    <Slider {...settings}>
      {adImages.map(image => (
        <div className="slider-image-container" key={image.src}>
          <img className="slider-image" src={image.src} alt={image.alt} />
          <h1 style={{ textAlign: 'center' }}><strong>{image.title}</strong></h1>
        </div>
      ))}
    </Slider>
    </div>
  );
}

export default SliderComponent;
