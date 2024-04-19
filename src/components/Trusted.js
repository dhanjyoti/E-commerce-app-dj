import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image1 from "../images/home/1_mock-up.avif";
import Image2 from "../images/home/2_freshTomato.png";
import Image3 from "../images/home/3_wood-sign.jpg";
import Image4 from "../images/home/4_longLiv.jpg";
import Image5 from "../images/home/5_lp-printed-logo-labels.webp";
import Image6 from "../images/home/6_images.jpg";
import Image7 from "../images/home/7_fruit-of-the-horn.webp";

import "@splidejs/react-splide/css";

const Trusted = () => {
  return (
    <div className="my-10">
      <h1 className="text-center my-10 font-semibold text-xl">
        Trusted Partners
      </h1>
      <div className="mx-auto md:mx-52">
        <Splide
          options={{
            fixedWidth: 150,
            gap: 20,
            rewind: true,
            pagination: false,
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <img className="h-20" src={Image1} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img className="h-20 m-auto" src={Image2} alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img className="h-20" src={Image3} alt="Image 3" />
          </SplideSlide>
          <SplideSlide>
            <img className="h-20" src={Image4} alt="Image 4" />
          </SplideSlide>
          <SplideSlide>
            <img className="h-20" src={Image5} alt="Image 5" />
          </SplideSlide>
          <SplideSlide>
            <img className="h-20" src={Image6} alt="Image 6" />
          </SplideSlide>
          <SplideSlide>
            <img className="h-20" src={Image7} alt="Image 7" />
          </SplideSlide>
          <SplideSlide>
            <img className="h-20" src={Image1} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img className="h-20 m-auto" src={Image2} alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img className="h-20" src={Image3} alt="Image 3" />
          </SplideSlide>
          <SplideSlide>
            <img className="h-20" src={Image4} alt="Image 4" />
          </SplideSlide>
          <SplideSlide>
            <img className="h-20" src={Image5} alt="Image 5" />
          </SplideSlide>
          <SplideSlide>
            <img className="h-20" src={Image6} alt="Image 6" />
          </SplideSlide>
          <SplideSlide>
            <img className="h-20" src={Image7} alt="Image 7" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Trusted;
