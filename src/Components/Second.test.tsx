import React from "react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";
import Second from "./Second";

const mockdata:string="";

  describe("SecondScreen component", () => {
    test("renders result component", () => {
      render(<Second input={mockdata} navigate={()=>{}}/>);
    })});
    