import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useFetch from './useFetch';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

export default function CarSlider() {
  const cars = useFetch('http://localhost:8100/api/automobiles/', 'autos');

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={2}
        coverflowEffect={
          {
            modifier: 2.5,
          }
        }
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {cars && cars.map(car => {
          return (
            <SwiperSlide key={car.id}>
              <div className="card rounded-4 shadow-sm" style={{ backgroundImage: "linear-gradient(140deg, #E8E0D1, #867C79)", border: "none" }}>
                <div className="card-body mt-2 text-start">
                  <h5 className="card-title fw-bold text-white mb-0">{car.model.manufacturer.name}</h5>
                  <div className="card-text text-white">
                    {car.model.name}
                  </div>
                  <img className="my-2 w-100 min-vw-25 img-fluid" src={car.model.picture_url} />
                  <div className="text-white">
                    <div className="d-flex align-items-center justify-content-end ms-3">
                      <i className="ri-dashboard-3-line me-1"></i>
                      <small className="">{car.mpg}</small>
                    </div>
                    <div className="d-flex align-items-center justify-content-end mb-2">
                      <i className="ri-shopping-bag-2-line me-1"></i>
                      <small>${car.msrp}</small>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
        <div className="slider-controller d-inline-flex container mt-5 pt-5 align-items-center justify-content-center">
          <div className="swiper-button-prev slider-arrow shadow-sm">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next slider-arrow shadow-sm">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
    </>
  )
}
