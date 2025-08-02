import {Attraction} from '@/types/attraction'
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog'
import {Card, CardDescription, CardTitle} from './ui/card'
import Image from 'next/image'
import {Button} from './ui/button'
import {cn} from '@/lib/utils'
import {fonts} from '@/fonts'

const attractions: Attraction[] = [
	{
		id: 'octoblast',
		title: 'Octoblast',
		shortDescription: 'For ocean lovers who’d dive into anything. Bounce like a jellyfish and get soaked in our all-day foam party.',
		fullDescription:
			'A purple octopus fantasyland with tangled tentacles, water splashes, and climb zones. Great for families & playful adults. In Bali, set near the sea breeze. Octo wants you to jump.',
		image: '/img/octoblast.webp',
		features: [
			'Vibrant Fantasyland',
			'Interactive Play Zones',
			'Tangled Tentacles',
			'Water Splash Fun',
			'Ideal for Families & Playful Adults',
			'Bali Breeze Setting'
		],
		ageRange: '6+ years (recommended for active participants)',
		capacity: 'Up to 100 people per session',
		duration: 'Multiple runs encouraged during session',
		safetyNotes: [
			'Recommended for ages 6 and above',
			'Good physical condition required',
			'No pushing or rough play allowed',
			'Wait for clear path before starting'
		]
	},
	{
		id: 'bounce-house',
		title: 'The World’s Biggest Bounce House',
		shortDescription: 'Where the music hits and the floor moves with you. Live DJs, confetti storms, and sunset silent bounce sessions',
		fullDescription:
			'The heart of the experience – the world’s largest inflatable. Endless jumps, ball pits, confetti blasts, and live DJ sets. In Bali, this turns into a vibrant bounce-temple with island lights & sounds. It’s chaos – the fun kind.',
		image: '/img/the-worlds-biggest-bounce-house.webp',
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
		]
	},
	{
		id: 'the-giant',
		title: 'The Giant',
		shortDescription: 'Try surviving 300 meters of inflatable madness. it’s fun until it humbles you.',
		fullDescription:
			'A 300m+ inflatable obstacle race packed with slides, towers, and tunnels. Compete with friends, beat the clock, or just survive the bounce. Are you ready for The Giant Challenge?',
		image: '/img/the-giant.webp',
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
		]
	},
	{
		id: 'airspace-pink',
		title: 'Airspace Pink',
		shortDescription: 'For grown-ups who still secretly love ball pits. Glowing, surreal, and strangely satisfying.',
		fullDescription:
			'A cosmic bounce chamber glowing at night – complete with inflatable creatures, soft mazes, and neon bounce. After dark, it glows like another planet. Alien-approved fun.',
		image: '/img/airspace-pink-air.webp',
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
		]
	},
	{
		id: 'sport-slam',
		title: 'Sport Slam',
		shortDescription: 'For the ones who never skip leg day,  even at a festival. Bounce, battle, and brag with your crew in this inflatable arena.',
		fullDescription:
			'Bounce-based sports arena for slam dunks, dodgeball, and relay races. In Bali, expect sunset beach tournaments. Where bounce meets beach sports.',
		image: '/img/sport-slam.webp',
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
		]
	}
]

const Keys = ['octoblast', 'bounce-house', 'the-giant', 'airspace-pink', 'sport-slam']

const images: {
	[key in typeof Keys[number]]: string[]
} = {
	octoblast: new Array(9).fill(0).map((_, i) => `/img/attractions/octoblast/${i + 1}.webp`),
	'bounce-house': new Array(11).fill(0).map((_, i) => `/img/attractions/bounce-house/${i + 1}.webp`),
	'the-giant': new Array(6).fill(0).map((_, i) => `/img/attractions/the-giant/${i + 1}.webp`),
	'airspace-pink': new Array(5).fill(0).map((_, i) => `/img/attractions/airspace-pink/${i + 1}.webp`),
	'sport-slam': new Array(7).fill(0).map((_, i) => `/img/attractions/sport-slam/${i + 1}.webp`)
}

