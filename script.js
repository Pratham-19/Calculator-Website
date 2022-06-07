let str = "";
let buttons = document.querySelectorAll('button');

function fact(n) {
    let fac = 1;
    for (let i = 1; i < n + 1; i++) {
        fac *= i;
    }
    return fac;
}
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (item) => {
        if (item.target.innerHTML == '=') {
            try {
                let ans = eval(str);
                str = String(ans);
            } catch (err) {
                if (err.message == "missing ) after argument list") {
                    str += ')'
                    str = String(eval(str));
                } else {
                    str = "Syntax Error"
                }
                // window.alert(err.message);
            }
            document.querySelector('input').value = str;
        } else if (item.target.innerHTML == 'CE') {
            str = ""
            document.querySelector('input').value = str;
        } else if (item.target.innerHTML == '⌫') {
            n = str.length;
            str = str.slice(0, n - 1);
            document.querySelector('input').value = str;
        } else if (item.target.innerHTML == '⨉') {
            str += ' * ';
            document.querySelector('input').value = str;
        } else if (item.target.innerHTML == '÷') {
            str += ' / ';
            document.querySelector('input').value = str;
        } else if (item.target.innerHTML == 'e') {
            str += Math.E;
            document.querySelector('input').value = str;
        } else if (item.target.innerHTML == 'π') {
            str += Math.PI;
            document.querySelector('input').value = str;
        } else if (item.target.innerHTML == '+/-') {
            str += "*-1";
            str = String(eval(str));
            document.querySelector('input').value = str;
        } else if (item.target.innerHTML == 'x10<sup class="btnSup">x</sup>' || item.target.innerHTML == 'x') {
            if (str == "") {
                window.alert("Enter a value first !")
            } else {
                str += "Math.pow(10,"
                document.querySelector('input').value = str;
            }

        } else if (item.target.innerHTML == 'x<sup class="btnSup">y</sup>' || item.target.innerHTML == 'y') {
            if (str == "") {
                window.alert("Enter a value first !")
            } else {
                let a = str.slice(0, str.length);
                str = `Math.pow(${a},`
                document.querySelector('input').value = str;
            }

        } else if (item.target.innerHTML == 'log') {
            str += "Math.log10("
            document.querySelector('input').value = str;

        } else if (item.target.innerHTML == 'ln') {
            str += "Math.log("
            document.querySelector('input').value = str;

        } else if (item.target.innerHTML == '²√') {
            if (str == "") {
                window.alert("Enter a value first !")
            } else {
                let a = str.slice(0, str.length);
                str = `Math.sqrt(${a})`
                document.querySelector('input').value = str;
            }

        } else if (item.target.innerHTML == 'n!') {
            if (str == "") {
                window.alert("Enter a value first !")
            } else {
                let a = str.slice(0, str.length);
                str = fact(parseInt(a)) + ""
                document.querySelector('input').value = str;
            }

        } else if (item.target.innerHTML == '|x|') {
            if (str == "") {
                window.alert("Enter a value first !")
            } else {
                let a = str.slice(0, str.length);
                str = `Math.abs(${a})`
                document.querySelector('input').value = str;
            }

        } else if (item.target.innerHTML == '1/x') {
            if (str == "") {
                window.alert("Enter a value first !")
            } else {
                let a = str.slice(0, str.length);
                str = `1/${a}`
                document.querySelector('input').value = str;
            }

        } else if (item.target.innerHTML == 'tan') {
            str += "Math.tan("
            document.querySelector('input').value = str;

        } else if (item.target.innerHTML == 'cos') {
            str += "Math.cos("
            document.querySelector('input').value = str;

        } else if (item.target.innerHTML == 'sin') {
            str += "Math.sin("
            document.querySelector('input').value = str;

        } else {
            console.log(item.target)
            str = str + item.target.innerHTML;
            document.querySelector('input').value = str;
        }
    })
})
