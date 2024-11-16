import { render, screen } from "@testing-library/react";
import QuadraticContainer from "../QuadraticContainer";
import React from "react";
import '@testing-library/jest-dom';

describe('Quadratic', () => {

    test('should render h1 with "Quadratic Equation" heading', () => {

        render( <QuadraticContainer /> );

        const quadraticHeading = screen.getByTestId('quadratic-heading');

        expect(quadraticHeading).toBeInTheDocument();
        expect(quadraticHeading.tagName).toBe('H1');
        expect(quadraticHeading.textContent).toBe('Quadratic Equation');
    });
});
