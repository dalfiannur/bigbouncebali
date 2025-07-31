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
		shortDescription: 'A purple octopus fantasyland with tangled tentacles, water splashes, and climb zones. In Bali, near the sea breeze. Octo wants you to jump.',
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
		shortDescription: 'The heart of the experience – the world’s largest inflatable. Endless jumps, ball pits, confetti blasts, and live DJs in Bali.',
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
		shortDescription: 'A 300m+ inflatable obstacle race with slides, towers, and tunnels. Compete, race the clock, or just survive. Ready for The Giant Challenge?',
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
		shortDescription: 'A cosmic bounce chamber glowing at night with inflatable creatures, soft mazes, and neon bounce. Alien-approved fun.',
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
		shortDescription: 'Bounce-based sports arena for slam dunks, dodgeball, and relay races. In Bali, enjoy sunset beach tournaments.',
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
		id: 'island-soul-garden',
		badge: 'Additional Fest',
		badgeColor: 'orange',
		title: 'Island Soul Garden',
		description: 'A surreal tribute to Bali’s most iconic (and ridiculous) tourist moments.',
		image: '/img/island-soul-garden.webp',
		features: [
			{
				icon: 'Star',
				title: 'The Shortcut',
				description: 'Fun for the entire family'
			},
			{
				icon: 'Star',
				title: 'The Detox Diva',
				description: 'UBUDians in Full Zen Mode'
			},
			{
				icon: 'Star',
				title: 'The Canggu Gladiator',
				description: 'Six-Pack, Selfie, Sprint'
			},
			{
				icon: 'Star',
				title: 'The Real MVP',
				description: 'Super-Gojek to the Rescue'
			}
		]
	},
	{
		id: 'island-food-market',
		badge: 'Additional Fest',
		badgeColor: 'green',
		title: 'Island Food Market',
		description:
			'A curated culinary experience for global tastes.<br/><br/>' +
			'Island Food Market will feature 20 handpicked food & drink stalls, offering a delightful mix of tropical flavors, local bites, and international comfort food.\n\nEach tenant is carefully curated to reflect Bali’s vibrant culinary scene, ranging from smoothie bowls and seafood skewers to fusion snacks and plant-based treats.<br/><br />' +
			'The entire market is designed to evoke the laid-back vibe of Bali’s Sunday markets, blending bohemian picnic setups, palm-lined walkways, and live DJ/acoustic sessions during the day.',
		image: '/img/island-food-market.webp',
		features: []
	},
	{
		id: 'local-makers-market',
		badge: 'Additional Fest',
		badgeColor: 'pink',
		title: 'Local Makers Market',
		description:
			'A vibrant space celebrating <b>Bali’s creative spirit</b>, where local artisans, indie brands, and conscious creators come together. This curated market features handcrafted goods, slow fashion, eco-friendly souvenirs, and unique art pieces that reflect the island’s soul. Perfect for visitors looking for meaningful keepsakes, stylish finds, or a chance to meet the makers behind the products.',
		image: '/img/local-makers-market.webp',
		features: [
			{
				icon: 'Star',
				title: 'Handmade jewelry & accessories'
			},
			{
				icon: 'Star',
				title: 'Natural body care & wellness products'
			},
			{
				icon: 'Star',
				title: 'Bali-inspired fashion & textiles'
			},
			{
				icon: 'Star',
				title: 'Art prints, ceramics & home décor'
			},
			{
				icon: 'Star',
				title: 'Upcycled & sustainable goods'
			}
		]
	},
	{
		id: 'live-acoustic-dj-sessions',
		badge: 'Additional Fest',
		badgeColor: 'blue',
		title: 'Live Acoustic & DJ Sessions',
		description:
			'Throughout the day, enjoy soothing acoustic performances under the shade of palm trees, perfect for a lazy picnic or a breezy afternoon chill. As the sun sets, the energy shifts with sunset DJ sessions, featuring tropical house, disco grooves, and laid-back island beats to keep the festival spirit alive into the evening.<br/><br />' +
			'Whether you\'re dancing barefoot on the grass or relaxing with a cold drink, our music lineup is designed to complement the island breeze and festival glow.',
		image: '/img/live-acoustic-dj-session.webp',
		features: []
	},
	{
		id: 'sky-signal',
		badge: 'Additional Fest',
		badgeColor: 'red',
		title: 'Sky Signal',
		description:
			'Every weekend during The Big Bounce Bali, we launch a series of giant kites from the Peninsula, floating high above Nusa Dua Bay.<br/><br />' +
			'<b>Every Saturday & Sunday – 10:00 AM</b><br/>' +
			'Launched from the open hill of Peninsula Island Best viewed from: coastal patchwalk, bay-side hotels, and boat traffic',
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
