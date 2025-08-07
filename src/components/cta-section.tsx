import {Ticket} from 'lucide-react'

export const CTASection = () => {
	return (
		<section className="text-black py-12 px-6 text-center w-full bg-[url(/img/bg-bottom.webp)] bg-cover bg-bottom">
			<div className="container mx-auto space-y-12">
				<div>
					<h2 className="text-xl font-semibold">📍 Venue:</h2>
					<p className="text-lg font-medium">Peninsula Island, Nusa Dua – Bali</p>
					
					<h2 className="mt-6 text-xl font-semibold">🕒 Opening Hours:</h2>
					<p className="text-lg font-medium">Monday – Thursday: 2 PM – 10 PM</p>
					<p className="text-lg font-medium">Friday – Sunday: 10 AM – 10 PM</p>
				</div>
				
				<div>
					<h2 className="text-xl font-semibold">🚐 Getting to the Island:</h2>
					<p className="text-lg">We’re setting up convenient pick-up points across Bali:</p>
					
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6 font-medium">
						<div className="flex flex-col items-center">
							<span>Canggu</span>
							<span className="text-sm">Coming Soon</span>
						</div>
						<div className="flex flex-col items-center">
							<span>Seminyak</span>
							<span className="text-sm">Coming Soon</span>
						</div>
						<div className="flex flex-col items-center">
							<span>Kuta/Legian</span>
							<span className="text-sm">Coming Soon</span>
						</div>
						<div className="flex flex-col items-center">
							<span>Denpasar</span>
							<span className="text-sm">Coming Soon</span>
						</div>
						<div className="flex flex-col items-center">
							<span>Sanur</span>
							<span className="text-sm">Coming Soon</span>
						</div>
						<div className="flex flex-col items-center">
							<span>Uluwatu</span>
							<span className="text-sm">Coming Soon</span>
						</div>
					</div>
				</div>
				
				<div className="space-y-4 flex flex-col items-center">
					{/*<p className="text-lg font-bold">🛵 Ride with Gojek</p>*/}
					{/*<p className="text-lg w-fit px-4 py-2">Use promo code <span*/}
					{/*	className="bg-white text-green-600 font-black rounded-xl px-3 py-1">GOBOUNCE</span>*/}
					{/*</p>*/}
					
					<a href="https://happykamper.onelink.me/xqgb/4084is7n"
					   target="_blank"
					   className="border  flex justify-center items-center gap-5 border-orange-600/20 bg-gradient-to-l from-orange-500 to-orange-400 hover:bg-gradient-to-r  text-white font-bold py-3 px-6 rounded-xl text-lg">
						<Ticket/> <span>Buy Tickets Now</span>
					</a>
				</div>
			</div>
		</section>
	)
}