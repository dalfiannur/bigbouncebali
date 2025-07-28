export interface AboutSlide {
	id: string
	badge: string
	badgeColor: string
	title: string
	description: string
	image: string
	features: Array<{
		icon: string
		title: string
		description: string
	}>
}