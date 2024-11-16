
export default function calcQuadratic(a, b, c) {

    const D = b*b - 4*a*c;

    const x1Long = (-b+Math.sqrt(D))/(2*a);
    const x2Long = (-b-Math.sqrt(D))/(2*a);

    const x1 = Math.round(x1Long * 100) / 100;
    const x2 = Math.round(x2Long * 100) / 100;

    return {D, x1, x2};
}
