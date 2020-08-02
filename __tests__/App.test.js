import "react-native";
import React from "react";
import App from "../App";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

describe("<Index />", () => {
  it.skip("Is not modify", () => {
    expect(Index).toEqual({});
  });
});

describe("<App />", () => {
  it("Renders", () => {
    renderer.create(<App />);
  });

  it("Has 1 children NavigationContainer", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it.skip("Renders correctly to prev snap", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
