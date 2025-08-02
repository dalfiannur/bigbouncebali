import {useTranslations} from 'next-intl'
import {cn} from '@/lib/utils'
import {fonts} from '@/fonts'
import Image from 'next/image'

export const HeroSection = () => {
	const t = useTranslations('UI')
	
	return (
		<section
			className="w-full relative overflow-hidden flex flex-col justify-center items-center">
			<Image src="/img/hero-mobile.webp" alt="The Big Bounce Bali" width={840} height={892} className="block md:hidden w-full" />
			<Image src="/img/hero.webp" alt="The Big Bounce Bali" width={1920} height={800} className="hidden md:block w-full" />
			<Image src="/img/hero-bottom.webp" alt="The Big Bounce Bali" width={1920} height={331} className="hidden md:block w-full" />
			<button
				className={cn('absolute hidden md:block -mt-4 md:mt-72 bg-gradient-to-r from-[#f5c764] to-[#fa8c6f] hover:to-[#f5c764] hover:from-[#fa8c6f] text-white px-4 md:px-12 py-2 md:py-8 text-sm md:text-5xl font-bold rounded-3xl cursor-pointer animate-bounce', fonts.beachday.className)}
			>
				{t('get_ticket_now')}
			</button>
		</section>
	)
}