'use client'

import Image from 'next/image'
import {AboutSlide} from '@/types/about-slide'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination} from 'swiper/modules'
import * as motion from 'motion/react-client'

import 'swiper/css'
import 'swiper/css/pagination'

export const AboutSection = ({items}: { items: AboutSlide[] }) => {
	return (
		<section id="about" className="w-full px-0 md:px-10 bg-[url(/img/bg-up.webp)] bg-no-repeat bg-cover pt-4">
			<div className="mt-10 relative flex w-full overflow-hidden justify-between items-center">
				<motion.div initial={{x: -100}}
							whileInView={{x: 0, transition: {duration: 0.3, ease: 'easeInOut'}}}
							className="w-1/3 aspect-[1/0.55] relative -mx-3"
				>
					<Image src="/img/fist-02.webp" alt="Fist" fill className="rotate-y-180 object-contain"/>
				</motion.div>
				<motion.p initial={{y: 50}}
						  whileInView={{y: 0, transition: {duration: 0.3, delay: 0.1, ease: 'easeInOut'}}}
						  className="flex-1 text-center text-black font-bold"
				>
					If you’ve got the <span className="whitespace-nowrap uppercase">Bounce Pass</span> wristband that’s your freakin’ superpower
				</motion.p>
				<motion.div initial={{x: 100}}
							whileInView={{x: 0, transition: {duration: 0.3, delay: 0.2, ease: 'easeInOut'}}}
							className="w-1/3 aspect-[1/0.55] relative -mx-3"
				>
					<Image src="/img/fist-01.webp" alt="Fist" fill className="object-contain"/>
				</motion.div>
			</div>
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