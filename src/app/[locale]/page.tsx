import {routing} from '@/i18n/routing'
import {use} from 'react'
import {setRequestLocale} from 'next-intl/server'
import {Attraction} from '@/types/attraction'
import {AboutSlide} from '@/types/about-slide'
import {AboutSection} from '@/components/about-section'
import {HeroSection} from '@/components/hero-section'
import {TicketSection} from '@/components/ticket-section'
import {AttractionSection} from '@/components/attraction-section'
import {Footer} from '@/components/footer'
import {FloatingCTA, FloatingCTAMobile} from '@/components/floating-cta'
import {CTASection} from '@/components/cta-section'

export function generateStaticParams() {
	return routing.locales.map((locale) => ({locale}))
}


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

const aboutSlides: AboutSlide[] = [
	{
		id: 'a',
		badge: 'Additional Fest',
		badgeColor: 'green',
		title: 'Island Soul Garden',
		description: 'Bali’s Iconic & ridiculous (tourist) moments, turned into real-life photo spots. Strike a pose, have a laugh, and tag your friends. Bali never looked this fun',
		image: '/img/island-soul-garden.webp',
		features: []
	},
	{
		id: 'b',
		badge: 'Additional Fest',
		badgeColor: 'red',
		title: 'Island Food Market',
		description:
			'Island Food Market brings you 20 handpicked stalls serving up tropical bites, local faves, and global comfort food. Think smoothie bowls, seafood skewers, fusion snacks, and plant-based treats — all showing off Bali’s tasty side. Kick back in boho picnic spots, wander palm-lined paths, and vibe to live DJs or acoustic sets. It’s your perfect Bali Sunday, any day!',
		image: '/img/island-food-market.webp',
		features: []
	},
	{
		id: 'c',
		badge: 'Additional Fest',
		badgeColor: 'orange',
		title: 'Local Makers Market',
		description: 'Bali’s buzzing with creativity at Local Makers Market, stroll through colorful stalls, try on slow fashion and eco-friendly treasure you won’t find anywhere else. Take home a little piece of Bali’s magic!',
		image: '/img/local-makers-market.webp',
		features: []
	},
	{
		id: 'd',
		badge: 'Additional Fest',
		badgeColor: 'pink',
		title: 'Live Acoustic & DJ Sessions',
		description:
			'Ease into the day with mellow melodies under the trees.<br/>' +
			'As the sun dips, tropical house and disco grooves light up the night.<br/><br/>' +
			'From barefoot dancing to beachside chill, the vibe is always on',
		image: '/img/live-acoustic-dj-session.webp',
		features: []
	},
	{
		id: 'e',
		badge: 'Additional Fest',
		badgeColor: 'purple',
		title: 'Kite Festival',
		description: 'Every weekend at The Big Bounce Bali, giant kites take to the sky from Peninsula Island, drifting high above Nusa Dua Bay. Catch them every Saturday and Sunday at 10 AM, best views from the coastal path, bay-side hotels, or out on the water!',
		image: '/img/sky-signal.webp',
		features: []
	}
]

export default function HomePage({params}: { params: Promise<Record<string, string>> }) {
	const {locale} = use(params)
	setRequestLocale(locale)
	
	return (
		<>
			<h1 className="hidden">The Big Bounce Bali</h1>
			<h2 className="hidden">The Big Bounce Asia</h2>
			<div
				className="flex flex-col min-h-screen bg-[url(/img/tickets-background.webp)] bg-cover bg-no-repeat bg-fixed">
				<main className="flex-1">
					<HeroSection/>
					<TicketSection/>
					<AboutSection items={aboutSlides}/>
					<AttractionSection items={attractions}/>
					<CTASection/>
				</main>
				<Footer/>
				<FloatingCTA/>
				<FloatingCTAMobile/>
			</div>
		</>
	)
}
