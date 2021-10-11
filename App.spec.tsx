//App.spec.tsx
import React from "react"
import renderer from "react-test-renderer"

import { SearchInput } from "./src/components/SearchInput"
import App from "./App";

describe("<App />", () => {
  it("has 2 child", async (done) => {
    const tree: any = renderer.create(<SearchInput key="ww" style={{}} onValueChanges={() => { }} />).toJSON()
    expect(tree?.children?.length).toBe(1);
    done();
  })

  it('renders correctly', () => {
    renderer.create(<App />);
  });

})