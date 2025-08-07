import Link from 'next/link'
import Image from 'next/image'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'

export const Footer = () => {
	return (
		<footer
			className="flex flex-col mb-14 md:mb-0 p-6 bg-yellow-400 text-white">
			<Accordion type="single" collapsible>
				<AccordionItem value="stay-tuned">
					<AccordionTrigger className="font-extrabold text-xl">Stay Tuned</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-4 text-balance font-semibold">
						<Link href="https://instagram.com/thebigbouncebali" target="_blank"
							  className="underline underline-offset-4 ">
							Instagram
						</Link>
						<Link href="https://tiktok.com/@thebigbounceindonesia" target="_blank"
							  className="underline underline-offset-4 ">
							Tiktok
						</Link>
					</AccordionContent>
				</AccordionItem>
				
				<AccordionItem value="information">
					<AccordionTrigger className="font-extrabold text-xl">Information</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-4 text-balance font-semibold">
						<Link href="/faqs" className="underline underline-offset-4 ">
							FAQs
						</Link>
						<Link href="/safety" className="underline underline-offset-4 ">
							Safety Guidelines
						</Link>
						<Link href="/privacy" className="underline underline-offset-4 ">
							Privacy Policy
						</Link>
						<Link href="/terms" className="underline underline-offset-4 ">
							Terms of Service
						</Link>
						{/*<Link href="/weather" className="underline underline-offset-4 ">*/}
						{/*	Weather Policy*/}
						{/*</Link>*/}
						<Link href="/public-information" className="underline underline-offset-4 ">
							Public Information
						</Link>
					</AccordionContent>
				</AccordionItem>
				
				<AccordionItem value="get-in-touce">
					<AccordionTrigger className="text-white font-extrabold text-xl">Get In Touch</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-4 text-balance white font-semibold">
						{/*<Link href="/contact-us" className="underline underline-offset-4 ">*/}
						{/*	Contact Us*/}
						{/*</Link>*/}
						<Link href="https://magenta.id" target="_blank" className="underline underline-offset-4 ">
							Magenta
						</Link>
						<Link href="https://incubasestudio.com" target="_blank"
							  className="underline underline-offset-4 ">
							Incubase Studio
						</Link>
						<Link href="https://thebigbounceamerica.com/" target="_blank"
							  className="underline underline-offset-4 ">
							The Big Bounce America
						</Link>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<div className="mt-6 flex justify-center items-center">
				<Image src="/img/magenta.webp" alt="Magenta & Incubase Studio" width={150} height={90}/>
			</div>
			<p className="mt-6 text-xs text-center text-white font-semibold">© {new Date().getFullYear()} <Link
				href="/">The Big Bounce Bali</Link>. All
				rights reserved.</p>
			<p className="mt-2 text-xs text-center text-white font-bold">PT. Sakti Rekatama Cipta</p>
		</footer>
	)
}