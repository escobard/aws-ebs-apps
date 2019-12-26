import React from "react";
import { shallow } from "enzyme";
import Note from "./index";

describe("Form snapshot renders", () => {
  it("should render note component", () => {
    const note = {
      title: "Test title",
      note:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nulla sit amet nibh sagittis eleifend. Cras a lacus rutrum ipsum pretium scelerisque sed eu turpis. ",
      date: "9 am"
    };
    const component = shallow(<Note data={note} />);
    
    expect(component).toMatchSnapshot();
  });
});
