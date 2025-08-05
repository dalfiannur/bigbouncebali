import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import Link from 'next/link'

const data = {
	en: [
		{
			title: 'IMPORTANT INFORMATION ABOUT THE TICKET',
			items: [
				'All visitors must have their own ticket on hand to be able to enjoy the attraction, this includes adults or guardians of the children',
				'Ticket prices are the same for all ages.',
				'Infants under 2 year old may enter the event area free of charge when accompanied by a ticketed adult. However, they are not permitted to enter the bounce house or The Giant area. For safety and enjoyment, we recommend a minimum age of 3 years for children to participate in the activities.'
			]
		},
		{
			title: 'GUARDIANSHIP RULES',
			items: [
				'All children 2-10 must be accompanied by a guardian aged 18 or above. Tickets are required for both child and guardian.',
				'Kids who are over the aged 10 are allowed to enjoy the attraction without a guardian.',
				'Adults or ither children\'s guardians should be between 18 and 55 years old. Seniors over 55 are welcome to join but can only stay in the festival area — they can\'t go into the bounce zone.'
			]
		},
		{
			title: 'DURATION &ATTRACTION ACCESS',
			items: [
				'Each ticket grants single-day, full-day, unlimited access.',
				'Every ticket includes access to all bounce attractions'
			]
		},
		{
			title: 'SOCKS ARE MANDATORY',
			items: [
				'For Safety reasons, It is suggested for all visitors o wear an Anti-Slip Socks when entering the bounce area',
				'All visitors must wear socks to enter the bounce area. Grip socks are strongly recommended for added safety, though regular socks are also permitted. You may bring your own socks or purchase grip socks at the venue, subject to availability.'
			]
		},
		{
			title: 'SAFETY RULES',
			items: [
				'For safety reasons, all visitors must meet the following requirements:<br/>' +
				'Weight limit: Maximum 111 kg<br />' +
				'Height limit: Maximum 193 cm<br />' +
				'Exception for The Giant area: Maximum 216 cm<br />' +
				'Minimum height for the obstacle course: 90 cm<br />' +
				'A height measurement tool is available at the venue to ensure participants meet the minimum requirement before playing.'
			]
		}
	]
}

export default function FAQsPage() {
	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
			<main className="flex-1 container px-4 md:px-6 py-8">
				<div className="max-w-4xl mx-auto">
					<div className="mb-8">
						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
							General Information
						</h1>
					</div>
					
					<div className="space-y-6">
						{
							data.en.map((item) => (
								<Card key={item.title}>
									<CardHeader>
										<CardTitle>{item.title}</CardTitle>
									</CardHeader>
									<CardContent className="space-y-4">
										<ul className="list-disc list-outside space-y-2 text-gray-700 ml-4">
											{item.items.map((li, index) => (
												<li key={index} dangerouslySetInnerHTML={{__html: li}}/>
											))}
										</ul>
									</CardContent>
								</Card>
							))
						}
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
