
import * as style from './coe-input.module.css';

const CoeInput = ({defA, defB, defC, dispatch}) => {

    const onSolve = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const formValues = Array.from( formData.entries());

        const formObj = formValues.reduce((acc, item) => {

            acc[item[0]] = +item[1];
            
            return acc;
        }, {});

        dispatch({ type: 'calculate', payload: formObj })
    }

    return (
        <form onSubmit={onSolve} className={style['coe-input']} >
            <h2>Input</h2>

            <div>
                <label htmlFor="coe-a">a: </label>
                <input type="number" name="a" data-testid="coe-a" id="coe-a" defaultValue={defA} />
            </div>

            <div>
                <label htmlFor="coe-b">b: </label>
                <input type="number" name="b" data-testid="coe-b" id="coe-b" defaultValue={defB} />
            </div>

            <div>
                <label htmlFor="coe-c">c: </label>
                <input type="number" name="c" data-testid="coe-c" id="coe-c" defaultValue={defC} />
            </div>

            <button data-testid="solve-btn" type="submit">Solve</button>
        </form>
    );
}

export default CoeInput;
