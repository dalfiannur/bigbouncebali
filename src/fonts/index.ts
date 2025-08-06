import localFont from 'next/font/local'
import { Knewave, Aladin } from 'next/font/google'

const montserrat = localFont({
	src: [
		{
			path: './montserrat-black.ttf',
			weight: '900'
		},
		{
			path: './montserrat-bold.ttf',
			weight: '700'
		},
		{
			path: './montserrat-extra_bold.ttf',
			weight: '800'
		},
		{
			path: './montserrat-regular.ttf',
			weight: '600'
		}
	]
})

const beachday = localFont({
	src: './beachday.ttf'
})

const aladin = Aladin({
	subsets: ["latin"],
	weight: ["400"]
})

const knewave = Knewave({
	subsets: ["latin"],
	weight: ["400"]
})

export const fonts = {
	montserrat,
	beachday,
	aladin,
	knewave
}