import katex from 'katex';
import { useEffect } from 'react';
import { useRef } from 'react';

const QuadraticEquation = ({a='a', b='b', c='c', D}) => {

    const quadEquation = useRef();

    useEffect(() => {
        
        const disc = D ?? String.raw`${b}^2 - 4*${a}*${c}`;

        katex.render(
            String.raw`x_{1,2}=\frac{-${b} \pm \sqrt{${disc}}}{2*${a}}`,
            quadEquation.current,
            { output: 'mathml' }
        );

    }, [a, b, c, D]);

    return (
        <span ref={quadEquation} />
    );
}

export default QuadraticEquation;
