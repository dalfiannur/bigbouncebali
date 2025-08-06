import {cn} from '@/lib/utils'
import {fonts} from '@/fonts'
import * as motion from 'motion/react-client'
import Image from 'next/image'

const tickets = [
	{
		id: 'a',
		type: 'all',
		title: 'Festival Pass',
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
		title: 'Bounce Pass',
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
		title: 'Bounce Pass',
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
		title: '4 Bounce Pass',
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
		title: '4 Bounce Pass',
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
		<section id="tickets"
				 className="w-full overflow-hidden flex justify-center relative bg-[url(/img/bg-bottom.webp)] bg-no-repeat bg-cover bg-bottom">
			<div className="container px-4 md:px-6 z-20">
				<div className="flex flex-col items-center justify-center text-center">
					<motion.h3 initial={{y: 100}}
							   whileInView={{y: 0, transition: {duration: 0.5, ease: 'easeInOut'}}}
							   className={cn('text-white uppercase tracking-widest', fonts.beachday.className)}
					>
						First things first
					</motion.h3>
					<motion.h2 initial={{y: 80}}
							   whileInView={{y: 0, transition: {duration: 0.5, ease: 'easeInOut', delay: 0.1}}}
							   className={cn('max-w-[900px] text-orange-400 tracking-widest text-4xl [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:white]', fonts.beachday.className)}>
						Get your ticket
					</motion.h2>
				</div>
				<div className="mt-8 flex flex-col justify-center items-center gap-4">
					{tickets.map((ticket, index) => (
						<motion.div key={ticket.id}
									data-type={ticket.id}
									initial={{x: index % 2 != 1 ? 40 : -40}}
									whileInView={{x: 0, transition: {duration: 0.5, ease: 'easeInOut'}}}
									exit={{x: index % 2 != 1 ? -40 : 40}}
									className={cn(
										'relative w-[363px]',
										'data-[type=a]:hover:border-green-800',
										'data-[type=b]:hover:border-red-500',
										'data-[type=c]:hover:border-orange-500',
										'data-[type=d]:hover:border-pink-500',
										'data-[type=e]:hover:border-purple-500'
									)}
						>
							<Image src={`/img/tickets/button-${index + 1}.png`}
								   alt="Btn01"
								   width={2098}
								   height={1164}
								   className="w-full"/>
							<div className="absolute inset-0 px-6 pt-5">
								<div className="flex items-center gap-4 justify-between">
									<div data-type={ticket.type}
										 className={cn(
											 'w-fit h-fit font-bold rounded px-3 py-1 text-xs drop-shadow-2xl uppercase text-center',
											 'bg-blue-300 text-white',
											 fonts.beachday.className
										 )}
									>
										{ticket.type === 'all' ? 'All' : ticket.type === 'domestic' ? 'Indonesian Citizens & KITAS Holders' : 'International Tourist'}
									</div>
									<div
										className={cn('text-xl font-black whitespace-nowrap py-2 uppercase text-white tracking-wider', fonts.beachday.className)}>
										{ticket.title}
									</div>
								</div>
								<div className="text-center">
									<span
										data-type={ticket.id}
										className={
											cn(
												'text-[52px]/12 font-bold text-white [-webkit-text-stroke-width:4px] [-webkit-text-stroke-color:black]',
												fonts.knewave.className
											)
										}
									>
										{ticket.price}
									</span>
									<span
										className={cn('uppercase text-xl font-bold text-white [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:black]', fonts.knewave.className)}> /{ticket.per}</span>
								</div>
								<div className="mt-1 flex justify-between items-end">
									<ul className="flex flex-col text-xs text-white font-semibold">
										{ticket.features.map((feature, index) => (
											<li key={index} className="flex items-center">
												<span className={cn(
													'w-1 h-1 rounded-full mr-2 bg-white'
												)}></span>
												{feature}
											</li>
										))}
									</ul>
									<div className="relative">
										<div
											data-rotate={(index + 1) % 2 === 0}
											data-color={index.toString()}
											className={cn(
												'z-10 bg-blue-300 text-white text-4xl px-4 py-1 h-fit w-fit rounded-md data-[rotate=false]:-rotate-3 data-[rotate=true]:rotate-3 mb-1',
												'data-[color=0]:bg-blue-500',
												'data-[color=1]:bg-yellow-500',
												'data-[color=2]:bg-green-500',
												'data-[color=3]:bg-pink-500',
												'data-[color=4]:bg-blue-500',
												fonts.beachday.className
											)}
										>
											Book Now
										</div>
										<div className="z-0 bg-black w-full h-full"/>
									</div>
								</div>
							</div>
						
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}