import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import Quadratic from "./Quadratic";

describe('Quadratic snapshot', () => {

    test('should match previous snapshot with KaTeX', () => {

        const { asFragment } = render(
            <Quadratic
                a={1}
                b={8}
                c={-48}
                D={256}
                x1={4}
                x2={-12}
            />
        );

        expect( asFragment() ).toMatchSnapshot();
    });

});
