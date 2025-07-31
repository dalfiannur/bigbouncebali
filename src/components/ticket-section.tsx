import {Badge} from '@/components/ui/badge'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {useTranslations} from 'next-intl'
import {cn} from '@/lib/utils'
import {fonts} from '@/fonts'

const tickets = [
	{
		id: 'a',
		type: 'all',
		title: 'Entry Pass Only',
		price: 'IDR 50K',
		features: [
			'Entry',
			'F&B 50K',
			'Full Day Session',
			'No Bounce Access',
		]
	},
	{
		id: 'b',
		type: 'domestic',
		title: 'Full Day Pass',
		price: 'IDR 150K',
		features: [
			'Entry',
			'Unlimited Bounce',
			'F&B 50K',
			'Full Day Session'
		]
	},
	{
		id: 'c',
		type: 'foreign',
		title: 'Full Day Pass',
		price: 'IDR 250K',
		features: [
			'Entry',
			'Unlimited Bounce',
			'F&B 50K',
			'Full Day Session'
		]
	},
	{
		id: 'd',
		type: 'domestic',
		title: '4 Combo Full Day Pass',
		price: 'IDR 480K',
		features: [
			'4 Pax',
			'Entry',
			'Unlimited Bounce',
			'F&B 50K',
			'Full Day Session'
		]
	},
	{
		id: 'e',
		type: 'foreign',
		title: '4 Combo Full Day Pass',
		price: 'IDR 800K',
		features: [
			'4 pax',
			'Entry',
			'Unlimited Bounce',
			'F&B 50K',
			'Full Day Session'
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
					<h3 className={cn('text-7xl font-bold text-orange-400 tracking-wider', fonts.beachday.className)}>
						Choose Your Adventure
					</h3>
					<p className="max-w-[900px] text-black-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Select the perfect ticket for your bouncing experience
					</p>
				</div>
				<div className="mx-auto grid max-w-7xl items-center gap-6 py-12 lg:grid-cols-2 xl:grid-cols-5">
					{tickets.map((ticket) => (
						<Card key={ticket.id}
							  data-type={ticket.id}
							  className={cn(
								  'border-2 transition-colors bg-white/40 h-[365px] flex flex-col',
								  'data-[type=a]:hover:border-green-800',
								  'data-[type=b]:hover:border-red-500',
								  'data-[type=c]:hover:border-orange-500',
								  'data-[type=d]:hover:border-pink-500',
								  'data-[type=e]:hover:border-purple-500'
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
										'text-center mt-2',
										'data-[type=a]:text-green-800',
										'data-[type=b]:text-red-500',
										'data-[type=c]:text-orange-500',
										'data-[type=d]:text-pink-500',
										'data-[type=e]:text-purple-500'
									)}
								>
									{ticket.title}
								</CardTitle>
								<div className="mt-3 text-center">
									<span
										data-type={ticket.id}
										className={
											cn(
												'text-3xl font-bold',
												'data-[type=a]:text-green-800',
												'data-[type=b]:text-red-500',
												'data-[type=c]:text-orange-500',
												'data-[type=d]:text-pink-500',
												'data-[type=d]:text-purple-500'
											)
										}
									>
										{ticket.price}
									</span>
									<span className="text-gray-950">/{tUI('person')}</span>
								</div>
							</CardHeader>
							<CardContent className="flex-1 flex flex-col justify-between">
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
											'data-[type=a]:bg-green-800',
											'data-[type=b]:bg-red-500',
											'data-[type=c]:bg-orange-500',
											'data-[type=d]:bg-pink-500',
											'data-[type=e]:bg-purple-500'
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