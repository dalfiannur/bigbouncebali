import {Locale} from '@/types/locale'

interface Params {
	lang: Locale
}

export interface PageProps {
	params: Promise<Params>
}