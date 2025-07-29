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
		shortDescription: 'Dive into an undersea party with ocean critters, special FX, and dance by the giant octopus and pufferfish stage!',
		fullDescription:
			'DIVE INTO A DEEP SEA PARTY! Dive into a deep sea adventure unlike any other. Bounce your way into octoblast and come face to face with colorful ocean characters and special fx! You’ll meet deep-sea critters and dance around our giant octopus’s tentacles in front of the huge pufferfish stage. Be sure to bring your best moves for this underwater bash!',
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
		id: 'bounce-house',
		title: 'The World’s Biggest Bounce House',
		shortDescription: 'The world’s largest bounce house with slides, ball pits, DJ, games & colorful characters for all ages!',
		fullDescription:
			'Covering an area of over 16,000 square feet and standing 32 feet tall at its highest point, this inflatable goliath is the world’s largest bounce house. Inside you’ll find giant slides, ball pits, climbing towers, and basketball hoops beside fun, friendly, oversized characters of various colors, shapes, and sizes for those all-important instagram moments. At the center of this dreamland is a custom-built stage where the resident dj really turns up the party by playing music tailored to each age group while hosting games and competitions.',
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
		id: 'the-giant',
		title: 'The Giant',
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
		id: 'airspace-pink-air',
		title: 'Airspace Pink Air',
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
		id: 'sport-slam',
		title: 'Sport Slam',
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
	
	return (
		<div className="flex flex-col min-h-screen bg-[url(/img/tickets-background.jpg)] bg-cover bg-no-repeat bg-fixed">
			<main className="flex-1">
				<HeroSection/>
				<TicketSection/>
				<AttractionSection items={attractions}/>
				<AboutSection items={aboutSlides}/>
				<CTASection/>
			</main>
			<Footer/>
			<FloatingCTA/>
			<FloatingCTAMobile/>
		</div>
	)
}
