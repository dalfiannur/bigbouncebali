'use client'

import {Badge} from '@/components/ui/badge'
import Image from 'next/image'
import {Button} from '@/components/ui/button'
import {Award, ChevronLeft, ChevronRight, Heart, LucideProps, Shield, Star, UserCheck, Users} from 'lucide-react'
import {ForwardRefExoticComponent, RefAttributes, useEffect, useState} from 'react'
import {AboutSlide} from '@/types/about-slide'

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
		}, 5000) // Change slide every 5 seconds
		
		return () => clearInterval(interval)
	}, [isAutoPlaying, items.length])
	
	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % items.length)
		setIsAutoPlaying(false)
	}
	
	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + items.length) % items.length)
		setIsAutoPlaying(false)
	}
	
	const goToSlide = (index: number) => {
		setCurrentSlide(index)
		// setIsAutoPlaying(false)
	}
	
	const getIcon = (name: string, className: string) => {
		const Icon = icons[name]
		return <Icon className={className} />
	}
	
	return (
		<section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
			<div className="container mx-auto px-4 md:px-8">
				<div className="relative">
					{/* Carousel Content */}
					<div className="overflow-hidden">
						<div
							className="flex transition-transform duration-500 ease-in-out"
							style={{transform: `translateX(-${currentSlide * 100}%)`}}
						>
							{items.map((slide) => (
								<div key={slide.id} className="w-full flex-shrink-0">
									<div
										className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
										<div className="flex flex-col justify-center space-y-4">
											<div className="space-y-2">
												<Badge
													className={`bg-${slide.badgeColor}-100 text-${slide.badgeColor}-700 w-fit`}>
													{slide.badge}
												</Badge>
												<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{slide.title}</h2>
												<p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
													{slide.description}
												</p>
											</div>
											<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
												{slide.features.map((feature, featureIndex) => (
													<div key={featureIndex} className="flex items-center space-x-2">
														{getIcon(feature.icon, `h-5 w-5 text-${slide.badgeColor}-500`)}
														<div>
															<span className="text-sm font-medium">{feature.title}</span>
															<p className="text-xs text-gray-500">{feature.description}</p>
														</div>
													</div>
												))}
											</div>
										</div>
										<Image
											src={slide.image || '/placeholder.svg'}
											width="550"
											height="400"
											alt={slide.title}
											className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
										/>
									</div>
								</div>
							))}
						</div>
					</div>
					
					{/*/!* Navigation Arrows *!/*/}
					{/*<Button*/}
					{/*	variant="outline"*/}
					{/*	size="icon"*/}
					{/*	className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white z-10"*/}
					{/*	onClick={prevSlide}*/}
					{/*>*/}
					{/*	<ChevronLeft className="h-4 w-4"/>*/}
					{/*</Button>*/}
					{/*<Button*/}
					{/*	variant="outline"*/}
					{/*	size="icon"*/}
					{/*	className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white z-10"*/}
					{/*	onClick={nextSlide}*/}
					{/*>*/}
					{/*	<ChevronRight className="h-4 w-4"/>*/}
					{/*</Button>*/}
					
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
					
					{/* Slide Counter */}
				{/*	<div className="text-center mt-4">*/}
                {/*<span className="text-sm text-gray-500">*/}
                {/*  {currentSlide + 1} of {items.length}*/}
                {/*</span>*/}
				{/*	</div>*/}
				{/*	<div className="text-center mt-2">*/}
				{/*		<Button*/}
				{/*			variant="ghost"*/}
				{/*			size="sm"*/}
				{/*			onClick={() => setIsAutoPlaying(!isAutoPlaying)}*/}
				{/*			className="text-xs text-gray-500 hover:text-gray-700"*/}
				{/*		>*/}
				{/*			{isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}*/}
				{/*		</Button>*/}
				{/*	</div>*/}
				</div>
			</div>
		</section>
	)
}