import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination} from 'swiper/modules';
import Slide1 from '../assets/images/swiper-image6.jpg';
import Slide2 from '../assets/images/swiper-image6.jpg';
import Slide3 from '../assets/images/swiper-image6.jpg';
import Slide4 from '../assets/images/swiper-image6.jpg';
import Slide5 from '../assets/images/swiper-image6.jpg';

export const Deals=()=>{
      return(
            <>
                  <Swiper 
                        slidesPerView={'auto'}
                        spaceBetween={0}
                        pagination={{ 
                           clickable: true, 
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                  >
                        <SwiperSlide className='mySwiperSlide'>
                              <img src={Slide1} alt="grid-pic" className="slide-pic"/>
                        </SwiperSlide>
                        <SwiperSlide className='mySwiperSlide'>
                              <img src={Slide2} alt="grid-pic" className="slide-pic"/>
                        </SwiperSlide>
                        <SwiperSlide className='mySwiperSlide'>
                              <img src={Slide3} alt="grid-pic" className="slide-pic"/>
                        </SwiperSlide>
                        <SwiperSlide className='mySwiperSlide'>
                              <img src={Slide4} alt="grid-pic" className="slide-pic"/>
                        </SwiperSlide>
                        <SwiperSlide className='mySwiperSlide'>
                              <img src={Slide5} alt="grid-pic" className="slide-pic"/>
                        </SwiperSlide>
                </Swiper>
            </>
      );
}
