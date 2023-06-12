import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RockNew from '../Pages/RockNew';

describe('<RockNew />', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RockNew />
      </BrowserRouter>
    );
  });

  it("renders the name input correctly", () => {
    const nameInput = screen.getByLabelText("Please Enter a Name:");
    expect(nameInput).toBeInTheDocument();
  });

  it("renders the age input correctly", () => {
    const ageInput = screen.getByLabelText("Please Enter Age:");
    expect(ageInput).toBeInTheDocument();
  });

  it("renders the enjoys input correctly", () => {
    const enjoysInput = screen.getByLabelText("What are your hobbies?");
    expect(enjoysInput).toBeInTheDocument();
  });

  it("renders the image input correctly", () => {
    const imageInput = screen.getByLabelText("Please Upload a photo here!");
    expect(imageInput).toBeInTheDocument();
  });

  it("renders the submit button correctly", () => {
    const submitButton = screen.getByText("Submit Rock");
    expect(submitButton).toBeInTheDocument();
  });
});

