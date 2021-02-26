// function showAndHideButtonBorder() {
//     var x = document.getElementById("toggleButton");
//     if (x.style.border == "hidden") {
//       x.style.border = "solid black 2px";
//     } else {
//       x.style.border = "hidden";
//       x.style.transition = "300ms"
//     }
//   }

function showAndHideButtonBorder() {
    var x = document.getElementById("tb1").getAttribute("aria-expanded");
    var y = document.getElementById("toggleButton");
    if (x == "true") {
        y.style.border = "hidden";
    } else {
        y.style.border = "solid black 2px";
    }
}

$(function() {
    $('[data-toggle="popover"]').popover()
})


// function hideModal1() {
//     var x = document.getElementById("exampleModal").style.display;
//     var y = document.getElementById("exampleModal");
//     var z = document.getElementById("exampleModalCenter").getAttribute("aria-hidden");
//     var z1 = document.getElementById("exampleModalCenter");
//     if (x == "" || z == "true") {
//         x = "none";
//         y.style.visibility = "hidden";
//         z1.style.visibility = "visible";


//     } else {
//         y.style.visibility = "hidden";
//     }
// }

function hideModal1() {
    var x = document.getElementById("exampleModal1").style.display;
    var y = document.getElementById("exampleModal1");
    var z = document.getElementById("exampleModalCenter").getAttribute("aria-hidden");
    var z1 = document.getElementById("exampleModalCenter");
    if (x == "" || z == "true") {
        x = "none";
        y.style.visibility = "hidden";
        z1.style.visibility = "visible";


    } else {
        y.style.visibility = "hidden";
    }
}

function showModal1() {
    var x = document.getElementById("exampleModal1").style.visibility;
    var y = document.getElementById("exampleModal1");
    var z = document.getElementById("exampleModalCenter").getAttribute("aria-hidden");
    var z1 = document.getElementById("exampleModalCenter");
    if (x == "hidden") {
        y.style.visibility = "visible";
        z1.style.visibility = "visible";


    } else {
        y.style.visibility = "hidden";
    }
}

function showModal2() {
    var x = document.getElementById("exampleModal").style.visibility;
    var y = document.getElementById("exampleModal");
    var z = document.getElementById("exampleModalCenter").getAttribute("aria-hidden");
    var z1 = document.getElementById("exampleModalCenter");
    var h1 = document.getElementById("exampleModalCenter2").style.visibility;
    var h = document.getElementById("exampleModalCenter2").getAttribute("aria-hidden");
    if (x == "hidden") {
        y.style.visibility = "visible";
        z1.style.visibility = "visible";
        h1 = "visible";
        h = "false";

    } else {
        y.style.visibility = "hidden";
    }
}