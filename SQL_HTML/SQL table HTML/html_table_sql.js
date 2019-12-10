function sortTable1() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;
    var increse = true;
    if (rows[0].getElementsByTagName("TD")[0] > rows[1].getElementsByTagName("TD")[0]) {
        increse = false;
    }
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
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() && increse == true) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            } else if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase() && increse == false) {
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

    if (document.getElementById("demo").innerHTML == "") {
        document.getElementById("demo").innerHTML = "Table Sorted!";
    } else {
        document.getElementById("demo").innerHTML = "";
    }
}

function sortTable2() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;
    var increse = true;
    if (rows[0].getElementsByTagName("TD")[1] > rows[1].getElementsByTagName("TD")[1]) {
        increse = false;
    }
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
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() && increse == true) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            } else if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase() && increse == false) {
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

    if (document.getElementById("demo").innerHTML == "") {
        document.getElementById("demo").innerHTML = "Table Sorted!";
    } else {
        document.getElementById("demo").innerHTML = "";
    }
}

function sortTable3() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;
    var increse = true;
    if (rows[0].getElementsByTagName("TD")[2] > rows[1].getElementsByTagName("TD")[2]) {
        increse = false;
    }
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
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() && increse == true) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            } else if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase() && increse == false) {
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

    if (document.getElementById("demo").innerHTML == "") {
        document.getElementById("demo").innerHTML = "Table Sorted!";
    } else {
        document.getElementById("demo").innerHTML = "";
    }
}

function sortTable4() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;
    var increse = true;
    if (rows[0].getElementsByTagName("TD")[3] > rows[1].getElementsByTagName("TD")[3]) {
        increse = false;
    }
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
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() && increse == true) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            } else if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase() && increse == false) {
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

    if (document.getElementById("demo").innerHTML == "") {
        document.getElementById("demo").innerHTML = "Table Sorted!";
    } else {
        document.getElementById("demo").innerHTML = "";
    }
}
