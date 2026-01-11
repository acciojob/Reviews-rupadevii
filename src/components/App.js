import React from 'react'
import Review from './Review'
import '../styles/App.css'

export default function App() {
  return (
    <section className='container'>
        <h1 className='review-heading'>Our Reviews</h1>
        <main>
            <Review/>
        </main>
    </section>
  )
}
