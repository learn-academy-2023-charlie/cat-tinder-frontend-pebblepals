import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom"
import RockShow from "../Pages/RockShow";
import mockRocks from "../mockRocks";

describe("<RockShow />", () => {
    it("renders without crashing", () => { })
})
it("renders a name", () => { 
    render(
        <MemoryRouter initialEntries={["/rockshow/1"]}>
            <Routes>
                <Route path="/rockshow/:id" element={<RockShow rocks={mockRocks}/>}/>
            </Routes>
        </MemoryRouter>
        )
    })
