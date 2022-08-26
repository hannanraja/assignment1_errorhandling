var btnclick = document.getElementById("btn");
btnclick.addEventListener("click", () => {
        var one = document.getElementById("x").value;
    var two = document.getElementById("y").value;
    var printing = document.getElementById("results");
    try {
        var someresult = mycalc(one, two);
        printing.innerHTML = someresult;
    }
    catch (errorr) {
       console.log( errorr)
    }
});

function mycalc(x, y) {
        const result = Math.ceil((x**2) + (5 * y));
    return result;
}