import React from "react"
import {screen, render} from "@testing-library/react"

import {Scrollingtext} from "./scrollingtext";

describe("Scrollingtext", () => {
    it("should render the component", () => {
        render(<Scrollingtext contentLanguage="en_US" text="World" link={""}/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
