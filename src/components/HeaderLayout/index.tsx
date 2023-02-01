import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'
import React from 'react'

interface Props {
  onLocaleChange: (locale: 'DE-de' | 'EN-us') => void
}

const HeaderLayout: React.FC<Props> = ({ onLocaleChange }: Props) => {
  return (
    <>
      <Header onLocaleChange={onLocaleChange} />
      <Outlet />
    </>
  )
}

export default HeaderLayout
