import React from 'react'
import Link from 'next/link'
import "./styles.css"

const Navbar = () => {
  return (
    <>
    <div className="navContainer">
        <div className="menuContainer">
            <Link href="/" className='menuItem'>Home</Link>
            <Link href="/getStaticProps" className='menuItem'>Static Generation</Link>
            <Link href="/getServerSideProps" className='menuItem'>Server-side Rendering</Link>
            <Link href="/clientsiderendering" className='menuItem'>Client-side Rendering useEffect or fetch</Link>
            <Link href="/fetchingdirectly" className='menuItem'>Using fetch directly</Link>
            <Link href="/buildingForms" className='menuItem'>Building Forms</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar