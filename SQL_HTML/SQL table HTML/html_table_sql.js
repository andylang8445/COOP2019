function sortTable1() {
    var x = document.getElementById("id_sec");
    var chk_sorted = true;
    if (x.innerHTML === "id &#62;") {
        x.innerHTML = "id &#60;";
        chk_sorted = false;
    } else {
        x.innerHTML = "id &#62;";
    }
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;
    /*Make a loop that will continue until
    no switching has been done:*/

    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        /*Loop through all table rows (except the
        first, which contains table headers):*/

        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() && chk_sorted === true) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            } else if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase() && chk_sorted === false) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }

    if (document.getElementById("demo").innerHTML === "") {
        document.getElementById("demo").innerHTML = "Table Sorted!";
    } else {
        document.getElementById("demo").innerHTML = "";
    }
}

function sortTable2() {
    var x = document.getElementById("name_sec");
    var chk_sorted = true;
    if (x.innerHTML === "name &#62;") {
        x.innerHTML = "name &#60;";
        chk_sorted = false;
    } else {
        x.innerHTML = "name &#62;";
    }
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;
    /*Make a loop that will continue until
    no switching has been done:*/

    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        /*Loop through all table rows (except the
        first, which contains table headers):*/

        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() && chk_sorted === true) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            } else if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase() && chk_sorted === false) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }

    if (document.getElementById("demo").innerHTML === "") {
        document.getElementById("demo").innerHTML = "Table Sorted!";
    } else {
        document.getElementById("demo").innerHTML = "";
    }
}

function sortTable3() {
    var x = document.getElementById("birthday_sec");
    var chk_sorted = true;
    if (x.innerHTML === "birthday &#62;") {
        x.innerHTML = "birthday &#60;";
        chk_sorted = false;
    } else {
        x.innerHTML = "birthday &#62;";
    }
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;
    /*Make a loop that will continue until
    no switching has been done:*/

    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        /*Loop through all table rows (except the
        first, which contains table headers):*/

        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[2];
            y = rows[i + 1].getElementsByTagName("TD")[2];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() && chk_sorted === true) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            } else if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase() && chk_sorted === false) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }

    if (document.getElementById("demo").innerHTML === "") {
        document.getElementById("demo").innerHTML = "Table Sorted!";
    } else {
        document.getElementById("demo").innerHTML = "";
    }
}

function sortTable4() {
    var x = document.getElementById("age_sec");
    var chk_sorted = true;
    if (x.innerHTML === "age &#62;") {
        x.innerHTML = "age &#60;";
        chk_sorted = false;
    } else {
        x.innerHTML = "age &#62;";
    }
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;
    /*Make a loop that will continue until
    no switching has been done:*/

    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        /*Loop through all table rows (except the
        first, which contains table headers):*/

        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[3];
            y = rows[i + 1].getElementsByTagName("TD")[3];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() && chk_sorted === true) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            } else if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase() && chk_sorted === false) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }

    if (document.getElementById("demo").innerHTML === "") {
        document.getElementById("demo").innerHTML = "Table Sorted!";
    } else {
        document.getElementById("demo").innerHTML = "";
    }
}
