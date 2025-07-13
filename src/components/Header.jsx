import  React from 'react'
import Place from './Place'
import { Search } from './Search'
import Setting from './Setting'
import "../assets/style/components/Header.scss"
export default function Header() {
  return (
    <div className='Header'>
      <Place/>
      <Search/>
      <Setting/>
      
      
    </div>
  )
}
