import React, {useState} from "react"
const data = [
    { title: "Python", id: 1, count: 0, icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { title: "Javascript", id: 22, count: 0, icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { title: "Java", id: 30, count: 0, icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { title: "C++", id: 4, count: 0, icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { title: "C#", id: 5, count: 0, icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { title: "Pascal", id: 6, count: 0, icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { title: "Fortran", id: 7, count: 0, icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { title: "GoLang", id: 8, count: 0, icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { title: "Typescript", id: 9, count: 0, icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { title: "SQL", id: 10, count: 0, icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
  ]
  
  function Voting() {
    const [stateData, setStateData] = useState(data)
    const [winner, setWinner] = useState("")
    const customStyle = {
      boxShadow: "0 0 5px  grey",
      padding: "10px",
      margin: "5px"
    }
    const handleIncrease = (index) => {
      const newData = [...stateData] //[{}]
      newData[index].count++
      let title = 0
      for (let i of newData) {
        if (i.count > title) {
          title = i.title
        }
      }
      setWinner(title)
      setStateData(newData)
    }
    const handleDecr = (index) => {
      const newData = [...stateData] //[{}]
      if (newData[index].count > 0) {
        newData[index].count--
        let title = 0
        for (let i of newData) {
          if (i.count > title) {
            title = i.title
          }
        }
        setWinner(title)
        setStateData(newData)
      }
    }
    return (
      <div className="App">
        <h1>Voting</h1>
        <h3>Winner is {winner}</h3>
        {
          stateData.map((lang, ind) => {
            return (
              <div style={customStyle}>
                <h3>{lang.title}</h3>
                <img width="60px" src={lang.icon} alt="" />
                <h3>{lang.count}</h3>
                <button onClick={() => handleDecr(ind)} style={{ padding: "0 10px", marginRight: "10px" }}>-</button>
                <button onClick={() => handleIncrease(ind)} style={{ padding: "0 10px" }}>+</button>
              </div>
            )
          })
        }
      </div>
    )
  }
  
  export default Voting;