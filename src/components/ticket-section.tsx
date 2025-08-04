import {Badge} from '@/components/ui/badge'
import {CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {cn} from '@/lib/utils'
import {fonts} from '@/fonts'
import * as motion from 'motion/react-client'

const tickets = [
	{
		id: 'a',
		type: 'all',
		title: 'Entry Pass',
		price: 'IDR 50K',
		per: 'person',
		features: [
			'1 pax entry',
			'50K F&B voucher',
			'No bounce access',
			'Full-day session'
		]
	},
	{
		id: 'b',
		type: 'domestic',
		title: 'All-Access Pass',
		price: 'IDR 150K',
		per: 'person',
		features: [
			'1 pax entry',
			'50K F&B voucher',
			'Unlimited bounce',
			'Full-day session'
		]
	},
	{
		id: 'c',
		type: 'foreign',
		title: 'All-Access Pass',
		price: 'IDR 250K',
		per: 'person',
		features: [
			'1 pax entry',
			'50K F&B voucher',
			'Unlimited bounce',
			'Full-day session'
		]
	},
	{
		id: 'd',
		type: 'domestic',
		title: '4 All-Access Pass',
		price: 'IDR 480K',
		per: '4 pax',
		features: [
			'4 pax entry',
			'4x 50K F&B voucher',
			'Unlimited bounce',
			'Full-day session'
		]
	},
	{
		id: 'e',
		type: 'foreign',
		title: '4 All-Access Pass',
		price: 'IDR 800K',
		per: '4 pax',
		features: [
			'4 pax entry',
			'4x 50K F&B voucher',
			'Unlimited bounce',
			'Full-day session'
		]
	}
]

export const TicketSection = () => {
	return (
		<section id="tickets" className="w-full overflow-hidden py-12 md:py-24 lg:py-32 flex justify-center relative">
			<div className="container px-4 md:px-6 z-20">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<motion.h3 initial={{y: 100}}
							   whileInView={{y: 0, transition: {duration: 0.5, ease: 'easeInOut'}}}
							   className={cn('text-4xl md:text-7xl font-bold text-orange-400 tracking-wider', fonts.beachday.className)}
					>
						Pick Your Pass
					</motion.h3>
					<motion.p initial={{y: 80}}
							  whileInView={{y: 0, transition: {duration: 0.5, ease: 'easeInOut', delay: 0.1}}}
							  className="max-w-[900px] text-black-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Each ticket includes a 50K F&B voucher, redeemable at selected tenants.
					</motion.p>
				</div>
				<div className="mx-auto grid max-w-7xl items-center gap-6 py-12 lg:grid-cols-2 xl:grid-cols-5">
					{tickets.map((ticket, index) => (
						<motion.div key={ticket.id}
									data-type={ticket.id}
									initial={{x: index % 2 != 1 ? 40 : -40}}
									whileInView={{x: 0, transition: {duration: 0.5, ease: 'easeInOut'}}}
									exit={{x: index % 2 != 1 ? -40 : 40}}
									className={cn(
										'border-2 transition-colors bg-white/40 h-auto md:h-[365px] flex flex-col gap-2 py-8 px-2 rounded-xl',
										'data-[type=a]:hover:border-green-800',
										'data-[type=b]:hover:border-red-500',
										'data-[type=c]:hover:border-orange-500',
										'data-[type=d]:hover:border-pink-500',
										'data-[type=e]:hover:border-purple-500'
									)}
						>
							<CardHeader>
								<Badge data-type={ticket.type}
									   className="data-[type=domestic]:bg-blue-100 data-[type=domestic]:text-blue-700 data-[type=foreign]:bg-pink-100 data-[type=foreign]:text-pink-500 w-fit capitalize text-xs"
								>
									{ticket.type === 'all' ? 'All' : ticket.type === 'domestic' ? 'Indonesian Citizens & KITAS Holders' : 'International Tourist'}
								</Badge>
								<CardTitle
									data-type={ticket.id}
									className={cn(
										'text-center text-sm',
										'data-[type=a]:text-green-800',
										'data-[type=b]:text-red-500',
										'data-[type=c]:text-orange-500',
										'data-[type=d]:text-pink-500',
										'data-[type=e]:text-purple-500'
									)}
								>
									{ticket.title}
								</CardTitle>
								<div className="text-center">
									<span
										data-type={ticket.id}
										className={
											cn(
												'text-xl font-bold',
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
									<span className="text-gray-950">/{ticket.per}</span>
								</div>
							</CardHeader>
							<CardContent className="flex-1 flex flex-col justify-between">
								<ul className="space-y-1 grid grid-cols-2 text-sm">
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
											'mt-2 w-full',
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
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}