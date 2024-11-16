import QuadraticEquation from "../quadraticEquation/QuadraticEquation";

import * as style from './quad-output.module.css';

const QuadOutput = ({ a, b, c, D, x1, x2 }) => {

    return (
        <div className={style['quad-output']} >
            <h2>Solution</h2>
            <QuadraticEquation />
            <QuadraticEquation a={a} b={b} c={c} />
            <QuadraticEquation a={a} b={b} c={c} D={D} />
            <span>x1 = {x1}</span>
            {
                x2 !== undefined
                ? <span>x2 = {x2}</span>
                : null
            }
            
        </div>
    );
}

export default QuadOutput;
