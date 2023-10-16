const span = document.querySelector(".span")
span.onclick = () => {
    if (span.innerHTML === "₱") {
        span.innerHTML = "$"
    } else if (span.innerHTML === "$") {
        span.innerHTML = "¥"
    } else {
        span.innerHTML = "₱"
    }
}