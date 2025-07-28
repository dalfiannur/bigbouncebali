import {Button} from '@/components/ui/button'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import {Badge} from '@/components/ui/badge'
import {Calendar, Clock, Mail, MapPin, Phone, Star, Users} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {routing} from '@/i18n/routing'
import {use} from 'react'
import {setRequestLocale} from 'next-intl/server'
import {useTranslations} from 'next-intl'

export function generateStaticParams() {
	return routing.locales.map((locale) => ({locale}))
}

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
					className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-orange-50 to-pink-50 flex justify-center"
				>
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<Badge className="bg-pink-100 text-pink-700">Attractions</Badge>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Epic Inflatable
								Adventures</h2>
							<p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Experience multiple massive inflatable attractions designed for maximum fun and
								excitement
							</p>
						</div>
						<div className="mx-auto flex max-w-5xl items-center justify-center gap-6 py-12 flex-wrap">
							<Card
								className="border-2 border-orange-200 hover:border-orange-400 transition-colors w-[300px] h-[400px]">
								<CardHeader>
									<Image
										src="/img/300x300.jpg"
										width="300"
										height="200"
										alt="The Big Bounce House"
										className="rounded-lg object-cover w-full"
									/>
									<CardTitle className="text-orange-600 mt-6">The Big Bounce House</CardTitle>
									<CardDescription>
										The worlds largest bounce house - over 10,000 sq ft of bouncing madness!
									</CardDescription>
								</CardHeader>
							</Card>
							<Card
								className="border-2 border-pink-200 hover:border-pink-400 transition-colors w-[300px] h-[400px]">
								<CardHeader>
									<Image
										src="/img/300x300.jpg"
										width="300"
										height="200"
										alt="Obstacle Course"
										className="rounded-lg object-cover w-full"
									/>
									<CardTitle className="text-pink-600  mt-6">Obstacle Course</CardTitle>
									<CardDescription>
										Navigate through challenging inflatable obstacles, slides, and climbing walls.
									</CardDescription>
								</CardHeader>
							</Card>
							<Card
								className="border-2 border-orange-200 hover:border-orange-400 transition-colors w-[300px] h-[400px]">
								<CardHeader>
									<Image
										src="/img/300x300.jpg"
										width="300"
										height="300"
										alt="Giant Slides"
										className="rounded-lg object-cover w-full"
									/>
									<CardTitle className="text-orange-600 mt-6">Giant Slides</CardTitle>
									<CardDescription>
										Race down massive inflatable slides with multiple lanes for competitive fun.
									</CardDescription>
								</CardHeader>
							</Card>
							<Card
								className="border-2 border-orange-200 hover:border-orange-400 transition-colors w-[300px] h-[400px]">
								<CardHeader>
									<Image
										src="/img/300x300.jpg"
										width="300"
										height="300"
										alt="Giant Slides"
										className="rounded-lg object-cover w-full"
									/>
									<CardTitle className="text-orange-600 mt-6">Giant Slides</CardTitle>
									<CardDescription>
										Race down massive inflatable slides with multiple lanes for competitive fun.
									</CardDescription>
								</CardHeader>
							</Card>
							<Card
								className="border-2 border-orange-200 hover:border-orange-400 transition-colors w-[300px] h-[400px]">
								<CardHeader>
									<Image
										src="/img/300x300.jpg"
										width={300}
										height={300}
										alt="Giant Slides"
										className="rounded-lg object-cover w-full"
									/>
									<CardTitle className="text-orange-600 mt-6">Giant Slides</CardTitle>
									<CardDescription>
										Race down massive inflatable slides with multiple lanes for competitive fun.
									</CardDescription>
								</CardHeader>
							</Card>
						</div>
					</div>
				</section>
				
				{/* About Section */}
				<section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
					<div className="container px-4 md:px-6">
						<div
							className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<Badge className="bg-orange-100 text-orange-700 w-fit">About The Event</Badge>
									<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Bounce Into
										Adventure</h2>
									<p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
										The Big Bounce Bali features the worlds largest touring inflatable
										entertainment experience. With
										massive bounce houses, obstacle courses, and interactive games, its an
										unforgettable adventure for
										kids and adults alike.
									</p>
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div className="flex items-center space-x-2">
										<Users className="h-5 w-5 text-orange-500"/>
										<span className="text-sm font-medium">All Ages Welcome</span>
									</div>
									<div className="flex items-center space-x-2">
										<Star className="h-5 w-5 text-orange-500"/>
										<span className="text-sm font-medium">World Record Size</span>
									</div>
								</div>
							</div>
							<Image
								src="/img/hero.jpg"
								width="550"
								height="400"
								alt="Giant inflatable bounce house"
								className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
							/>
						</div>
					</div>
				</section>
				
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
						🎟️ Buy Tickets Now - Limited Availability!
					</Button>
				</div>
			</div>
		</div>
	)
}