export const AttractionSection = () => {
	return (
		<section
			id="attractions"
			className="w-full py-12 md:py-24 lg:py-32"
		>
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<h3 className={cn('text-7xl font-bold text-orange-500 tracking-wider', fonts.beachday.className)}>
						The Big Bounce
					</h3>
					<p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Experience multiple massive inflatable attractions designed for maximum fun and
						excitement. Click on
						each attraction to learn more!
					</p>
				</div>
				<div className="mx-auto grid items-center gap-6 py-12 lg:grid-cols-5">
					{attractions.map((attraction) => (
						<Dialog key={attraction.id}>
							<DialogTrigger asChild>
								<Card
									data-type={attraction.id}
									className={cn(
										`border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg h-[350px]`,
										`data-[type=octoblast]:border-green-800/20 data-[type=octoblast]:hover:border-green-800`,
										`data-[type=bounce-house]:border-red-500/20 data-[type=bounce-house]hover::border-red-500`,
										`data-[type=the-giant]:border-orange-500/20 data-[type=the-giant]:hover:border-orange-500`,
										`data-[type=airspace-pink]:border-pink-500/20 data-[type=airspace-pink]:hover:border-pink-500`,
										`data-[type=sport-slam]:border-purple-500/20 data-[type=sport-slam]:hover:border-purple-500`
									)}
								>
									<div className="px-6 flex flex-col h-full">
										<Image
											src={attraction.image || '/img/300x300.png'}
											width="300"
											height="300"
											alt={attraction.title}
											className="rounded-lg object-contain w-full aspect-[1.4/1]"
										/>
										<div className="flex-1">
											<CardTitle
												data-type={attraction.id}
												className={cn(
													'mt-4 text-center',
													`data-[type=octoblast]:text-green-800`,
													`data-[type=bounce-house]:text-red-500`,
													`data-[type=the-giant]:text-orange-500`,
													`data-[type=airspace-pink]:text-pink-500`,
													`data-[type=sport-slam]:text-purple-500`
												)}
											>
												{attraction.title}
											</CardTitle>
											<CardDescription
												className="mt-2">{attraction.shortDescription}</CardDescription>
										</div>
									</div>
								</Card>
							</DialogTrigger>
							<DialogContent className="max-h-[90vh] overflow-y-auto">
								<DialogHeader>
									<DialogTitle
										data-type={attraction.id}
										className={cn(
											`text-2xl mb-4`,
											`data-[type=octoblast]:text-green-800`,
											`data-[type=bounce-house]:text-red-500`,
											`data-[type=the-giant]:text-orange-500`,
											`data-[type=airspace-pink]:text-pink-500`,
											`data-[type=sport-slam]:text-purple-500`
										)}
									>
										{attraction.title}
									</DialogTitle>
								</DialogHeader>
								
								<div className="grid w-full gap-4">
									{images[attraction.id].map((image, i) => (
										<div key={i} className="relative w-full aspect-square rounded overflow-hidden">
											<Image src={image} alt={attraction.title}
												   className="rounded-lg object-cover" fill/>
										</div>
									))}
								
								</div>
								
								{/* CTA Button */}
								<div className="mt-6 flex justify-center">
									<Button
										size="lg"
										data-type={attraction.id}
										className={cn(
											`bg-gradient-to-r text-white px-8 py-3 cursor-pointer`,
											`data-[type=octoblast]:from-green-800 data-[type=octoblast]:to-green-900 data-[type=octoblast]:hover:from-green-900 data-[type=octoblast]:hover:to-green-950`,
											`data-[type=bounce-house]:from-red-500 data-[type=bounce-house]:to-red-600 data-[type=bounce-house]:hover:from-red-600 data-[type=bounce-house]:hover:to-red-700`,
											`data-[type=the-giant]:from-orange-500 data-[type=the-giant]:to-orange-600 data-[type=the-giant]:hover:from-orange-600 data-[type=the-giant]:hover:to-orange-700`,
											`data-[type=airspace-pink]:from-pink-500 data-[type=airspace-pink]:to-pink-600 data-[type=airspace-pink]:hover:from-pink-600 data-[type=airspace-pink]:hover:to-pink-700`,
											`data-[type=sport-slam]:from-purple-500 data-[type=sport-slam]:to-purple-600 data-[type=sport-slam]:hover:from-purple-600 data-[type=sport-slam]:hover:to-purple-700`
										)}
									>
										Get Ticket Now
									</Button>
								</div>
							</DialogContent>
						</Dialog>
					))}
				</div>
			</div>
		</section>
	)
}