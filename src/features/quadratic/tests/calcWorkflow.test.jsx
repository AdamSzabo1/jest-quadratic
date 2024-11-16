import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import QuadraticContainer from "../QuadraticContainer";

describe('Calculation Workflow', () => {

    test('should correctly calculate roots of (1, -4, -21)', () => {

        // 7, -3
        render( <QuadraticContainer /> );

        const inputA = screen.getByTestId('coe-a');
        const inputB = screen.getByTestId('coe-b');
        const inputC = screen.getByTestId('coe-c');
        const solveBtn = screen.getByTestId('solve-btn');

        const rootX1 = screen.getByTestId('root-x1');
        const rootX2 = screen.getByTestId('root-x2');

        fireEvent.change(inputA, { target: { value: '1' } });
        fireEvent.change(inputB, { target: { value: '-4' } });
        fireEvent.change(inputC, { target: { value: '-21' } });

        fireEvent.click(solveBtn);

        expect(rootX1.innerHTML).toBe('7');
        expect(rootX2.innerHTML).toBe('-3');
    });

});
