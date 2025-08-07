import {routing} from '@/i18n/routing'
import {use} from 'react'
import {setRequestLocale} from 'next-intl/server'
import {AboutSlide} from '@/types/about-slide'
import {AboutSection} from '@/components/about-section'
import {HeroSection} from '@/components/hero-section'
import {TicketSection} from '@/components/ticket-section'
import {AdditionalFestSection} from '@/components/additional-fest-section'
import {Footer} from '@/components/footer'
import {FloatingCTA, FloatingCTAMobile} from '@/components/floating-cta'
import {CTASection} from '@/components/cta-section'
import {GallerySection} from '@/components/gallery-section'

export function generateStaticParams() {
	return routing.locales.map((locale) => ({locale}))
}

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
				className="flex flex-col min-h-screen">
				<main className="flex-1">
					<HeroSection/>
					<TicketSection/>
					<AboutSection items={aboutSlides}/>
					<AdditionalFestSection/>
					<GallerySection />
					<CTASection/>
				</main>
				<div>
					<Footer/>
					<FloatingCTA/>
					<FloatingCTAMobile/>
				</div>
			</div>
		</>
	)
}
