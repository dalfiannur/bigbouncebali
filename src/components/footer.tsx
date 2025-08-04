import Link from 'next/link'
import Image from 'next/image'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'

export const Footer = () => {
	return (
		<footer
			className="flex flex-col mb-14 md:mb-0 p-6 bg-orange-500 text-white">
			<Accordion type="single" collapsible>
				<AccordionItem value="stay-tuned">
					<AccordionTrigger className="font-extrabold text-xl">Stay Tuned</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-4 text-balance font-semibold">
						<Link href="/" className="underline underline-offset-4 ">
							Instagram
						</Link>
						<Link href="/" className="underline underline-offset-4 ">
							Tiktok
						</Link>
					</AccordionContent>
				</AccordionItem>
				
				<AccordionItem value="information">
					<AccordionTrigger className="font-extrabold text-xl">Information</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-4 text-balance font-semibold">
						<Link href="/" className="underline underline-offset-4 ">
							FAQs
						</Link>
						<Link href="/" className="underline underline-offset-4 ">
							Terms of Service
						</Link>
						<Link href="/" className="underline underline-offset-4 ">
							Privacy Policy
						</Link>
						<Link href="/" className="underline underline-offset-4 ">
							Weather Policy
						</Link>
					</AccordionContent>
				</AccordionItem>
				
				<AccordionItem value="get-in-touce">
					<AccordionTrigger className="text-white font-extrabold text-xl">Get In Touch</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-4 text-balance white font-semibold">
						<Link href="/faqs" className="underline underline-offset-4 ">
							Contact Us
						</Link>
						<Link href="/terms" className="underline underline-offset-4 ">
							Magenta
						</Link>
						<Link href="/privacy" className="underline underline-offset-4 ">
							Incubase Studio
						</Link>
						<Link href="/weather" className="underline underline-offset-4 ">
							The Big Bounce America
						</Link>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<div className="mt-6 flex justify-center items-center">
				<Image src="/img/magenta.webp" alt="Magenta & Incubase Studio" width={150} height={90}/>
			</div>
			<p className="mt-6 text-xs text-center text-white">© {new Date().getFullYear()} The Big Bounce Bali. All
				rights reserved.</p>
		</footer>
	)
}