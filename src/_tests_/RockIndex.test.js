import { render, screen } from "@testing-library/react"
import RockIndex from "../Pages/RockIndex"
import mockRocks from "../mockRocks"
import { Router } from "react-router-dom"


describe("<RockIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<RockIndex mockRocks={mockRocks} />, div)
  })


it("renders rock cards", () => {
  const div = document.createElement("div")
  render(
    <Router>
      <RockIndex rocks={mockRocks} />
    </Router>, div
  )
  mockRocks.forEach((rock) => {
    const rockName = screen.getByText(rock.name)
    expect(rockName).toBeInTheDocument()
  })
})
