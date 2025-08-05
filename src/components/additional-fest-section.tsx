import Image from 'next/image'
import * as motion from 'motion/react-client'

export const AdditionalFestSection = () => {
	return (
		<section
			id="additional-fest"
			className="w-full py-12 md:py-24 lg:py-32"
		>
			<div className="-px-20">
				<div className="flex justify-between items-center">
					<motion.div initial={{x: -100}}
								whileInView={{x: 0, transition: {duration: 0.3, ease: 'easeInOut'}}}
								className="w-1/3 aspect-[1/0.55] relative -mx-3"
					>
						<Image src="/img/fist-02.webp" alt="Fist" fill className="rotate-y-180 object-contain"/>
					</motion.div>
					<motion.p initial={{y: 50}}
							  whileInView={{y: 0, transition: {duration: 0.3, delay: 0.1, ease: 'easeInOut'}}}
							  className="flex-1 text-center text-white font-bold"
					>
						If you’ve got the Bounce Pass wristband that’s your freakin’ superpower
					</motion.p>
					<motion.div initial={{x: 100}}
								whileInView={{x: 0, transition: {duration: 0.3, delay: 0.2, ease: 'easeInOut'}}}
								className="w-1/3 aspect-[1/0.55] relative -mx-3"
					>
						<Image src="/img/fist-01.webp" alt="Fist" fill className="object-contain"/>
					</motion.div>
				</div>
				<div className="grid gap-4">
					<div className="relative w-full aspect-video">
						<Image src="/img/additional-fest/picnic.webp" alt="Fist" fill className="object-contain"/>
					</div>
					<div className="relative w-full aspect-video">
						<Image src="/img/additional-fest/local-market.webp" alt="Fist" fill className="object-contain"/>
					</div>
					<div className="relative w-full aspect-video">
						<Image src="/img/additional-fest/kite.webp" alt="Fist" fill className="object-contain"/>
					</div>
					<div className="relative w-full aspect-video">
						<Image src="/img/additional-fest/dj-party.webp" alt="Fist" fill className="object-contain"/>
					</div>
				</div>
			</div>
		</section>
	)
}