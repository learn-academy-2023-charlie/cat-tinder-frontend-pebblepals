import { render } from "@testing-library/react"
import Home from "../Pages/Home"
import { BrowserRouter } from "react-router-dom"

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />, div)
  })
  it('has a heading', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  })
})