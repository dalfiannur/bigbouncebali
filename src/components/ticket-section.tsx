import {Badge} from '@/components/ui/badge'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {useTranslations} from 'next-intl'
import {cn} from '@/lib/utils'
import {fonts} from '@/fonts'

const tickets = [
	{
		id: 'domestic_kids',
		type: 'domestic',
		title: 'Kids',
		age: '3-7 years',
		price: 'IDR 150K',
		color: '#1c5129',
		features: [
			'All attractions access',
			'Safety supervision',
			'90-minute session'
		]
	},
	{
		id: 'foreign_kids',
		type: 'foreign',
		title: 'Kids',
		age: '3-7 years',
		price: 'IDR 250K',
		color: '#fff445',
		features: [
			'All attractions access',
			'Safety supervision',
			'90-minute session'
		]
	},
	{
		id: 'domestic_adults',
		type: 'domestic',
		title: 'Adults',
		age: '18 years',
		price: 'IDR 250K',
		color: '#ff7e00',
		features: [
			'All attractions access',
			'Safety supervision',
			'2-hour session'
		]
	},
	{
		id: 'foreign_adults',
		type: 'foreign',
		title: 'Adults',
		age: '18 years',
		price: 'IDR 350K',
		color: '#ff2fa9',
		features: [
			'All attractions access',
			'Safety supervision',
			'2-hour session'
		]
	}
]

export const TicketSection = () => {
	const tTickets = useTranslations('Tickets')
	const tUI = useTranslations('UI')
	
	return (
		<section id="tickets" className="w-full py-12 md:py-24 lg:py-32 flex justify-center relative">
			<div
				className="absolute top-0 right-0 z-10 left-0 min-h-36 bg-[url(/img/tickets-foreground.png)] bg-no-repeat bg-cover aspect-[12/5]"></div>
			<div className="container px-4 md:px-6 z-20 pt-72">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<Badge className="bg-green-100 text-green-700">Tickets</Badge>
					<h2 className={cn('text-7xl font-bold text-green-900 tracking-wider', fonts.beachday.className)}>Choose
						Your Adventure</h2>
					<p className="max-w-[900px] text-black-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Select the perfect ticket for your bouncing experience
					</p>
				</div>
				<div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-2 xl:grid-cols-4">
					{tickets.map((ticket) => (
						<Card key={ticket.id}
							  className={cn(
								  'border-2 transition-colors bg-white/40',
								  `hover:border-[${ticket.color}]`
							  )}
						>
							<CardHeader>
								<Badge data-type={ticket.type}
									   className="data-[type=domestic]:bg-blue-100 data-[type=domestic]:text-blue-700 data-[type=foreign]:bg-pink-100 data-[type=foreign]:text-pink-500 w-fit capitalize">{ticket.type}</Badge>
								<CardTitle className="text-center">{ticket.title}</CardTitle>
								<CardDescription
									className="text-center text-black">{ticket.age}</CardDescription>
								<div className="text-center">
									<span
										className="text-3xl font-bold text-[#1c5129]">{ticket.price}</span>
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
									className={cn('w-full', `bg-[${ticket.color}]`, `hover:bg-[${ticket.color}]/80`)}>
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