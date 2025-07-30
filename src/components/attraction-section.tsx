import {Attraction} from '@/types/attraction'
import {Badge} from '@/components/ui/badge'
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog'
import {Card, CardDescription, CardTitle} from './ui/card'
import Image from 'next/image'
import {Button} from './ui/button'
import {AlertCircle, Timer} from 'lucide-react'
import {cn} from '@/lib/utils'
import {fonts} from '@/fonts'

export const AttractionSection = ({items}: { items: Attraction[] }) => {
	return (
		<section
			id="attractions"
			className="w-full py-12 md:py-24 lg:py-32"
		>
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<Badge className="bg-pink-100 text-pink-700">Attractions</Badge>
					<h2 className={cn('text-7xl font-bold tracking-wider', fonts.beachday.className)}>
						The Big Bounce
					</h2>
					<p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Experience multiple massive inflatable attractions designed for maximum fun and
						excitement. Click on
						each attraction to learn more!
					</p>
				</div>
				<div className="mx-auto grid items-center gap-6 py-12 lg:grid-cols-5">
					{items.map((attraction) => (
						<Dialog key={attraction.id}>
							<DialogTrigger asChild>
								<Card
									className={cn(`border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg h-[350px]`, `border-${attraction.color}-200`, `hover:border-${attraction.color}-400`)}
								>
									<div className="px-6 flex flex-col h-full">
										<Image
											src={attraction.image || '/img/300x300.png'}
											width="300"
											height="300"
											alt={attraction.title}
											className="rounded-lg object-contain w-full aspect-[1.4/1]"
										/>
										<div className="flex-1">
											<CardTitle
												className={cn(`text-${attraction.color}-600 mt-4 text-center`)}>{attraction.title}</CardTitle>
											<CardDescription className="mt-2">{attraction.shortDescription}</CardDescription>
										</div>
									</div>
								</Card>
							</DialogTrigger>
							<DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
								<DialogHeader>
									<DialogTitle
										className={`text-2xl font-bold text-${attraction.color}-600 mb-4`}>
										{attraction.title}
									</DialogTitle>
								</DialogHeader>
								
								<div className="flex flex-col gap-6">
									{/* Details Section */}
									<div className="space-y-6">
										{/* Description */}
										<div>
											<h3 className="text-lg font-semibold mb-2">About This
												Attraction</h3>
											<p className="text-gray-700 leading-relaxed">{attraction.fullDescription}</p>
										</div>
										
										{/* Features */}
										<div>
											<h3 className="text-lg font-semibold mb-3">Features &
												Highlights</h3>
											<div className="grid gap-2">
												{attraction.features.map((feature, index) => (
													<div key={index} className="flex items-start space-x-2">
                                <span
									className={`w-2 h-2 bg-${attraction.color}-500 rounded-full mt-2 flex-shrink-0`}
								></span>
														<span className="text-sm text-gray-700">{feature}</span>
													</div>
												))}
											</div>
										</div>
										
										{/* Duration */}
										<div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
											<Timer className="h-5 w-5 text-blue-500"/>
											<div>
												<p className="text-sm font-medium text-blue-700">Duration</p>
												<p className="text-sm text-blue-600">{attraction.duration}</p>
											</div>
										</div>
									</div>
								</div>
								
								{/* Safety Information */}
								<div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
									<div className="flex items-start space-x-2">
										<AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0"/>
										<div className="flex-1">
											<h4 className="font-semibold text-yellow-800 mb-2">Safety
												Guidelines</h4>
											<div className="grid gap-1">
												{attraction.safetyNotes.map((note, index) => (
													<p key={index} className="text-sm text-yellow-700">
														• {note}
													</p>
												))}
											</div>
										</div>
									</div>
								</div>
								
								{/* CTA Button */}
								<div className="mt-6 flex justify-center">
									<Button
										size="lg"
										className={`bg-gradient-to-r from-${attraction.color}-500 to-pink-500 hover:from-${attraction.color}-600 hover:to-pink-600 text-white px-8 py-3`}
									>
										Get Ticket Now
									</Button>
								</div>
							</DialogContent>
						</Dialog>
					))}
				</div>
			</div>
		</section>
	)
}