import {buttonVariants} from '@/components/ui/button'
import Link from 'next/link'
import {cn} from '@/lib/utils'
import {Ticket} from 'lucide-react'

export const FloatingCTA = () => {
	return (
		<div className="hidden md:block fixed bottom-14 right-14 z-50">
			<div className="relative">
				<div
					className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-ping opacity-75"></div>
				<div
					className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-pulse opacity-50"></div>
				
				<Link
					href="https://happykamper.onelink.me/xqgb/4084is7n"
					target="_blank"
					className="relative block"
				>
					<div
						className={cn('flex justify-center items-center w-20 h-20 bg-white hover:bg-yellow-200 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold text-lg border-4 border-white')}>
						<Ticket width={40} height={40} className="block text-orange-600 !w-10 !h-10"/>
					</div>
				</Link>
			</div>
		</div>
	)
}

export const FloatingCTAMobile = () => {
	return (
		<div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
			<div className="bg-gradient-to-r from-orange-400 to-orange-500 p-4 shadow-2xl">
				<Link
					href="https://happykamper.onelink.me/xqgb/4084is7n"
					target="_blank"
					className={cn(buttonVariants({size: 'lg'}), 'w-full bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg py-6 rounded-xl transform hover:scale-105 transition-all duration-300')}
				>
					🎟️ Buy Tickets Now
				</Link>
			</div>
		</div>
	)
}