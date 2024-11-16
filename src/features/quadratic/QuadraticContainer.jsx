import Quadratic from "./pres/Quadratic";

const QuadraticContainer = () => {

    return (
        <div>
            <Quadratic
                a={1}
                b={8}
                c={-48}
                D={256}
                x1={4}
                x2={-12}
            />
        </div>
    );
}

export default QuadraticContainer;
