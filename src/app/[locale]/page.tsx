import {Button} from '@/components/ui/button'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import {Badge} from '@/components/ui/badge'
import {AlertCircle, Timer} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {routing} from '@/i18n/routing'
import {use} from 'react'
import {setRequestLocale} from 'next-intl/server'
import {useTranslations} from 'next-intl'
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog'
import {Attraction} from '@/types/attraction'
import {AboutSlide} from '@/types/about-slide'
import {AboutSection} from '@/components/about-section'

export function generateStaticParams() {
	return routing.locales.map((locale) => ({locale}))
}

const attractions: Attraction[] = [
	{
		id: 'big-bounce',
		title: 'The Big Bounce House',
		shortDescription: 'The world\'s largest bounce house - over 10,000 sq ft of bouncing madness!',
		fullDescription:
			'Experience the ultimate bouncing adventure in the world\'s largest touring bounce house! This massive inflatable wonderland spans over 10,000 square feet and features multiple bouncing areas, obstacle courses, and interactive games. With towering walls, bouncing floors, and endless fun zones, it\'s designed to provide hours of entertainment for the whole family.',
		image: '/img/300x300.jpg',
		features: [
			'10,000+ sq ft of bouncing space',
			'Multiple themed bounce zones',
			'Interactive obstacle elements',
			'Safe enclosed environment',
			'Professional supervision',
			'Photo opportunities throughout'
		],
		ageRange: '3+ years (adult supervision required for under 8)',
		capacity: 'Up to 100 people per session',
		duration: 'Unlimited time during your session',
		safetyNotes: [
			'No shoes, jewelry, or sharp objects allowed',
			'Adult supervision required for children under 8',
			'Maximum weight limit: 300 lbs per person',
			'No food or drinks inside the attraction'
		],
		color: 'orange'
	},
	{
		id: 'obstacle-course',
		title: 'Obstacle Course',
		shortDescription: 'Navigate through challenging inflatable obstacles, slides, and climbing walls.',
		fullDescription:
			'Test your agility and endurance in our epic inflatable obstacle course! This challenging adventure features climbing walls, crawl tunnels, balance beams, and exciting slides. Race against friends or challenge yourself to beat your best time through this action-packed course designed for thrill-seekers of all ages.',
		image: '/img/300x300.jpg',
		features: [
			'Multi-level climbing challenges',
			'Tunnel crawls and balance tests',
			'Racing lanes for competition',
			'Timing system available',
			'Victory slide at the end',
			'Spectator viewing areas'
		],
		ageRange: '6+ years (recommended for active participants)',
		capacity: 'Up to 50 people per session',
		duration: 'Multiple runs encouraged during session',
		safetyNotes: [
			'Recommended for ages 6 and above',
			'Good physical condition required',
			'No pushing or rough play allowed',
			'Wait for clear path before starting'
		],
		color: 'pink'
	},
	{
		id: 'giant-slides-2',
		title: 'Giant Slides',
		shortDescription: 'Race down massive inflatable slides with multiple lanes for competitive fun.',
		fullDescription:
			'Feel the rush of adrenaline as you race down our towering inflatable slides! These massive slides feature multiple lanes for competitive racing, safety barriers, and soft landing zones. Whether you\'re racing friends or just enjoying the thrill of the ride, our giant slides provide an unforgettable experience with stunning views from the top.',
		image: '/img/300x300.jpg',
		features: [
			'Multiple racing lanes',
			'25+ feet of sliding excitement',
			'Soft landing cushions',
			'Safety barriers throughout',
			'Climbing steps with handrails',
			'Perfect for group competitions'
		],
		ageRange: '5+ years (height minimum: 42 inches)',
		capacity: 'Up to 30 people per session',
		duration: 'Unlimited slides during your session',
		safetyNotes: [
			'Minimum height requirement: 42 inches',
			'Slide feet-first only, no head-first sliding',
			'Wait for previous slider to clear landing area',
			'No standing or stopping on the slide'
		],
		color: 'orange'
	},
	{
		id: 'giant-slides',
		title: 'Giant Slides',
		shortDescription: 'Race down massive inflatable slides with multiple lanes for competitive fun.',
		fullDescription:
			'Feel the rush of adrenaline as you race down our towering inflatable slides! These massive slides feature multiple lanes for competitive racing, safety barriers, and soft landing zones. Whether you\'re racing friends or just enjoying the thrill of the ride, our giant slides provide an unforgettable experience with stunning views from the top.',
		image: '/img/300x300.jpg',
		features: [
			'Multiple racing lanes',
			'25+ feet of sliding excitement',
			'Soft landing cushions',
			'Safety barriers throughout',
			'Climbing steps with handrails',
			'Perfect for group competitions'
		],
		ageRange: '5+ years (height minimum: 42 inches)',
		capacity: 'Up to 30 people per session',
		duration: 'Unlimited slides during your session',
		safetyNotes: [
			'Minimum height requirement: 42 inches',
			'Slide feet-first only, no head-first sliding',
			'Wait for previous slider to clear landing area',
			'No standing or stopping on the slide'
		],
		color: 'orange'
	}
]

