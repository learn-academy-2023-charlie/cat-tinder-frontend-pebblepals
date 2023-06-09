import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../Components/Footer"

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
      div
    )
  })
  it("has a link", () => {
    render(
      <BrowserRouter>
      <Footer />
      </BrowserRouter>
    )
  })
})