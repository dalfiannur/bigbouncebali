import {Card, CardContent} from '@/components/ui/card'
import Link from 'next/link'

const rules = {
	en: [
		'Do not jump off high areas inside the inflatable. Please use the stairs or slides provided.',
		'No somersaults, backflips, or other dangerous moves allowed.',
		'Do not jump into the ball pit. Enter and exit carefully while being mindful of others inside.',
		'Always keep your head above the balls while in the ball pit.',
		'When using the slide, always go down feet first, lying on your back with arms crossed over your chest. Never slide headfirst.',
		'Only one person is allowed on each slide at a time. Sliding while holding a child or baby on your lap is not permitted.',
		'Do not use your feet to slow down while sliding. Allow your body to come to a natural stop at the bottom.',
		'While bouncing or moving inside the inflatable, keep a safe distance from other guests.',
		'Always follow the directions of the crew and staff. They’re here to help keep your playtime safe and fun!'
	]
}

export default function SafetyPage() {
	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
			<main className="flex-1 container px-4 md:px-6 py-8">
				<div className="max-w-4xl mx-auto">
					<div className="mb-8">
						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
							Safety Guidelines
						</h1>
						<p>Keselamatan adalah prioritas! Harap tetap waspada dan saling jaga dengan sesama bouncer di
							sekitarmu. Ikuti aturan ini supaya semua bisa bounce dengan aman dan happy:</p>
					</div>
					
					<div className="space-y-6">
						<Card>
							<CardContent className="space-y-4">
								<ol className="list-decimal list-outside space-y-2 text-gray-700 ml-4">
									{rules.en.map((rule, index) => (
										<li key={index}>{rule}</li>
									))}
								</ol>
							</CardContent>
						</Card>
					</div>
				</div>
			</main>
			
			{/* Footer */}
			<footer
				className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
				<p className="text-xs text-gray-500">© {new Date().getFullYear()} <Link href="/">The Big Bounce Bali</Link>. All rights reserved.</p>
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
					<Link href="/general-information" className="text-xs hover:underline underline-offset-4 text-gray-500">
						General Information
					</Link>
				</nav>
			</footer>
		</div>
	)
}
