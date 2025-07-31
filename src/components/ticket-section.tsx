import {Badge} from '@/components/ui/badge'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {useTranslations} from 'next-intl'
import {cn} from '@/lib/utils'
import {fonts} from '@/fonts'

const tickets = [
	{
		id: 'domesticKids',
		type: 'domestic',
		title: 'Kids',
		age: '3-16 years',
		price: 'IDR 150K',
		features: [
			'All attractions access',
			'Safety supervision',
			'Full day session'
		]
	},
	{
		id: 'foreignKids',
		type: 'foreign',
		title: 'Kids',
		age: '3-16 years',
		price: 'IDR 250K',
		features: [
			'All attractions access',
			'Safety supervision',
			'Full day session'
		]
	},
	{
		id: 'domesticAdult',
		type: 'domestic',
		title: 'Adults',
		age: 'More than 17 years',
		price: 'IDR 250K',
		features: [
			'All attractions access',
			'Safety supervision',
			'Full day session'
		]
	},
	{
		id: 'foreignAdult',
		type: 'foreign',
		title: 'Adults',
		age: 'More than 17 years',
		price: 'IDR 350K',
		features: [
			'All attractions access',
			'Safety supervision',
			'Full day session'
		]
	}
]

export const TicketSection = () => {
	const tUI = useTranslations('UI')
	
	return (
		<section id="tickets" className="w-full py-12 md:py-24 lg:py-32 flex justify-center relative">
			<div
				className="absolute top-0 right-0 z-10 left-0 min-h-36 bg-[url(/img/tickets-foreground.webp)] bg-no-repeat bg-cover aspect-[12/5]"></div>
			<div className="container px-4 md:px-6 z-20 pt-72">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<Badge className="bg-orange-100 text-orange-700">Tickets</Badge>
					<h3 className={cn('text-7xl font-bold text-orange-400 tracking-wider', fonts.beachday.className)}>
						Choose Your Adventure
					</h3>
					<p className="max-w-[900px] text-black-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Select the perfect ticket for your bouncing experience
					</p>
				</div>
				<div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-2 xl:grid-cols-4">
					{tickets.map((ticket) => (
						<Card key={ticket.id}
							  data-type={ticket.id}
							  className={cn(
								  'border-2 transition-colors bg-white/40',
								  'data-[type=domesticKids]:hover:border-[#1c5129]',
								  'data-[type=foreignKids]:hover:border-red-500',
								  'data-[type=domesticAdult]:hover:border-[#ff7e00]',
								  'data-[type=foreignAdult]:hover:border-[#ff2fa9]'
							  )}
						>
							<CardHeader>
								<Badge data-type={ticket.type}
									   className="data-[type=domestic]:bg-blue-100 data-[type=domestic]:text-blue-700 data-[type=foreign]:bg-pink-100 data-[type=foreign]:text-pink-500 w-fit capitalize"
								>
									{ticket.type}
								</Badge>
								<CardTitle
									data-type={ticket.id}
									className={cn(
										'text-center',
										'data-[type=domesticKids]:text-[#1c5129]',
										'data-[type=foreignKids]:text-red-500',
										'data-[type=domesticAdult]:text-[#ff7e00]',
										'data-[type=foreignAdult]:text-[#ff2fa9]'
									)}
								>
									{ticket.title}
								</CardTitle>
								{/*<CardDescription*/}
								{/*	className="text-center text-black">{ticket.age}</CardDescription>*/}
								<div className="mt-3 text-center">
									<span
										data-type={ticket.id}
										className={
											cn(
												'text-3xl font-bold',
												'data-[type=domesticKids]:text-[#1c5129]',
												'data-[type=foreignKids]:text-red-500',
												'data-[type=domesticAdult]:text-[#ff7e00]',
												'data-[type=foreignAdult]:text-[#ff2fa9]'
											)
										}
									>
										{ticket.price}
									</span>
									<span className="text-gray-950">/{tUI('person')}</span>
								</div>
							</CardHeader>
							<CardContent className="space-y-4">
								<ul className="space-y-2 text-sm">
									{ticket.features.map((feature, index) => (
										<li key={index} className="flex items-center">
											<span className="w-2 h-2 bg-[#1c5129] rounded-full mr-2"></span>
											{feature}
										</li>
									))}
								</ul>
								<Button
									data-type={ticket.id}
									className={
										cn(
											'w-full',
											'data-[type=domesticKids]:bg-[#1c5129]',
											'data-[type=foreignKids]:bg-red-500',
											'data-[type=domesticAdult]:bg-[#ff7e00]',
											'data-[type=foreignAdult]:bg-[#ff2fa9]'
										)
									}
								>
									Book Now
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}