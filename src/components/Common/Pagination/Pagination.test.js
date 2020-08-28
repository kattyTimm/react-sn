import React from "react";
import { create } from "react-test-renderer";
import Pagination from './Pagination';

describe("ProfileStatus component", () => {

  test("pages count must be 11, but should be allowed only 10", () => {
    const component = create(<Pagination totalItemssCount={11} pageSize={1} sectorSize={10} />);
    const root = component.root;
    let spans = root.findAllByType("span");
    expect(spans.length).toBe(10);
  });

  test(" if pages count more then 10, NEXT should be displyed", () => {
    const component = create(<Pagination totalItemssCount={11} pageSize={1} sectorSize={10} />);
    const root = component.root;
    let buttons = root.findAllByType("button");
    expect(buttons.length).toBe(1);
  });

});
