import React, {useState} from 'react'
import data from '../../helpers/data'
const QuoteGenerator = () => {
    const [index, setIndex] = useState(0)
    const generateQuote = () => {
        const randomIndex = Math.random() * data.length;
        setIndex(randomIndex)   
    }
  return (
    <div>
      <h1>Quotes</h1>
      <p>{data[index].quote}</p>
      <span>{data[index].author}</span><br/><br/>
      <button onClick={generateQuote}>Click Me</button>
    </div>
  )
}

export default QuoteGenerator
