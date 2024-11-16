import { useImmerReducer } from "use-immer";
import Quadratic from "./pres/Quadratic";
import calcQuadratic from "./util/calcQuadratic";

const QuadraticContainer = () => {

    const reducer = (draft, action) => {

        const {type, payload} = action;

        const newDraft = { didChange: false, data: {...draft} }

        switch (type) {
            case 'calculate':
                const {a, b, c} = payload;
                const result = calcQuadratic(a, b, c);

                newDraft.data = {...payload, ...result};
                newDraft.didChange = true;
                
                break;
            default:
        }

        if (newDraft.didChange) {
            return newDraft.data;
        }
    }

    const initialValues = {
        a: 1, b: 8, c: -48,
        D: 256, x1: 4, x2: -12
    };

    const [quadValues, dispatch] = useImmerReducer(reducer, initialValues);

    return (
        <div>
            <Quadratic quadValues={quadValues} dispatch={dispatch} />
        </div>
    );
}

export default QuadraticContainer;
