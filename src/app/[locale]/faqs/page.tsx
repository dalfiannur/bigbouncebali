import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import Link from 'next/link'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'

const faqs = {
	en: [
		{
			title: 'Ticket & Purchase',
			items: [
				{
					q: 'What types of tickets are available?',
					a: 'Currently, we’re in the Early Bird period offering two types of Bounce Pass at the best prices — available from 4–10 August 2025.'
				},
				{
					q: 'What’s the difference between Festival Pass and Bounce Pass?',
					a: 'Festival Pass grants entry and festival area access. Bounce Pass includes unlimited access to all bounce zones.'
				},
				{
					q: 'Do international tourists need a special ticket?',
					a: 'Yes. Ticket prices differ between Indonesian Citizens + KITAS holders and International Tourists.'
				},
				{
					q: 'Are all tickets valid for a full day?',
					a: 'Yes, all tickets are valid for full-day access without time sessions or re-entry.'
				},
				{
					q: 'Can I reschedule my ticket?',
					a: 'No, unless the entire festival is cancelled by the organizer due to extreme weather.'
				},
				{
					q: 'Can someone else use my ticket?',
					a: 'Yes, as long as the ticket has not been scanned.'
				},
				{
					q: 'Do I need to print my ticket?',
					a: 'No. Just show your e-ticket from your phone at check-in.'
				},
				{
					q: 'Are tickets available on the spot?',
					a: 'Yes, but limited and more expensive. We recommend purchasing online via Happy Kamper.'
				},
				{
					q: 'Do children need tickets?',
					a: 'Yes. Children above 2 years require a ticket. Under 2 is free (but cannot enter bounce zones).'
				}
			]
		},
		{
			title: 'Venue & Location',
			items: [
				{
					q: 'Where is The Big Bounce Bali located?',
					a: 'Peninsula Island – Nusa Dua, a 3-hectare open park with stunning views of Nusa Dua beach.'
				},
				{
					q: 'How do I get to Peninsula Island?',
					a: 'You can drive or ride a motorbike via ITDC Nusa Dua. Free shuttles available from Canggu, Seminyak, Kuta, Sanur, Denpasar, and Uluwatu.'
				},
				{
					q: 'Can I use Gojek or Grab to get there?',
					a: 'Yes. Set your destination to Peninsula Island. You\'ll be dropped at The Big Bounce Bali gate, then walk ±5 minutes.'
				},
				{
					q: 'Is there a shuttle if I’m staying in the ITDC area?',
					a: 'Please check directly with your hotel.'
				}
			]
		},
		{
			title: 'Schedule & Operations',
			items: [
				{
					q: 'When is the festival happening?',
					a: 'September 13 – October 12, 2025. Note: September 13 is exclusive for VIP and MEDIA.'
				},
				{
					q: 'When does the festival open to the public?',
					a: 'From September 14 to October 12, 2025.'
				},
				{
					q: 'What are the operating hours?',
					a: 'Monday–Thursday: 2 PM–9 PM, Friday–Sunday: 10 AM–9 PM.'
				},
				{
					q: 'What’s the best time to visit?',
					a: 'Visit during the day if you want to play in full sun. Come in the afternoon/evening for cooler weather.'
				},
				{
					q: 'Is the festival split into time sessions?',
					a: 'No. All tickets are full-day. Only The Biggest Bounce House operates every 30 minutes with 10-minute breaks.'
				}
			]
		},
		{
			title: 'The Big Bounce',
			items: [
				{
					q: 'What is The Big Bounce?',
					a: 'The Big Bounce is the world’s largest touring inflatable event. Originally from the United States, it’s an official world tour that has visited countries like Canada, Australia, Arabia, and more.'
				},
				{
					q: 'Is this the first time it appears in Asia?',
					a: 'This year marks the first time The Big Bounce is presented as an official Asia Tour.'
				},
				{
					q: 'Which countries are included in The Big Bounce Asia Tour?',
					a: 'The tour starts from Hong Kong, then goes to Jakarta and Bali, and will continue to other countries in Asia.'
				},
				{
					q: 'Is the Bali version different from Jakarta?',
					a: 'Yes! The Bali edition has a tropical and lifestyle festival concept, not just a children’s playground.'
				},
				{
					q: 'Is The Big Bounce Bali part of the official tour?',
					a: 'Yes. The Big Bounce Bali is the third stop on The Big Bounce Asia Tour 2025.'
				},
				{
					q: 'Who supports this event?',
					a: 'The event is supported by the Ministry of Tourism and Creative Economy – Wonderful Indonesia, along with various local sponsors and partners.'
				},
				{
					q: 'What are the main attractions at The Big Bounce?',
					a: 'The Biggest Bounce House, The Giant, Octoblast, Pink Alien, and Sport Slam.'
				},
				{
					q: 'What is the purpose of this event being held in Bali?',
					a: 'To introduce a global festival to the international audience in Bali and strengthen its position as a world-class festival destination.'
				},
				{
					q: 'Where does The Big Bounce go after Bali?',
					a: 'After Bali, The Big Bounce continues its tour to other countries in Asia — stay tuned on our official Instagram for the latest updates!'
				},
				{
					q: 'What is The Biggest Bounce House?',
					a: 'It holds the Guinness World Record as the Largest Bounce House in the world.'
				},
				{
					q: 'What is The Giant?',
					a: 'A 350-meter-long obstacle race featuring slides, challenges, and inflatable hurdles.'
				},
				{
					q: 'What is Sport Slam?',
					a: 'A bounce arena designed for basketball, dodgeball, gladiator duels, and more.'
				},
				{
					q: 'What is Octoblast?',
					a: 'A foam party zone — make sure to bring extra clothes!'
				},
				{
					q: 'What is Pink Alien?',
					a: 'A super deep ball pit zone in a cute pink theme, perfect for little kids.'
				}
			]
		},
		{
			title: 'Special Program',
			items: [
				{
					q: 'Can I access all attractions all day?',
					a: 'Yes, except during special sessions like Kids Bounce Time or Bounce After Sunset.'
				},
				{
					q: 'What is Bounce After Sunset?',
					a: 'Held every Friday to Sunday (8 PM–10 PM), this is an adult-only session with lights and chill music.'
				},
				{
					q: 'What is Kids Bounce Time?',
					a: 'A session every Friday to Sunday (3 PM–4 PM) designed for kids to bounce safely and comfortably.'
				},
				{
					q: 'What is The Giant Challenge?',
					a: 'A speed competition to complete The Giant’s obstacle course — the fastest gets a reward and leaderboard bragging rights!'
				},
				{
					q: 'What is Island Soul Garden?',
					a: 'An inflatable art installation parodying Bali’s tourist stereotypes.'
				},
				{
					q: 'What characters are in Island Soul Garden?',
					a: 'The Shortcut, Detox Diva, Canggu Gladiator, The Real MVP, and The God(dess).'
				},
				{
					q: 'What is Silent Sunset?',
					a: 'A bounce session with wireless headphones. Held daily at 5:30 PM & 6:30 PM. Limited slots.'
				},
				{
					q: 'What is Sunset Cheers?',
					a: 'A group toast session with glow-in-the-dark cups, 30 minutes before sunset.'
				},
				{
					q: 'Is there live music?',
					a: 'Yes, daily live music and DJ performances are held on the main stage.'
				},
				{
					q: 'What is The Big Parade?',
					a: 'A daily carnival held twice a day where everyone is welcome to join.'
				},
				{
					q: 'When is the Kite Festival?',
					a: 'Every Saturday & Sunday starting at 10 AM.'
				},
				{
					q: 'Do I need a special ticket for the Kite Festival?',
					a: 'No. All passes include access to the festival — just make sure to come on a weekend.'
				}
			]
		},
		{
			title: 'Family',
			items: [
				{
					q: 'Do children need to be accompanied?',
					a: 'Yes. Children under 10 must be accompanied by an adult (18+).'
				},
				{
					q: 'Can pregnant women participate in bounce activities?',
					a: 'Not recommended for safety reasons. However, they can still enjoy the festival grounds.'
				}
			
			]
		},
		{
			title: 'Festival',
			items: [
				{
					q: 'Can I have a picnic at the venue?',
					a: 'Yes! You may bring your own mat or purchase one on-site.'
				},
				{
					q: 'Are there food and drink vendors?',
					a: 'Yes, the Island Food Market offers 20+ culinary booths.'
				},
				{
					q: 'Is there a shopping area?',
					a: 'Yes, the Local Makers Market offers fashion, art, and souvenirs.'
				},
				{
					q: 'Can I bring outside food and drinks?',
					a: 'No, unless for babies or specific medical needs (with proof).'
				},
				{
					q: 'Are lockers available?',
					a: 'Yes, paid lockers are available on a first-come, first-served basis.'
				},
				{
					q: 'Can I bring a professional camera?',
					a: 'Yes, but use caution and avoid disturbing other visitors.'
				},
				{
					q: 'Can I fly a drone at the venue?',
					a: 'No, unless you have official permission from The Big Bounce Bali organizers, ITDC, and valid drone certification.'
				},
				{
					q: 'Can I bring pets?',
					a: 'No. Pets are not allowed for the comfort of all guests.'
				}
			]
		},
		{
			title: 'Weather',
			items: [
				{
					q: 'Does the festival run during rain?',
					a: 'Yes. Bounce areas may be temporarily closed during extreme weather.'
				},
				{
					q: 'What happens if bounce zones close due to rain?',
					a: 'If the entire festival is closed, rescheduling options will be available (terms apply).'
				},
				{
					q: 'Can I get a refund if it rains?',
					a: 'No. All tickets are non-refundable under any circumstances.'
				}
			]
		},
		{
			title: 'General Information',
			items: [
				{
					q: 'Where can I see the full schedule?',
					a: 'Check Instagram @thebigbounceindonesia or visit the Info Booth.'
				},
				{
					q: 'What should I do if I lose my child or belongings?',
					a: 'Go to the Lost & Found booth or contact the nearest crew member.'
				},
				{
					q: 'Who should I contact for other questions?',
					a: 'DM us on Instagram or email thebigbounceid@gmail.com.'
				}
			]
		}
	]
}

export default function FAQsPage() {
	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
			<main className="flex-1 container px-4 md:px-6 py-8">
				<div className="max-w-4xl mx-auto">
					<div className="mb-8">
						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
							FAQs
						</h1>
					</div>
					
					<div className="space-y-6">
						{
							faqs.en.map((faq) => (
								<Card key={faq.title}>
									<CardHeader>
										<CardTitle>{faq.title}</CardTitle>
									</CardHeader>
									<CardContent className="space-y-4">
										<Accordion type="single" collapsible>
											{faq.items.map((item, index) => (
												<AccordionItem key={index} value={index.toString()}>
													<AccordionTrigger>{item.q}</AccordionTrigger>
													<AccordionContent>{item.a}</AccordionContent>
												</AccordionItem>
											))}
										</Accordion>
									</CardContent>
								</Card>
							))
						}
					</div>
				</div>
			</main>
			
			{/* Footer */}
			<footer
				className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
				<p className="text-xs text-gray-500">© {new Date().getFullYear()} <Link href="/">The Big Bounce Bali</Link>. All rights reserved.</p>
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
		</div>
	)
}
