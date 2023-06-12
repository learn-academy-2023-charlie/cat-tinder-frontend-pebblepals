import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import RockShow from "../Pages/RockShow";
import mockRocks from "../mockRocks";

describe("<RockShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<RockShow mockRocks={mockRocks} />, div);
  });

  it("renders a name", () => {
    render(
      <MemoryRouter initialEntries={["/rockshow/1"]}>
        <Routes>
          <Route path="/rockshow/:id" element={<RockShow rocks={mockRocks} />} />
        </Routes>
      </MemoryRouter>
    );

    const nameElement = screen.getByText("Rocky Balboa");
    expect(nameElement).toBeInTheDocument();
  });

  it("renders an age", () => {
    render(
      <MemoryRouter initialEntries={["/rockshow/1"]}>
        <Routes>
          <Route path="/rockshow/:id" element={<RockShow rocks={mockRocks} />} />
        </Routes>
      </MemoryRouter>
    );

    const ageElement = screen.getByText("10,000");
    expect(ageElement).toBeInTheDocument();
  });

  it("renders an enjoys", () => {
    render(
      <MemoryRouter initialEntries={["/rockshow/1"]}>
        <Routes>
          <Route path="/rockshow/:id" element={<RockShow rocks={mockRocks} />} />
        </Routes>
      </MemoryRouter>
    );

    const enjoysElement = screen.getByText("boxing and training sequences");
    expect(enjoysElement).toBeInTheDocument();
  });
});

