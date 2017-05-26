import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "../App";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("shows the correct title", () => {
    const component = shallow(<App title="Advanced React" />);
    expect(component.find("h1").text()).toContain("Advanced React");
  });

  it("renders with the correct class", () => {
    const component = shallow(<App />);
    expect(component.find("div").hasClass("App")).toBe(true);
  });
});
