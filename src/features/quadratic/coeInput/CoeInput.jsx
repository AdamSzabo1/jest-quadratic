
import * as style from './coe-input.module.css';

const CoeInput = ({defA, defB, defC}) => {

    const onSolve = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={onSolve} className={style['coe-input']} >
            <h2>Input</h2>

            <div>
                <label htmlFor="coe-a">a: </label>
                <input type="number" name="" id="coe-a" defaultValue={defA} />
            </div>

            <div>
                <label htmlFor="coe-b">b: </label>
                <input type="number" name="" id="coe-b" defaultValue={defB} />
            </div>

            <div>
                <label htmlFor="coe-c">c: </label>
                <input type="number" name="" id="coe-c" defaultValue={defC} />
            </div>

            <button type="submit">Solve</button>
        </form>
    );
}

export default CoeInput;
