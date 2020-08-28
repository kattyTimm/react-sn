import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
  test("Status come from props", () => {
    const component = create(<ProfileStatus status="test status" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("test status");
  });

	test("First must be span", () => {
		const component = create(<ProfileStatus status="test status" />);
		const root = component.root;
		let span = root.findByType("span");
		expect(span).not.toBeNull();
	});

  test("After creation shuold`n be input", () => {
    const component = create(<ProfileStatus />);
    const root = component.root;

    expect(() => {
        let input = root.findByType("input");
    }).toThrow();
  });

	test("Span text ", () => {
		const component = create(<ProfileStatus status="test status" />);
		const root = component.root;
		let span = root.findByType("span");
		expect(span.children[0]).toBe("test status");
	});

  test("Instead span should be input ", () => {
    const component = create(<ProfileStatus status="test status" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input).not.toBeNull();
  });

  test("callback should be called 'statusChange'", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="test status" updateStatus={mockCallback}/>);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });

});

// url react-test-renderer:
//https://www.valentinog.com/blog/testing-react/ (34.52)

// toThrow(); ожидает ошибку, и если она будет тест пройдет
