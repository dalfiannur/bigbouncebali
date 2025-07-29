import localFont from 'next/font/local'

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

export const fonts = {
	montserrat,
	beachday
}