import {cn} from '@/lib/utils'
import Image from 'next/image'
import {fonts} from '@/fonts'
import {Wave} from '@/components/Wave'

export const AdditionalFestSection = () => {
	return (
		<section
			id="additional-fest"
			className="w-full bg-[url(/img/bg-bottom.webp)] bg-cover bg-bottom"
		>
			<Wave />
			<div className="-px-20">
				<div className="overflow-hidden w-full">
					<div>
						<div className="flex flex-col items-center text-orange-600">
							<h5 className={cn('text-7xl tracking-widest', fonts.beachday.className)}>PICNIC?</h5>
							<h5 className={cn('-mt-2 text-xl text-center font-bold tracking-widest ', fonts.beachday.className)}>Mat&apos;s
								on you or buy one like a tourist.</h5>
						</div>
						<div className="-mt-12 relative w-full aspect-video">
							<Image src="/img/additional-fest/picnic.webp" alt="Fist" fill className="object-contain"/>
						</div>
					</div>
					<div className="-mt-4">
						<div className="flex flex-col items-center text-orange-600">
							<h5 className={cn('-mt-2 text-xl text-center font-bold tracking-widest ', fonts.beachday.className)}>Shop
								cute stuff at the</h5>
							<h5 className={cn('text-7xl tracking-widest text-center leading-[0.8]', fonts.beachday.className)}>LOCAL
								MARKET</h5>
						</div>
						<div className="-mt-8 relative w-full aspect-video">
							<Image src="/img/additional-fest/local-market.webp" alt="Fist" fill
								   className="object-contain"/>
						</div>
					</div>
					<div className="-mt-4">
						<div className="flex flex-col items-center text-orange-600">
							<h5 className={cn('-mt-2 text-xl text-center font-bold tracking-widest', fonts.beachday.className)}>Watch</h5>
							<h5 className={cn('-mt-2 text-7xl tracking-widest text-center leading-[0.8]', fonts.beachday.className)}>KITE</h5>
							<h5 className={cn('text-5xl tracking-widest text-center leading-[0.8]', fonts.beachday.className)}>FESTIVALS</h5>
							<h5 className={cn('-mt-1 text-xl text-center font-bold tracking-widest ', fonts.beachday.className)}>every
								weekend</h5>
						</div>
						<div className="-mt-10 relative w-full aspect-video">
							<Image src="/img/additional-fest/kite.webp" alt="Fist" fill className="object-contain"/>
						</div>
					</div>
					<div className="-mt-4">
						<div className="flex flex-col items-center text-orange-600">
							<h5 className={cn('text-7xl tracking-widest text-center leading-[0.8]', fonts.beachday.className)}>DJ spinning</h5>
							<h5 className={cn('text-xl text-center font-bold tracking-widest ', fonts.beachday.className)}>sun dropping, cocktail flowing = you’re doing it right.</h5>
						</div>
						<div className="-mt-10 relative w-full aspect-video">
							<Image src="/img/additional-fest/dj-party.webp" alt="Fist" fill className="object-contain"/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}