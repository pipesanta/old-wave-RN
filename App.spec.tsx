
import React from "react"
import renderer from "react-test-renderer"

import { SearchInput } from "./src/components/SearchInput";

jest.runAllTimers();

describe("<SearchInput />", () => {
  it("verify has 1 child", async (done) => {
    const tree: any = renderer.create(<SearchInput
      key="ww"
      style={{}}
      onValueChanges={() => { }} />
    ).toJSON()
    expect(tree?.children?.length).toBe(1);
    done();
  })

  // it('renders correctly', async () => {
  //   renderer.create(<> <App />  </>)
  // });

})