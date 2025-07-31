import {useTranslations} from 'next-intl'
import {cn} from '@/lib/utils'
import {fonts} from '@/fonts'

export const HeroSection = () => {
	const t = useTranslations('UI')
	
	return (
		<section
			className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden flex justify-center aspect-[1/1.4] md:aspect-[12/5] bg-[url(/img/hero.webp)] bg-cover bg-no-repeat">
			<button
				className={cn('absolute bottom-0 bg-gradient-to-r from-[#f5c764] to-[#fa8c6f] hover:to-[#f5c764] hover:from-[#fa8c6f] text-white px-6 md:px-12 py-2 md:py-8 text-xl md:text-5xl font-bold rounded-3xl cursor-pointer animate-bounce', fonts.beachday.className)}
			>
				{t('get_ticket_now')}
			</button>
		</section>
	)
}