import React, { useState } from 'react'
import { GlobalStyles } from '@/style/GlobalStyles'
import router from './router'
import { RouterProvider } from 'react-router-dom'

import de from '@/i18n/messages/DE-de.json'
import en from '@/i18n/messages/EN-us.json'
import { IntlProvider } from 'react-intl'

const messages = { 'DE-de': de, 'EN-us': en }
const localeMap = { de: 'DE-de', 'de-de': 'DE-de', en: 'EN-us', 'en-us': 'EN-us' }
const browserLang = navigator.language.toLowerCase() as keyof typeof localeMap

const App: React.FC = () => {
  const localeFromStorage = localStorage.getItem('locale')
  const [locale, setLocale] = useState<keyof typeof messages>(
    localeFromStorage != null
      ? (localeFromStorage as keyof typeof messages)
      : ((localeMap[browserLang] !== undefined ? localeMap[browserLang] : 'EN-us') as keyof typeof messages)
  )

  const onLocaleChange = (locale: keyof typeof messages): void => {
    localStorage.setItem('locale', locale)
    setLocale(locale)
  }

  return (
    <>
      <GlobalStyles />
      <IntlProvider locale={locale} messages={messages[locale]} defaultLocale={'EN-us'}>
        <RouterProvider router={router(onLocaleChange)} />
      </IntlProvider>
    </>
  )
}

export default App
