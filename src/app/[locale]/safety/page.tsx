import {Button} from '@/components/ui/button'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Badge} from '@/components/ui/badge'
import {AlertTriangle, ArrowLeft, Heart, Shield, Users} from 'lucide-react'
import Link from 'next/link'

export default function SafetyGuidelines() {
	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
			<main className="flex-1 container px-4 md:px-6 py-8">
				<div className="max-w-4xl mx-auto">
					<div className="mb-8">
						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
							Safety Guidelines
						</h1>
						<p className="text-gray-600 text-lg">
							Your safety is our top priority. Please read and follow these guidelines for a fun and safe
							experience.
						</p>
					</div>
					
					{/* Important Safety Alert */}
					<Card className="border-red-200 bg-red-50 mb-6">
						<CardHeader>
							<CardTitle className="flex items-center text-red-700">
								<AlertTriangle className="h-5 w-5 mr-2"/>
								Important Safety Notice
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-red-700 font-medium">
								All participants must sign a waiver before entering the attractions. Parents or
								guardians must sign for
								children under 18. Failure to follow safety rules may result in removal from the event.
							</p>
						</CardContent>
					</Card>
					
					<div className="space-y-6">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center">
									<Users className="h-5 w-5 mr-2 text-blue-500"/>
									Age and Supervision Requirements
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="grid gap-4 md:grid-cols-2">
									<div className="space-y-2">
										<Badge className="bg-orange-100 text-orange-700">Ages 3-7</Badge>
										<p className="text-gray-700 text-sm">
											Must be accompanied by an adult at all times. Maximum 1 adult per 2 children
											on attractions.
										</p>
									</div>
									<div className="space-y-2">
										<Badge className="bg-blue-100 text-blue-700">Ages 8-15</Badge>
										<p className="text-gray-700 text-sm">
											Adult supervision required in the venue. May participate independently on
											age-appropriate
											attractions.
										</p>
									</div>
									<div className="space-y-2">
										<Badge className="bg-green-100 text-green-700">Ages 16+</Badge>
										<p className="text-gray-700 text-sm">
											May participate independently. Must sign own waiver and follow all safety
											guidelines.
										</p>
									</div>
									<div className="space-y-2">
										<Badge className="bg-red-100 text-red-700">Under 3</Badge>
										<p className="text-gray-700 text-sm">
											Not permitted on any attractions for safety reasons. May observe from
											designated areas only.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
						
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center">
									<Heart className="h-5 w-5 mr-2 text-red-500"/>
									Health and Medical Restrictions
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700 font-medium">The following conditions may prevent safe
									participation:</p>
								<div className="grid gap-4 md:grid-cols-2">
									<ul className="space-y-2 text-gray-700">
										<li className="flex items-start">
											<span
												className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
											Pregnancy
										</li>
										<li className="flex items-start">
											<span
												className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
											Heart conditions or high blood pressure
										</li>
										<li className="flex items-start">
											<span
												className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
											Back, neck, or spinal injuries
										</li>
										<li className="flex items-start">
											<span
												className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
											Recent surgeries or injuries
										</li>
									</ul>
									<ul className="space-y-2 text-gray-700">
										<li className="flex items-start">
											<span
												className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
											Broken bones or casts
										</li>
										<li className="flex items-start">
											<span
												className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
											Seizure disorders
										</li>
										<li className="flex items-start">
											<span
												className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
											Under the influence of alcohol or drugs
										</li>
										<li className="flex items-start">
											<span
												className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
											Any condition affecting balance or mobility
										</li>
									</ul>
								</div>
								<p className="text-gray-600 text-sm italic">
									If you have any medical concerns, please consult your doctor before participating.
								</p>
							</CardContent>
						</Card>
						
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center">
									<Shield className="h-5 w-5 mr-2 text-green-500"/>
									General Safety Rules
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="grid gap-6 md:grid-cols-2">
									<div>
										<h4 className="font-semibold text-green-700 mb-2">DO:</h4>
										<ul className="space-y-2 text-gray-700">
											<li className="flex items-start">
												<span
													className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
												Follow all staff instructions immediately
											</li>
											<li className="flex items-start">
												<span
													className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
												Remove shoes, jewelry, and sharp objects
											</li>
											<li className="flex items-start">
												<span
													className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
												Wait for your turn and enter one at a time
											</li>
											<li className="flex items-start">
												<span
													className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
												Keep hands and feet to yourself
											</li>
											<li className="flex items-start">
												<span
													className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
												Exit immediately when asked
											</li>
										</ul>
									</div>
									<div>
										<h4 className="font-semibold text-red-700 mb-2">DONT:</h4>
										<ul className="space-y-2 text-gray-700">
											<li className="flex items-start">
												<span
													className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
												Bring food, drinks, or gum onto attractions
											</li>
											<li className="flex items-start">
												<span
													className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
												Climb on walls or barriers
											</li>
											<li className="flex items-start">
												<span
													className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
												Push, shove, or engage in rough play
											</li>
											<li className="flex items-start">
												<span
													className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
												Attempt dangerous stunts or flips
											</li>
											<li className="flex items-start">
												<span
													className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
												Use attractions if feeling unwell
											</li>
										</ul>
									</div>
								</div>
							</CardContent>
						</Card>
						
						<Card>
							<CardHeader>
								<CardTitle>Prohibited Items</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700">The following items are not permitted in the attraction
									areas:</p>
								<div className="grid gap-4 md:grid-cols-3">
									<ul className="space-y-2 text-gray-700">
										<li>• Shoes and socks</li>
										<li>• Jewelry and watches</li>
										<li>• Glasses (unless secured)</li>
										<li>• Hair accessories</li>
									</ul>
									<ul className="space-y-2 text-gray-700">
										<li>• Food and beverages</li>
										<li>• Gum and candy</li>
										<li>• Sharp objects</li>
										<li>• Personal inflatables</li>
									</ul>
									<ul className="space-y-2 text-gray-700">
										<li>• Cameras and phones</li>
										<li>• Bags and purses</li>
										<li>• Toys and balls</li>
										<li>• Any loose items</li>
									</ul>
								</div>
								<p className="text-gray-600 text-sm">Secure storage areas are provided for personal
									belongings.</p>
							</CardContent>
						</Card>
						
						<Card>
							<CardHeader>
								<CardTitle>Weather and Emergency Procedures</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700">
									<strong>Weather Policy:</strong> Events may be suspended or cancelled due to high
									winds, rain, or
									lightning. Safety announcements will be made, and participants must evacuate
									immediately when
									instructed.
								</p>
								<p className="text-gray-700">
									<strong>Emergency Procedures:</strong> In case of injury or emergency, remain calm
									and notify staff
									immediately. Do not move injured persons unless directed by trained personnel.
								</p>
								<p className="text-gray-700">
									<strong>First Aid:</strong> Trained first aid personnel are on-site during all
									operating hours.
									Emergency services are on standby for serious incidents.
								</p>
							</CardContent>
						</Card>
						
						<Card>
							<CardHeader>
								<CardTitle>Contact for Safety Concerns</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-700">If you have safety concerns or questions, please contact
									us:</p>
								<p className="text-gray-700">
									<strong>During Event:</strong> Speak to any staff member immediately
									<br/>
									<strong>Before Event:</strong> safety@bigbouncebali.com
									<br/>
									<strong>Emergency:</strong> Call local emergency services (112)
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
