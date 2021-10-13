
import React from "react"
import renderer from "react-test-renderer"

import { SearchInput } from "./SearchInput";

jest.runAllTimers();

describe("<SearchInput />", () => {

    const tree: any = renderer.create(<SearchInput
        key="jewew.ewe"
        onValueChanges={() => { }}
        style={{}}
    />).toJSON();

    it("<SearchInput /> has 1 child", (done) => {
        expect(tree?.children?.length).toBe(1);
        done();
    });

    it("verify type of <SearchInput /> ", (done) => {
        expect(tree?.type).toBe("View");
        done();
    });

    it("verify some style props of <SearchInput /> ", (done) => {

        const expectedStyle = { backgroundColor: "#772CE8", flex: 1 };

        expect(tree.props.style).toMatchObject(expectedStyle);

        done();
    });

})