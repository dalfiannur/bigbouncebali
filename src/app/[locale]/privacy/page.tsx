import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {ArrowBigLeft} from 'lucide-react'

export default function PrivacyPolicy() {
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
							Privacy Policy
						</h1>
					</div>
					
					<div className="space-y-6 mt-8">
						<Card>
							<CardHeader>
								<CardTitle>1. Information We Collect</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700">
									<strong>Personal Information:</strong> When you purchase tickets, we collect your name, email address,
									phone number, and payment information. For childrens tickets, we may collect the childs age and
									parent/guardian contact information.
								</p>
								<p className="text-gray-700">
									<strong>Event Information:</strong> We may collect information about your participation in activities,
									photos taken during the event, and feedback provided.
								</p>
								<p className="text-gray-700">
									<strong>Technical Information:</strong> Our website collects standard web analytics data including IP
									addresses, browser type, and pages visited.
								</p>
							</CardContent>
						</Card>
						
						<Card>
							<CardHeader>
								<CardTitle>2. How We Use Your Information</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700">We use your personal information to:</p>
								<ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
									<li>Process ticket purchases and send confirmations</li>
									<li>Communicate important event updates and safety information</li>
									<li>Provide customer support and respond to inquiries</li>
									<li>Improve our services and event experience</li>
									<li>Send promotional materials (with your consent)</li>
									<li>Comply with legal requirements and safety regulations</li>
								</ul>
							</CardContent>
						</Card>
						
						<Card>
							<CardHeader>
								<CardTitle>3. Information Sharing</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700">
									We do not sell or rent your personal information to third parties. We may share your information with:
								</p>
								<ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
									<li>Payment processors to complete transactions</li>
									<li>Event venue and security personnel for safety purposes</li>
									<li>Emergency services if required for health and safety</li>
									<li>Legal authorities when required by law</li>
									<li>Service providers who assist with event operations (under strict confidentiality agreements)</li>
								</ul>
							</CardContent>
						</Card>
						
						<Card>
							<CardHeader>
								<CardTitle>4. Data Security</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700">
									We implement appropriate security measures to protect your personal information against unauthorized
									access, alteration, disclosure, or destruction. This includes encryption of sensitive data, secure
									servers, and limited access to personal information.
								</p>
								<p className="text-gray-700">
									However, no method of transmission over the internet is 100% secure. While we strive to protect your
									information, we cannot guarantee absolute security.
								</p>
							</CardContent>
						</Card>
						
						<Card>
							<CardHeader>
								<CardTitle>5. Your Rights</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700">You have the right to:</p>
								<ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
									<li>Access and review your personal information</li>
									<li>Request corrections to inaccurate information</li>
									<li>Request deletion of your personal information (subject to legal requirements)</li>
									<li>Opt-out of promotional communications</li>
									<li>Request information about how your data is processed</li>
								</ul>
							</CardContent>
						</Card>
						
						<Card>
							<CardHeader>
								<CardTitle>6. Cookies and Tracking</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700">
									Our website uses cookies to improve your browsing experience, analyze website traffic, and remember
									your preferences. You can control cookie settings through your browser, but disabling cookies may
									affect website functionality.
								</p>
							</CardContent>
						</Card>
						
						<Card>
							<CardHeader>
								<CardTitle>7. Childrens Privacy</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700">
									We do not knowingly collect personal information from children under 13 without parental consent. If
									you believe we have collected information from a child under 13, please contact us immediately.
								</p>
							</CardContent>
						</Card>
						
						<Card>
							<CardHeader>
								<CardTitle>8. Contact Us</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700">
									If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
								</p>
								<p className="text-gray-700">
									Email: privacy@bigbouncebali.com
									<br />
									Phone: +62 361 123 4567
									<br />
									Address: Bali Convention Center, Jl. Bypass Ngurah Rai, Nusa Dua, Bali 80363
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</main>
			
			{/* Footer */}
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
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
				</nav>
			</footer>
		</div>
	)
}
