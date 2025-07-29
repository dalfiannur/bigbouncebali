import Link from 'next/link'

export const Footer = () => {
	return (
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
	)
}