const aboutSlides: AboutSlide[] = [
	{
		id: 'main-event',
		badge: 'About The Event',
		badgeColor: 'orange',
		title: 'Bounce Into Adventure',
		description:
			'The Big Bounce Bali features the world\'s largest touring inflatable entertainment experience. With massive bounce houses, obstacle courses, and interactive games, it\'s an unforgettable adventure for kids and adults alike.',
		image: '/img/300x300.jpg',
		features: [
			{
				icon: 'Users',
				title: 'All Ages Welcome',
				description: 'Fun for the entire family'
			},
			{
				icon: 'Star',
				title: 'World Record Size',
				description: 'Officially the largest touring bounce house'
			}
		]
	},
	{
		id: 'safety-first',
		badge: 'Safety & Supervision',
		badgeColor: 'green',
		title: 'Your Safety is Our Priority',
		description:
			'We maintain the highest safety standards with professional supervision, regular equipment inspections, and comprehensive safety protocols. Our trained staff ensures everyone has a safe and enjoyable experience.',
		image: '/img/300x300.jpg',
		features: [
			{
				icon: 'Shield',
				title: 'Professional Staff',
				description: 'Trained safety supervisors on-site'
			},
			{
				icon: 'UserCheck',
				title: 'Regular Inspections',
				description: 'Daily equipment safety checks'
			}
		]
	},
	{
		id: 'family-fun',
		badge: 'Family Experience',
		badgeColor: 'pink',
		title: 'Creating Magical Memories',
		description:
			'The Big Bounce Bali is designed to bring families together through shared adventure and laughter. Watch your children\'s faces light up as they explore our massive inflatable wonderland, while adults can join in the fun too!',
		image: '/img/300x300.jpg',
		features: [
			{
				icon: 'Heart',
				title: 'Family Bonding',
				description: 'Activities for all family members'
			},
			{
				icon: 'Star',
				title: 'Photo Opportunities',
				description: 'Capture unforgettable moments'
			}
		]
	},
	{
		id: 'world-tour',
		badge: 'Global Experience',
		badgeColor: 'blue',
		title: 'World\'s Biggest Touring Event',
		description:
			'The Big Bounce has traveled across continents, bringing joy to millions of families worldwide. Now it\'s Bali\'s turn to experience this incredible phenomenon that has broken records and created countless memories.',
		image: '/img/300x300.jpg',
		features: [
			{
				icon: 'Award',
				title: 'Award Winning',
				description: 'Recognized globally for excellence'
			},
			{
				icon: 'Users',
				title: 'Millions Served',
				description: 'Over 2 million happy customers worldwide'
			}
		]
	}
]

