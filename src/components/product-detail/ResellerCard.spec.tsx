
import React from "react"
import renderer from "react-test-renderer"

import { ResellerCard } from "./ResellerCard";

jest.runAllTimers();

describe("<ResellerCard />", () => {

    const tree: any = renderer.create(<ResellerCard
        key="jewew.ewe"
        reseller={{}}
    />).toJSON();

    it("<ResellerCard /> has 1 child", (done) => {
        expect(tree?.children?.length).toBe(1);
        done();
    });

    it("verify type of <ResellerCard /> ", (done) => {
        expect(tree?.type).toBe("View");
        done();
    });

    it("verify some style props of <ResellerCard /> ", (done) => {

        const expectedStyle = { backgroundColor: "white", borderRadius: 10 };

        expect(tree.props.style).toMatchObject(expectedStyle);

        done();
    });

})