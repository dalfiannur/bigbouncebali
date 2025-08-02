export const CTASection = () => {
	return (
		<section className="text-white py-12 px-6 text-center w-full">
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
					<p className="text-gray-100 text-lg">We’re setting up convenient pick-up points across Bali:</p>
					
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6 text-white font-medium">
						<div className="flex flex-col items-center">
							<span>Canggu</span>
							<span className="text-sm text-gray-200">Coming Soon</span>
						</div>
						<div className="flex flex-col items-center">
							<span>Seminyak</span>
							<span className="text-sm text-gray-200">Coming Soon</span>
						</div>
						<div className="flex flex-col items-center">
							<span>Kuta/Legian</span>
							<span className="text-sm text-gray-200">Coming Soon</span>
						</div>
						<div className="flex flex-col items-center">
							<span>Denpasar</span>
							<span className="text-sm text-gray-200">Coming Soon</span>
						</div>
						<div className="flex flex-col items-center">
							<span>Sanur</span>
							<span className="text-sm text-gray-200">Coming Soon</span>
						</div>
						<div className="flex flex-col items-center">
							<span>Uluwatu</span>
							<span className="text-sm text-gray-200">Coming Soon</span>
						</div>
					</div>
				</div>
				
				<div className="space-y-4 flex flex-col items-center">
					<p className="text-gray-100 text-lg">🛵 Ride with Gojek</p>
					<p className="text-lg w-fit px-4 py-2">Use promo code <span className="bg-white text-green-600 font-black rounded-xl px-3 py-1">GOBOUNCE</span>
					</p>
					
					<a href="#"
					   className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition duration-200">
						🎟️ Book Tickets Now
					</a>
				</div>
			</div>
		</section>
	)
}