import questions from './data'
import Question from './Question'
const App = () => {
  return (
    <main>
      <section className='container'>
        <h1>Questions</h1>
        {questions.map(question => (
          <Question key={question.id} {...question} />
        ))}
      </section>
    </main>
  )
}
export default App
