function add(a, b, sum) {
    return sum(a,b);
}
function sum(x, y) {
    return x + y;
}

add(1, 2,sum());