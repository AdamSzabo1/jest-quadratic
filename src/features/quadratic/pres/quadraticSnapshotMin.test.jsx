import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

jest.mock('katex', () => ({
    ...jest.requireActual('katex'),
    render: jest.fn(() => {})
}));

import Quadratic from "./Quadratic";

describe('Quadratic snapshot min', () => {

    test('should match previous snapshot without KaTeX', () => {

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
