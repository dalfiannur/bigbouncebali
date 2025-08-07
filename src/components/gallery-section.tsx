'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import {Autoplay} from 'swiper/modules'
import {cn} from '@/lib/utils'
import {fonts} from '@/fonts'

const attractions = [['airspace-pink', 5], ['bounce-house', 11], ['octoblast', 9], ['sport-slam', 7], ['the-giant', 6]]
const items = attractions.map(([attraction, index]) => new Array(index).fill(attraction).map((a, i) => '/img/attractions/' + a + `/${i + 1}.webp`)).flat()

export const GallerySection = () => (
	<div className="flex flex-col gap-4 bg-[url(/img/bg-up.webp)] bg-cover bg-no-repeat bg-bottom">
		<div
			className={cn('bg-black w-fit flex gap-4 flex-nowrap text-white py-4 px-10 [animation-play-state:running] [animation-duration:20s] [animation-name:marquee] [animation-timing-function:linear] [animation-iteration-count:infinite] text-4xl tracking-widest whitespace-nowrap', fonts.beachday.className)}>
			<span>Gallery -</span>
			<span>Gallery -</span>
			<span>Gallery -</span>
			<span>Gallery -</span>
			<span>Gallery -</span>
			<span>Gallery -</span>
		</div>
		<div>
			<Swiper
				modules={[Autoplay]}
				slidesPerView={1}
				spaceBetween={16}
				speed={5000}
				autoplay={{
					delay: 0
				}}
			>
				{items.map((item, index) => (
					<SwiperSlide key={index}>
						<div className="relative aspect-[10/6]">
							<Image src={item} alt={item} fill className="object-cover"/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
		<div
			className={cn('bg-black w-fit flex gap-4 flex-nowrap text-white py-4 px-10 [animation-play-state:running] [animation-duration:20s] [animation-name:marquee] [animation-timing-function:linear] [animation-iteration-count:infinite] text-4xl tracking-widest whitespace-nowrap', fonts.beachday.className)}>
			<span>Gallery -</span>
			<span>Gallery -</span>
			<span>Gallery -</span>
			<span>Gallery -</span>
			<span>Gallery -</span>
			<span>Gallery -</span>
		</div>
	</div>
)