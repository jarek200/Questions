import { useState } from 'react'
export default function Question({ title, info }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button onClick={() => setIsOpen(prev => !prev)} className='question-btn'>
          +
        </button>
      </header>
      {isOpen && <p>{info}</p>}
    </article>
  )
}
