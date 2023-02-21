import { Component, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Autoplay, Swiper } from 'swiper';
SwiperCore.use([Autoplay]);

@Component({
  selector: 'docs-carousel06',
  templateUrl: `./docs-carousel06.component.html`,
  styleUrls: ['./docs-carousel06.component.scss'],
  encapsulation: ViewEncapsulation.None,

})

export class docsCarousel06 {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 1500
    },
    loop: true,
    navigation: true,
    scrollbar: { draggable: true },
  };
}

