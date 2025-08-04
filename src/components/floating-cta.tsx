import {Button} from '@/components/ui/button'

export const FloatingCTA = () => {
	return (
		<div className="hidden md:block fixed bottom-14 right-14 z-50">
			<div className="relative">
				<div
					className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-ping opacity-75"></div>
				<div
					className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-pulse opacity-50"></div>
				
				<Button
					size="lg"
					className="relative h-20 w-20 bg-white hover:bg-yellow-200  px-6 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold text-lg border-4 border-white"
				>
					<div className="flex flex-col items-center">
						<span className="text-5xl font-normal">🎟️</span>
					</div>
				</Button>
			</div>
		</div>
	)
}

export const FloatingCTAMobile = () => {
	return (
		<div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
			<div className="bg-gradient-to-r from-orange-400 to-orange-500 p-4 shadow-2xl">
				<Button
					size="lg"
					className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg py-4 rounded-xl transform hover:scale-105 transition-all duration-300"
				>
					🎟️ Buy Tickets Now
				</Button>
			</div>
		</div>
	)
}