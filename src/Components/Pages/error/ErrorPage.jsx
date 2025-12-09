import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <>
      <div>ErrorPage</div>
      <Link to="/">
        <button >Retourner vers la page d'accueil</button>
      </Link>
    </>
  )
}

export default ErrorPage