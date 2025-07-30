import {hasLocale, NextIntlClientProvider} from 'next-intl'
import {notFound} from 'next/navigation'
import {routing} from '@/i18n/routing'
import {setRequestLocale} from 'next-intl/server'
import {ReactNode} from 'react'
import '../globals.css'
import {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Big Bounce Bali',
	description: 'The Big Bounce Bali',
}

export default async function LocaleLayout({children, params}: {
	children: ReactNode;
	params: Promise<{ locale: string }>;
}) {
	// Ensure that the incoming `locale` is valid
	const {locale} = await params
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}
	
	setRequestLocale(locale)
	
	return (
		<html lang={locale}>
		<body>
		<NextIntlClientProvider>{children}</NextIntlClientProvider>
		</body>
		</html>
	)
}