import {Attraction} from '@/types/attraction'
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
					<h3 className={cn('text-7xl font-bold text-orange-500 tracking-wider', fonts.beachday.className)}>
						The Big Bounce
					</h3>
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
									data-type={attraction.id}
									className={cn(
										`border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg h-[350px]`,
										`data-[type=octoblast]:border-green-800/20 data-[type=octoblast]:hover:border-green-800`,
										`data-[type=bounce-house]:border-red-500/20 data-[type=bounce-house]hover::border-red-500`,
										`data-[type=the-giant]:border-orange-500/20 data-[type=the-giant]:hover:border-orange-500`,
										`data-[type=airspace-pink]:border-pink-500/20 data-[type=airspace-pink]:hover:border-pink-500`,
										`data-[type=sport-slam]:border-purple-500/20 data-[type=sport-slam]:hover:border-purple-500`
									)}
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
												data-type={attraction.id}
												className={cn(
													'mt-4 text-center',
													`data-[type=octoblast]:text-green-800`,
													`data-[type=bounce-house]:text-red-500`,
													`data-[type=the-giant]:text-orange-500`,
													`data-[type=airspace-pink]:text-pink-500`,
													`data-[type=sport-slam]:text-purple-500`
												)}
											>
												{attraction.title}
											</CardTitle>
											<CardDescription
												className="mt-2">{attraction.shortDescription}</CardDescription>
										</div>
									</div>
								</Card>
							</DialogTrigger>
							<DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
								<DialogHeader>
									<DialogTitle
										data-type={attraction.id}
										className={cn(
											`text-2xl mb-4`,
											`data-[type=octoblast]:text-green-800`,
											`data-[type=bounce-house]:text-red-500`,
											`data-[type=the-giant]:text-orange-500`,
											`data-[type=airspace-pink]:text-pink-500`,
											`data-[type=sport-slam]:text-purple-500`
										)}
									>
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
															data-type={attraction.id}
															className={cn(
																`w-2 h-2 rounded-full mt-2 flex-shrink-0`,
																`data-[type=octoblast]:bg-green-800`,
																`data-[type=bounce-house]:bg-red-500`,
																`data-[type=the-giant]:bg-orange-500`,
																`data-[type=airspace-pink]:bg-pink-500`,
																`data-[type=sport-slam]:bg-purple-500`
															)}
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
										data-type={attraction.id}
										className={cn(
											`bg-gradient-to-r text-white px-8 py-3 cursor-pointer`,
											`data-[type=octoblast]:from-green-800 data-[type=octoblast]:to-green-900 data-[type=octoblast]:hover:from-green-900 data-[type=octoblast]:hover:to-green-950`,
											`data-[type=bounce-house]:from-red-500 data-[type=bounce-house]:to-red-600 data-[type=bounce-house]:hover:from-red-600 data-[type=bounce-house]:hover:to-red-700`,
											`data-[type=the-giant]:from-orange-500 data-[type=the-giant]:to-orange-600 data-[type=the-giant]:hover:from-orange-600 data-[type=the-giant]:hover:to-orange-700`,
											`data-[type=airspace-pink]:from-pink-500 data-[type=airspace-pink]:to-pink-600 data-[type=airspace-pink]:hover:from-pink-600 data-[type=airspace-pink]:hover:to-pink-700`,
											`data-[type=sport-slam]:from-purple-500 data-[type=sport-slam]:to-purple-600 data-[type=sport-slam]:hover:from-purple-600 data-[type=sport-slam]:hover:to-purple-700`
										)}
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