import React from "react"
import ReactDOM from "react-dom"

import "animate.css"

import logo from "./logo"
import "./style.css"

const uniq =
  "zr448t7pdvbcfrr7c7qz4mtvqa2y05vepra48ac50uw7qqe6ofxhwrd3tvxwzxr5y569tv87uxvsgaost2d"
const inClass = "flipInX"
const outClass = "flipOutX"
const repoUrl = "https://github.com/iamgnlc/"

const Egg = React.memo(() => {
  function getOut() {
    let element = document.getElementById(`egg-${uniq}`)

    element.classList.remove(inClass)
    element.classList.add(outClass)

    element = document.getElementById(`wrapper-${uniq}`)
    setTimeout(() => element.remove(), 1500)
  }

  return (
    <div
      id={`egg-${uniq}`}
      className={`gnlc-egg animated ${inClass}`}
      onClick={() => getOut()}
    >
      <pre>{logo}</pre>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        {repoUrl}
      </a>
    </div>
  )
})

class Wrapper extends React.Component {
  append = () => {
    let body = document.getElementsByTagName("body")[0]
    const div = document.createElement("div")
    div.id = `wrapper-${uniq}`
    body.appendChild(div)
    document.activeElement.blur()
    ReactDOM.render(<Egg />, document.getElementById(`wrapper-${uniq}`))
  }

  remove = () => {
    let element = document.getElementById(`wrapper-${uniq}`)
    if (element) element.remove()
  }

  componentDidMount() {
    this.append()
  }

  componentWillUnmount() {
    this.remove()
  }

  render() {
    return null
  }
}

export default Wrapper
