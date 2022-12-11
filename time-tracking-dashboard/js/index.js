async function getDashboardData(url = "./data/data.json") {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const PERIODS = {
    daily: "day",
    weekly: "week",
    monthly: "month",
};

const makeDashboardItem = (data, period = "daily") => {
    const { title, timeframes } = data;
    const id = title.toLowerCase().replace(/ /g, "-");
    const { current, previous } = timeframes[period.toLowerCase()];

    const time = document.querySelector(
        `.dashboard__item_${id} .tracking-card__time`
    );
    const prevPeriod = document.querySelector(
        `.dashboard__item_${id} .tracking-card__prev-period`
    );

    prevPeriod.innerHTML = `Last ${
        PERIODS[period].charAt(0).toUpperCase() + PERIODS[period].slice(1)
    } - ${previous}hrs`;
    time.innerHTML = `${current}hrs`;
};

document.addEventListener("DOMContentLoaded", () => {
    getDashboardData().then((data) => {
        const selectors = document.querySelectorAll(".selector__item");
        data.map((activity) => makeDashboardItem(activity));

        selectors.forEach((selector) =>
            selector.addEventListener("click", function () {
                selectors.forEach((sel) =>
                    sel.classList.remove("selector__item_active")
                );
                selector.classList.add("selector__item_active");

                const currentPeriod = selector.innerHTML.trim().toLowerCase();
                data.map((activity) =>
                    makeDashboardItem(activity, currentPeriod)
                );
            })
        );
    });
});
