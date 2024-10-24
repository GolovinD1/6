window.onload = function () {
    let form = document.getElementById("form");
    let field1 = document.getElementById("field1");
    let sel = document.getElementById("sel");
    let box = document.getElementById("box");
    let check1 = document.getElementById("check1");
    let check2 = document.getElementById("check2");
    let check3 = document.getElementById("check3");
    let r1 = document.getElementById("r1");
    let r2 = document.getElementById("r2");
    let r3 = document.getElementById("r3");
    let select1 = document.getElementById("select1");

    function calc(i) {
        let p = field1.value;
        if (!Number.isNaN(p) && p >= 0) {
            let summ = 0;
            let summ1 ;
            if (i===1) {
                    summ = p * r1.getAttribute("value");
                }else if(i===2){
                    summ1 = select1.options[select1.selectedIndex];
                    summ = p * summ1.getAttribute("value");

                }else if(i===3){
                    summ = p * r3.getAttribute("value");
                    if (check1.checked) {
                        summ += p * check1.getAttribute("value");
                    }
                    if (check2.checked) {
                        summ += p * check2.getAttribute("value");
                    }
                    if (check3.checked) {
                        summ += p * check3.getAttribute("value");
                    }

                }
                document.getElementById("result").innerHTML = summ;
            } else {
                document.getElementById("result").innerHTML =
                "Введите кол-во товаров";
            }
        }

    select1.addEventListener("change", function () {
            calc(2);
    });

    check1.addEventListener("click", function () {
            calc(3);
    });

    check2.addEventListener("click", function () {
            calc(3);
    });

    check3.addEventListener("click", function () {
            calc(3);
    });

    r1.addEventListener("click", function () {
            sel.style.visibility = "hidden";
            box.style.visibility = "hidden";
            calc(1);
    });

    r2.addEventListener("click", function () {
            sel.style.visibility = "visible";
            box.style.visibility = "hidden";
            calc(2);
    });

    r3.addEventListener("click", function () {
            sel.style.visibility = "hidden";
            box.style.visibility = "visible";
            calc(3);
    });

    form.addEventListener("submit", function (fun) {
            fun.preventDefault();
    });
};
