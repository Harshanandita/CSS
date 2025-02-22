const up = document.querySelector(".up");
const down = document.querySelector(".down");

let scrolling = false;

function scrollPage(direction) {
    if (scrolling) return;
    scrolling = true;

    let y = Math.floor(window.scrollY);
    let viewportHeight = Math.floor(window.innerHeight);
    let scrollHeight = viewportHeight;

    if (y % viewportHeight === 0) {}
    else {
        if (direction < 0) {
            scrollHeight = y % viewportHeight;
        }
        else {
            scrollHeight = viewportHeight - (y % viewportHeight);
        }

        if (scrollHeight < 10) {
            scrollHeight += viewportHeight;
        }
    }

    window.scrollBy({
        top: direction * scrollHeight,
        behavior: "smooth"
    });

    setTimeout(() => {
        scrolling = false;
    }, 600);
} 

up.addEventListener("click", () => scrollPage(-1));
down.addEventListener("click", () => scrollPage(1));

function updateButtons() {
    if (window.scrollY < 10) {
        up.classList.add("hidden");
    }
    else {
        up.classList.remove("hidden");
    }

    if (window.scrollY + window.innerHeight + 10 > document.body.offsetHeight) {
        down.classList.add("hidden");
    }
    else {
        down.classList.remove("hidden");
    }
}

window.addEventListener("scroll", updateButtons);

updateButtons();

/*

let scrollInterval;

function startContinuousScroll(direction) {
    stopContinuousScroll();
    scrollInterval = setInterval(() => {
        window.scrollBy(0, direction * 10);
    }, 10);
}

up.addEventListener("mousedown", () => {
    setTimeout(() => {}, 600);
    startContinuousScroll(-1);
});

down.addEventListener("mousedown", () => {
    setTimeout(() => {}, 600);
    startContinuousScroll(1);
});

function stopContinuousScroll() {
    clearInterval(scrollInterval);
}

// up.addEventListener("mouseup", () => {
//     setTimeout(() => {}, 600);
//     stopContinuousScroll();
// });

// down.addEventListener("mouseup", () => {
//     setTimeout(() => {}, 600);
//     stopContinuousScroll();
// });

document.addEventListener("mouseup", () => {
    setTimeout(() => {}, 600);
    stopContinuousScroll();
});

document.addEventListener("mouseleave", () => {
    setTimeout(() => {}, 600);
    stopContinuousScroll();
});

*/