import { createBrowserRouter } from 'react-router-dom'
import Root from '@/routes/Root'
import PrivacyPolicy from '@/routes/PrivacyPolicy'
import SiteNotice from '@/routes/SiteNotice'
import HeaderLayout from './components/HeaderLayout'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const router = (onLocaleChange: (locale: 'DE-de' | 'EN-us') => void) =>
  createBrowserRouter([
    {
      element: <HeaderLayout onLocaleChange={onLocaleChange} />,
      children: [
        {
          path: '/',
          element: <Root />,
        },
        {
          path: '/privacy-policy',
          element: <PrivacyPolicy />,
        },
        {
          path: '/site-notice',
          element: <SiteNotice />,
        },
        {
          path: '*',
          element: <Root />,
        },
      ],
    },
  ])

export default router
