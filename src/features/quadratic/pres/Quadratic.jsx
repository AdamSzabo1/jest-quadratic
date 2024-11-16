
import CoeInput from '../coeInput/CoeInput';
import QuadOutput from '../quadOutput/QuadOutput';
import * as style from './quadratic.module.css';

const Quadratic = ({quadValues, dispatch}) => {

    const { a, b, c, D, x1, x2 } = quadValues;

    return (
        <div className={`${style.quadratic}`}>
            <h1 data-testid="quadratic-heading">Quadratic Equation</h1>

            <div className={`${style['io-area']}`}>

                <CoeInput
                    defA={a}
                    defB={b}
                    defC={c}
                    dispatch={dispatch}
                />
                <QuadOutput quadValues={quadValues} />

            </div>
        </div>
    );
}

export default Quadratic;
