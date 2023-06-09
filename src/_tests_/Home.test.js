import { render } from "@testing-library/react"
import Home from "../Pages/Home"

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />, div)
  })
})