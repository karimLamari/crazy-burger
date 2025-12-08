import React from 'react'
import { Link } from 'react-router-dom'

function OrderPage() {
  return (
    <>
      <div>OrderPage</div>
      <Link to="/">
        <button >Déconnexion</button>
      </Link>
    </>
  )
}

export default OrderPage