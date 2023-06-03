import { useState } from 'react'
import questions from './data'
const App = () => {
  const [question, setQuestion] = useState(questions)
  return (
    <main>
      <section className='container'>
        <h1>Questions</h1>
        {question.map(question => {
          const { id, title, info } = question
          return (
            <article className='question' key={id}>
              <header>
                <h5>{title}</h5>
                <button className='question-btn'>+</button>
              </header>
              <p>{info}</p>
            </article>
          )
        })}
      </section>
    </main>
  )
}
export default App
