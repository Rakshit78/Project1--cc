import React from "react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";
import FirstScreen from "./FirstScreen";

   const dis:boolean= true;
   const name:string="";
  describe("FirstScreen component", () => {
    test("renders result component", () => {
      render(<FirstScreen dis={dis} name={name}  setdis={()=>{}} fun={()=>{}} navigate={()=>{}}/>);
    })});


    test("snapshot of First", () => {
        const component = renderer.create(<FirstScreen  dis={dis} name={name}  setdis={()=>{}} fun={()=>{}} navigate={()=>{}}/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
  