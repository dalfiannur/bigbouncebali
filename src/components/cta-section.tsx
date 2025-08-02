import {Button} from '@/components/ui/button'

export const CTASection = () => {
	return (
		<section
			className="w-full py-14 md:py-12 bg-white/20 flex justify-center">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center text-black">
					<div>
						<h5 className="text-xl font-bold">Venue:</h5>
						<p>Peninsula Island, Nusa Dua – Bali</p>
					</div>
					
					<div>
						<h5 className="text-xl font-bold">Opening Hours:</h5>
						<div>
							<p>Monday – Thursday: 2 PM – 10 PM</p>
							<p>Friday – Sunday: 10 AM – 10 PM</p>
						</div>
					</div>
					
					<div className="mt-12">
						<h4 className="text-xl font-bold">Getting to Island.</h4>
						<h5 className="text-xl font-bold">We’re setting up convenient pick-up points across Bali:</h5>
						<div className="mt-4 flex gap-24">
							<div>
								<div className="font-bold">Cangu</div>
								<div>Coming Soon</div>
							</div>
							<div>
								<div className="font-bold">Seminyak</div>
								<div>Coming Soon</div>
							</div>
							<div>
								<div className="font-bold">Kuta/Legian</div>
								<div>Coming Soon</div>
							</div>
							<div>
								<div className="font-bold">Denpasar</div>
								<div>Coming Soon</div>
							</div>
							<div>
								<div className="font-bold">Sanur</div>
								<div>Coming Soon</div>
							</div>
							<div>
								<div className="font-bold">Uluwatu</div>
								<div>Coming Soon</div>
							</div>
						</div>
					</div>
					<div className="mt-12 text-center">
						<div>Ride with Gojek</div>
						<div>Use promocode <span className="text-green-800 font-bold">GOBOUNCE</span></div>
					</div>
					<div className="mt-2 flex flex-col sm:flex-row gap-4">
						<Button size="lg"
								className="bg-gradient-to-l from-orange-600 to-orange-400 font-bold px-8 py-4 text-lg">
							Book Tickets Now
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}