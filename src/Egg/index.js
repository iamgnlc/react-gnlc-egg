import React from "react"
import ReactDOM from "react-dom"

import "animate.css"

import logo from "./logo"
import "./style.css"

const inClass = "flipInX"
const outClass = "flipOutX"
const repoUrl = "https://github.com/iamgnlc/"

const Gnlc = React.memo((props) => {
  function getOut(id) {
    let element = document.getElementById(id)

    element.classList.remove(inClass)
    element.classList.add(outClass)

    setTimeout(() => element.remove(), 1500)
  }

  return (
    <div
      id={props.id}
      className={`gnlc-egg animated ${inClass}`}
      onClick={() => getOut(props.id)}
    >
      <pre>{logo}</pre>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        {repoUrl}
      </a>
    </div>
  )
})

class Egg extends React.Component {
  generateRandom = () => {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    )
  }

  append = () => {
    let body = document.getElementsByTagName("body")[0]
    const id = this.generateRandom()
    const div = document.createElement("div")
    div.id = `egg-${id}`
    body.appendChild(div)
    ReactDOM.render(
      <Gnlc id={`gnlc-${id}`} />,
      document.getElementById(`egg-${id}`),
    )
  }

  componentDidMount() {
    this.append()
  }

  render() {
    return null
  }
}

export default Egg
