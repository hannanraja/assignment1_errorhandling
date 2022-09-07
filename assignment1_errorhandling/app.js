var btnclick = document.getElementById("btn");
btnclick.addEventListener("click", () => {
        var one = document.getElementById("x").value;
    var two = document.getElementById("y").value;
    var printing = document.getElementById("results");
        var someresult = mycalc(one, two);
        printing.innerHTML = someresult;
});

function mycalc(x, y) {
    try {
        const result = Math.ceil((x ** 2) + (5 * y));
    }
    catch (error) {
        console.log(error)
    }
        return result;
}