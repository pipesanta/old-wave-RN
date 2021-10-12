
import React from "react"
import renderer from "react-test-renderer"

import { CarouselImages } from "./CarouselImages";

jest.runAllTimers();

describe("<CarouselImages />", () => {

    it("verify has 1 child", async (done) => {
        const tree: any = renderer.create(<CarouselImages
            images={[]}
            height={100}
            width={100}
            activeSlide={2}
            setActiveSlide={() => { }}
        />).toJSON()
        expect(tree?.children?.length).toBe(1);
        done();
    })

    // it('renders correctly', async () => {
    //     renderer.create(<> <CarouselImages />  </>);
    // });

})