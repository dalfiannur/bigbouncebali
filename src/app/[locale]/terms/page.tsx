import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import Link from 'next/link'
import {ArrowBigLeft} from 'lucide-react'

export default function TermsOfService() {
	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
			<main className="flex-1 container px-4 md:px-6 py-8">
				<div className="max-w-4xl mx-auto">
					<div className="flex items-center justify-between">
						<Link href="/"
							  className="bg-red-500 w-10 h-10 flex items-center justify-center rounded-xl text-white">
							<ArrowBigLeft size={24}/>
						</Link>
						<h1
							className="flex-1 text-center text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
							Terms of Service
						</h1>
					</div>
					
					<div className="space-y-6 mt-8">
						<Card>
							<CardHeader>
								<CardTitle>1. Acceptance of Terms</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700">
									By purchasing tickets or attending The Big Bounce Bali event, you agree to be bound
									by these Terms of
									Service. If you do not agree to these terms, please do not attend the event.
								</p>
							</CardContent>
						</Card>
						
						<Card>
							<CardHeader>
								<CardTitle>2. Event Participation</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700">
									<strong>Age Requirements:</strong> Children under 3 years old are not permitted on
									the attractions.
									Children aged 3-15 must be accompanied by a parent or guardian at all times.
								</p>
								<p className="text-gray-700">
									<strong>Health Requirements:</strong> Participants must be in good physical health.
									Those with heart
									conditions, back problems, pregnancy, or other medical conditions should not
									participate.
								</p>
								<p className="text-gray-700">
									<strong>Capacity Limits:</strong> Each session has a maximum capacity. Entry is
									subject to
									availability and may be restricted during peak times.
								</p>
							</CardContent>
						</Card>
						
						<Card>
							<CardHeader>
								<CardTitle>3. Ticket Policy</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700">
									<strong>Refunds:</strong> Tickets are non-refundable except in cases of event
									cancellation due to
									weather or unforeseen circumstances.
								</p>
								<p className="text-gray-700">
									<strong>Transfers:</strong> Tickets may be transferred to another person up to 24
									hours before the
									event. Contact our support team for assistance.
								</p>
								<p className="text-gray-700">
									<strong>Lost Tickets:</strong> Digital tickets must be presented on mobile devices.
									Screenshots or
									printed copies will not be accepted.
								</p>
							</CardContent>
						</Card>
						
						<Card>
							<CardHeader>
								<CardTitle>4. Liability and Risk</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700">
									Participation in The Big Bounce Bali activities involves inherent risks. By
									attending, you acknowledge
									and assume all risks associated with the activities and agree to hold harmless The
									Big Bounce Bali,
									its organizers, and venue from any claims or damages.
								</p>
								<p className="text-gray-700">
									All participants must sign a waiver before entering the attractions. Parents or
									guardians must sign
									waivers for minors.
								</p>
							</CardContent>
						</Card>
						
						<Card>
							<CardHeader>
								<CardTitle>5. Conduct and Safety</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700">
									Participants must follow all safety instructions and rules. Failure to comply may
									result in removal
									from the event without refund. Prohibited items include sharp objects, food, drinks,
									and personal
									inflatable devices.
								</p>
								<p className="text-gray-700">
									The Big Bounce Bali reserves the right to refuse entry or remove any participant who
									poses a safety
									risk or disrupts the event.
								</p>
							</CardContent>
						</Card>
						
						<Card>
							<CardHeader>
								<CardTitle>6. Photography and Media</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700">
									By attending the event, you consent to being photographed or filmed for promotional
									purposes. The Big
									Bounce Bali may use these images in marketing materials without compensation.
								</p>
							</CardContent>
						</Card>
						
						<Card>
							<CardHeader>
								<CardTitle>7. Contact Information</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700">For questions about these Terms of Service, please contact
									us at:</p>
								<p className="text-gray-700">
									Email: legal@bigbouncebali.com
									<br/>
									Phone: +62 361 123 4567
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</main>
			
			{/* Footer */}
			<footer
				className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
				<p className="text-xs text-gray-500">© {new Date().getFullYear()} <Link href="/">The Big Bounce
					Bali</Link>. All rights reserved.</p>
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
		</div>
	)
}
