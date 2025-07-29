import {Button} from '@/components/ui/button'
import {useTranslations} from 'next-intl'

export const HeroSection = () => {
	const t = useTranslations('UI')
	
	return (
		<section
			className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden flex justify-center aspect-[9/16] md:aspect-[12/5]">
			<div className="absolute inset-0 bg-[url(/img/hero.jpg)] bg-cover bg-no-repeat"></div>
			<div className="container px-4 md:px-6 relative">
				<div className="flex flex-col items-center space-y-6 text-center">
					<div className="flex flex-col sm:flex-row gap-4">
						<Button
							size="lg"
							className="mt-[600px] bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-8 text-3xl"
						>
							{t('get_ticket_now')}
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}