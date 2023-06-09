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
})