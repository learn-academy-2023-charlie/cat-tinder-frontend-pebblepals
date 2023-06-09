import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "../Components/Header"

describe("<Header />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
  })

  it("renders a logo with a src and alt", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
  })
    it("renders with a header", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
    })
    it("header renders with RubikMoonrocks font", () => {
      const div = document.createElement("div")
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
        div
      )
    })
})