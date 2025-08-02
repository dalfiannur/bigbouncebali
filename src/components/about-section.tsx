'use client'

import {Badge} from '@/components/ui/badge'
import Image from 'next/image'
import {Award, Heart, LucideProps, Shield, Star, UserCheck, Users} from 'lucide-react'
import {ForwardRefExoticComponent, RefAttributes, useEffect, useState} from 'react'
import {AboutSlide} from '@/types/about-slide'
import {cn} from '@/lib/utils'

const icons: {
	[key: string]: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
} = {
	Users,
	Star,
	Shield,
	UserCheck,
	Heart,
	Award
}
export const AboutSection = ({items}: { items: AboutSlide[] }) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isAutoPlaying, setIsAutoPlaying] = useState(true)
	
	useEffect(() => {
		if (!isAutoPlaying) return
		
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % items.length)
		}, 5000)
		
		return () => clearInterval(interval)
	}, [isAutoPlaying, items.length])
	
	const goToSlide = (index: number) => {
		setCurrentSlide(index)
	}
	
	const getIcon = (name: string, className: string) => {
		const Icon = icons[name]
		return <Icon className={className}/>
	}
	
	return (
		<section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white/20">
			<div className="container mx-auto px-4 md:px-8">
				<div className="relative">
					<div className="overflow-hidden">
						<div
							className="flex transition-transform duration-500 ease-in-out"
							style={{transform: `translateX(-${currentSlide * 100}%)`}}
						>
							{items.map((slide) => (
								<div key={slide.id} className="w-full flex-shrink-0">
									<div
										className="flex flex-col-reverse md:flex-row justify-between gap-6"
										onMouseEnter={() => setIsAutoPlaying(false)}
										onMouseLeave={() => setIsAutoPlaying(true)}
									>
										<div className="flex flex-col justify-center space-y-4">
											<div className="space-y-2">
												<Badge
													data-type={slide.id}
													className={cn(
														`w-fit`,
														`data-[type=a]:bg-green-100 data-[type=a]:text-green-700`,
														`data-[type=a]:bg-red-100 data-[type=a]:text-red-700`,
														`data-[type=a]:bg-orange-100 data-[type=a]:text-orange-700`,
														`data-[type=a]:bg-pink-100 data-[type=a]:text-pink-700`,
														`data-[type=a]:bg-purple-100 data-[type=a]:text-purple-700`
													)}
												>
													{slide.badge}
												</Badge>
												<h4 className="text-3xl font-bold tracking-tighter sm:text-5xl">{slide.title}</h4>
												<p dangerouslySetInnerHTML={{__html: slide.description}}
												   className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"/>
											</div>
											<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
												{slide.features.map((feature, featureIndex) => (
													<div key={featureIndex} className="flex items-center space-x-2">
														{getIcon(
															feature.icon, cn(
																`h-5 w-5`, `data-[type=a]:text-green-700`,
																`data-[type=a]:text-red-700`,
																`data-[type=a]:text-orange-700`,
																`data-[type=a]:text-pink-700`,
																`data-[type=a]:text-purple-700`
															)
														)}
														<div>
															<span className="text-sm font-medium">{feature.title}</span>
															{feature.description && (
																<p className="text-xs text-gray-500">{feature.description}</p>
															)}
														</div>
													</div>
												))}
											</div>
										</div>
										<div
											className=" relative overflow-hidden rounded-xl w-full md:w-[500px] aspect-video">
											<Image
												src={slide.image}
												alt={slide.title}
												fill={true}
												className="object-cover"
											/>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					
					{/* Dots Indicator */}
					<div className="flex justify-center space-x-2 mt-8">
						{items.map((_, index) => (
							<button
								key={index}
								className={`w-3 h-3 rounded-full transition-all duration-300 ${
									index === currentSlide ? 'bg-orange-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
								}`}
								onClick={() => goToSlide(index)}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}