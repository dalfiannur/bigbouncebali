'use client'

import Image from 'next/image'
import {AboutSlide} from '@/types/about-slide'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export const AboutSection = ({items}: { items: AboutSlide[] }) => {
	return (
		<section id="about" className="w-full px-0 md:px-10">
			<Swiper
				modules={[Pagination, Autoplay]}
				spaceBetween={0}
				slidesPerView={1}
				autoplay
				pagination={{clickable: true}}
				breakpoints={{
					820: {
						slidesPerView: 2,
						spaceBetween: 40
					}
				}}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{items.map((item, index) => (
					<SwiperSlide key={index}>
						<Image src="/img/attractions/1.webp"
							   alt="Attraction 01"
							   width={1327}
							   height={1217}
							   className="w-full"/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}