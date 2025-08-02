import Link from 'next/link'
import {SiInstagram, SiTiktok} from '@icons-pack/react-simple-icons'
import Image from 'next/image'

export const Footer = () => {
	return (
		<footer
			className="flex flex-col mb-14 md:mb-0 p-6">
			<div className="flex justify-center items-center gap-6 ">
				<Link href="/">
					<SiInstagram className="text-white hover:text-white" size="2em" title="Instagram" />
				</Link>
				<Link href="/">
					<SiTiktok className="text-white hover:text-white" size="2em" title="Tiktok" />
				</Link>
			</div>
			<div className="mt-6 flex justify-center items-center gap-6 ">
				<Link href="/" className="text-white uppercase font-bold underline">
					Magenta
				</Link>
				<Link href="/" className="text-white uppercase font-bold underline">
					Incubase Studio
				</Link>
			</div>
			<div className="mt-6 flex justify-center items-center">
				<Image src="/img/magenta.webp" alt="Magenta & Incubase Studio" width={150} height={90} />
			</div>
			<nav className="mt-6 flex justify-center gap-4">
				<Link href="/faqs" className="text-xs underline underline-offset-4 text-gray-200">
					FAQs
				</Link>
				<Link href="/terms" className="text-xs underline underline-offset-4 text-gray-200">
					Terms of Service
				</Link>
				<Link href="/privacy" className="text-xs underline underline-offset-4 text-gray-200">
					Privacy Policy
				</Link>
				<Link href="/weather" className="text-xs underline underline-offset-4 text-gray-200">
					Weather Policy
				</Link>
			</nav>
			<p className="mt-6 text-xs text-center text-white">© {new Date().getFullYear()} The Big Bounce Bali. All rights reserved.</p>
		</footer>
	)
}