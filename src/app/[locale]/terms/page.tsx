import {Button} from '@/components/ui/button'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {ArrowLeft} from 'lucide-react'
import Link from 'next/link'

export default function TermsOfService() {
	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
			{/* Header */}
			<header
				className="px-4 lg:px-6 h-16 flex items-center bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
				<Link href="/public" className="flex items-center justify-center">
					<div
						className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
						<span className="text-white font-bold text-sm">BB</span>
					</div>
					<span
						className="ml-2 text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            The Big Bounce Bali
          </span>
				</Link>
				<Link href="/public" className="ml-auto">
					<Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
						<ArrowLeft className="h-4 w-4"/>
						Back to Home
					</Button>
				</Link>
			</header>
			
			<main className="flex-1 container px-4 md:px-6 py-8">
				<div className="max-w-4xl mx-auto">
					<div className="mb-8">
						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
							Terms of Service
						</h1>
						<p className="text-gray-600 text-lg">Last updated: March 1, 2024</p>
					</div>
					
					<div className="space-y-6">
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
		</div>
	)
}
