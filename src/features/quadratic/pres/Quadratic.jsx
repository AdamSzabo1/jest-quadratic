
import CoeInput from '../coeInput/CoeInput';
import QuadOutput from '../quadOutput/QuadOutput';
import * as style from './quadratic.module.css';

const Quadratic = ({ a, b, c, D, x1, x2 }) => {

    return (
        <div className={`${style.quadratic}`}>
            <h1 data-testid="quadratic-heading">Quadratic Equation</h1>

            <div className={`${style['io-area']}`}>

                <CoeInput
                    defA={a}
                    defB={b}
                    defC={c}
                />
                <QuadOutput
                    a={a}
                    b={b}
                    c={c}
                    D={D}
                    x1={x1}
                    x2={x2}
                />

            </div>
        </div>
    );
}

export default Quadratic;
