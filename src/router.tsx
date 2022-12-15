import { createBrowserRouter } from 'react-router-dom'
import Root from '@/routes/Root'
import Contact from '@/routes/Contact'
import PrivacyPolicy from '@/routes/PrivacyPolicy'
import SiteNotice from '@/routes/SiteNotice'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: 'privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/site-notice',
    element: <SiteNotice />,
  },
])

export default router