export default function HomePage({params}: { params: Promise<Record<string, string>> }) {
	const {locale} = use(params)
	setRequestLocale(locale)
	
	const t = useTranslations('UI')
	
	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
			<main className="flex-1">
				{/* Hero Section */}
				<section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden flex justify-center">
					<div className="absolute inset-0 bg-[url(/img/hero.jpg)] bg-cover bg-no-repeat"></div>
					<div className="container px-4 md:px-6 relative">
						<div className="flex flex-col items-center space-y-6 text-center">
							<Badge
								className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 text-sm">
								🎉 Coming to Bali 2024
							</Badge>
							<div className="space-y-4">
								<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
									The Big Bounce
									<br/>
									<span className="text-orange-500">Bali</span>
								</h1>
								<p className="mx-auto max-w-[700px] text-gray-600 md:text-xl lg:text-2xl">
									The worlds biggest bounce house is coming to Bali! Experience massive inflatable
									attractions,
									obstacle courses, and endless fun for the whole family.
								</p>
							</div>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									size="lg"
									className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 text-lg"
								>
									{t('get_ticket_now')}
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg bg-transparent"
								>
									Watch Video
								</Button>
							</div>
						</div>
					</div>
				</section>
				
				{/* Tickets Section */}
				<section id="tickets" className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<Badge className="bg-green-100 text-green-700">Tickets</Badge>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose Your Adventure</h2>
							<p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Select the perfect ticket for your bouncing experience
							</p>
						</div>
						<div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-2 xl:grid-cols-4">
							{/* Domestic Kids */}
							<Card className="border-2 hover:border-orange-400 transition-colors">
								<CardHeader>
									<Badge className="bg-blue-100 text-blue-700 w-fit">Domestic</Badge>
									<CardTitle className="text-center">Kids Session</CardTitle>
									<CardDescription className="text-center">Ages 3-7 years
										(Indonesian)</CardDescription>
									<div className="text-center">
										<span className="text-3xl font-bold text-orange-600">IDR 200K</span>
										<span className="text-gray-600">/person</span>
									</div>
								</CardHeader>
								<CardContent className="space-y-4">
									<ul className="space-y-2 text-sm">
										<li className="flex items-center">
											<span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
											90-minute session
										</li>
										<li className="flex items-center">
											<span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
											All attractions access
										</li>
										<li className="flex items-center">
											<span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
											Safety supervision
										</li>
									</ul>
									<Button className="w-full bg-orange-500 hover:bg-orange-600">Book Now</Button>
								</CardContent>
							</Card>
							
							{/* Foreign Kids */}
							<Card className="border-2 hover:border-red-400 transition-colors">
								<CardHeader>
									<Badge className="bg-red-100 text-red-700 w-fit">Foreign</Badge>
									<CardTitle className="text-center">Kids Session</CardTitle>
									<CardDescription className="text-center">Ages 3-7 years
										(International)</CardDescription>
									<div className="text-center">
										<span className="text-3xl font-bold text-red-600">$25</span>
										<span className="text-gray-600">/person</span>
									</div>
								</CardHeader>
								<CardContent className="space-y-4">
									<ul className="space-y-2 text-sm">
										<li className="flex items-center">
											<span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
											90-minute session
										</li>
										<li className="flex items-center">
											<span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
											All attractions access
										</li>
										<li className="flex items-center">
											<span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
											Safety supervision
										</li>
									</ul>
									<Button className="w-full bg-red-500 hover:bg-red-600">Book Now</Button>
								</CardContent>
							</Card>
							
							{/* Domestic Family */}
							<Card className="border-2 border-pink-400 hover:border-pink-500 transition-colors relative">
								<Badge
									className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white">
									Most Popular
								</Badge>
								<CardHeader>
									<Badge className="bg-blue-100 text-blue-700 w-fit mt-4">Domestic</Badge>
									<CardTitle className="text-center">Family Session</CardTitle>
									<CardDescription className="text-center">All ages (Indonesian)</CardDescription>
									<div className="text-center">
										<span className="text-3xl font-bold text-pink-600">IDR 280K</span>
										<span className="text-gray-600">/person</span>
									</div>
								</CardHeader>
								<CardContent className="space-y-4">
									<ul className="space-y-2 text-sm">
										<li className="flex items-center">
											<span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
											2-hour session
										</li>
										<li className="flex items-center">
											<span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
											All attractions access
										</li>
										<li className="flex items-center">
											<span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
											Family photo package
										</li>
									</ul>
									<Button className="w-full bg-pink-500 hover:bg-pink-600">Book Now</Button>
								</CardContent>
							</Card>
							
							{/* Foreign Family */}
							<Card className="border-2 hover:border-purple-400 transition-colors">
								<CardHeader>
									<Badge className="bg-red-100 text-red-700 w-fit">Foreign</Badge>
									<CardTitle className="text-center">Family Session</CardTitle>
									<CardDescription className="text-center">All ages (International)</CardDescription>
									<div className="text-center">
										<span className="text-3xl font-bold text-purple-600">$35</span>
										<span className="text-gray-600">/person</span>
									</div>
								</CardHeader>
								<CardContent className="space-y-4">
									<ul className="space-y-2 text-sm">
										<li className="flex items-center">
											<span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
											2-hour session
										</li>
										<li className="flex items-center">
											<span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
											All attractions access
										</li>
										<li className="flex items-center">
											<span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
											Family photo package
										</li>
									</ul>
									<Button className="w-full bg-purple-500 hover:bg-purple-600">Book Now</Button>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				
				{/* Attractions Section */}
				<section
					id="attractions"
					className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-orange-50 to-pink-50"
				>
					<div className="container mx-auto px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<Badge className="bg-pink-100 text-pink-700">Attractions</Badge>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Epic Inflatable
								Adventures</h2>
							<p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Experience multiple massive inflatable attractions designed for maximum fun and
								excitement. Click on
								each attraction to learn more!
							</p>
						</div>
						<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4">
							{attractions.map((attraction) => (
								<Dialog key={attraction.id}>
									<DialogTrigger asChild>
										<Card
											className={`border-2 border-${attraction.color}-200 hover:border-${attraction.color}-400 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg`}
										>
											<CardHeader>
												<Image
													src={attraction.image || '/img/300x300.png'}
													width="300"
													height="200"
													alt={attraction.title}
													className="rounded-lg object-cover w-full"
												/>
												<CardTitle
													className={`text-${attraction.color}-600 mt-4`}>{attraction.title}</CardTitle>
												<CardDescription>{attraction.shortDescription}</CardDescription>
												<Button
													variant="outline"
													size="sm"
													className={`mt-2 border-${attraction.color}-500 text-${attraction.color}-600 hover:bg-${attraction.color}-50`}
												>
													Learn More →
												</Button>
											</CardHeader>
										</Card>
									</DialogTrigger>
									<DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
										<DialogHeader>
											<DialogTitle
												className={`text-2xl font-bold text-${attraction.color}-600 mb-4`}>
												{attraction.title}
											</DialogTitle>
										</DialogHeader>
										
										<div className="flex flex-col gap-6">
											{/* Details Section */}
											<div className="space-y-6">
												{/* Description */}
												<div>
													<h3 className="text-lg font-semibold mb-2">About This
														Attraction</h3>
													<p className="text-gray-700 leading-relaxed">{attraction.fullDescription}</p>
												</div>
												
												{/* Features */}
												<div>
													<h3 className="text-lg font-semibold mb-3">Features &
														Highlights</h3>
													<div className="grid gap-2">
														{attraction.features.map((feature, index) => (
															<div key={index} className="flex items-start space-x-2">
                                <span
									className={`w-2 h-2 bg-${attraction.color}-500 rounded-full mt-2 flex-shrink-0`}
								></span>
																<span className="text-sm text-gray-700">{feature}</span>
															</div>
														))}
													</div>
												</div>
												
												{/* Duration */}
												<div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
													<Timer className="h-5 w-5 text-blue-500"/>
													<div>
														<p className="text-sm font-medium text-blue-700">Duration</p>
														<p className="text-sm text-blue-600">{attraction.duration}</p>
													</div>
												</div>
											</div>
										</div>
										
										{/* Safety Information */}
										<div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
											<div className="flex items-start space-x-2">
												<AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0"/>
												<div className="flex-1">
													<h4 className="font-semibold text-yellow-800 mb-2">Safety
														Guidelines</h4>
													<div className="grid gap-1">
														{attraction.safetyNotes.map((note, index) => (
															<p key={index} className="text-sm text-yellow-700">
																• {note}
															</p>
														))}
													</div>
												</div>
											</div>
										</div>
										
										{/* CTA Button */}
										<div className="mt-6 flex justify-center">
											<Button
												size="lg"
												className={`bg-gradient-to-r from-${attraction.color}-500 to-pink-500 hover:from-${attraction.color}-600 hover:to-pink-600 text-white px-8 py-3`}
											>
												Book Tickets for This Attraction
											</Button>
										</div>
									</DialogContent>
								</Dialog>
							))}
						</div>
					</div>
				</section>
				
				<AboutSection items={aboutSlides}/>
				
				{/* CTA Section */}
				<section
					className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-500 to-pink-500 flex justify-center">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Bounce?</h2>
							<p className="mx-auto max-w-[600px] text-orange-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Dont miss out on Balis biggest bounce experience. Book your tickets now and get ready
								for an
								unforgettable adventure!
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button size="lg"
										className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
									Book Tickets Now
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg bg-transparent"
								>
									Learn More
								</Button>
							</div>
						</div>
					</div>
				</section>
			</main>
			
			{/* Footer */}
			<footer
				className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
				<p className="text-xs text-gray-500">© 2024 The Big Bounce Bali. All rights reserved.</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link href="/terms" className="text-xs hover:underline underline-offset-4 text-gray-500">
						Terms of Service
					</Link>
					<Link href="/privacy" className="text-xs hover:underline underline-offset-4 text-gray-500">
						Privacy Policy
					</Link>
					<Link href="/safety" className="text-xs hover:underline underline-offset-4 text-gray-500">
						Safety Guidelines
					</Link>
				</nav>
			</footer>
			
			{/* Floating CTA */}
			<div className="fixed bottom-6 right-6 z-50">
				<div className="relative">
					{/* Pulsing ring animation */}
					<div
						className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-ping opacity-75"></div>
					<div
						className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-pulse opacity-50"></div>
					
					{/* Main CTA Button */}
					<Button
						size="lg"
						className="relative bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold text-lg border-4 border-white"
					>
						<div className="flex flex-col items-center">
							<span className="text-sm font-normal">🎟️ Get Tickets</span>
						</div>
					</Button>
				</div>
			</div>
			
			{/* Mobile Floating CTA */}
			<div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
				<div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4 shadow-2xl">
					<Button
						size="lg"
						className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg py-4 rounded-xl transform hover:scale-105 transition-all duration-300"
					>
						🎟️ Buy Tickets Now
					</Button>
				</div>
			</div>
		</div>
	)
}
