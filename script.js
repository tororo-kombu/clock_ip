function updateClock() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    const weekdays = [
        "Sun", "Mon", "Tue", "Wed",
        "Thu", "Fri", "Sat"
    ];

    const weekday = weekdays[now.getDay()];

    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("date").textContent =
        `${year}/${month}/${day} ${weekday}`;

    const hm = document.getElementById("hm");
    const sec = document.getElementById("sec");

    hm.textContent =
        `${String(hours).padStart(2, "0")}:${minutes}`;

    sec.textContent = seconds;

    // 時間帯ごとの色設定
    const colorSettings = {
        0: "#564499",
        1: "#564499",
        2: "#564499",
        3: "#564499",

        4: "#d097ff",
        5: "#d097ff",

        6: "#52abff",
        7: "#52abff",
        8: "#52abff",
        9: "#52abff",
        10: "#52abff",

        11: "#f8ff9c",
        12: "#f8ff9c",
        13: "#f8ff9c",

        14: "#94eee9",
        15: "#94eee9",
        16: "#94eee9",

        17: "#f19864",
        18: "#f19864",
        
        19: "#8f82ff",
        20: "#8f82ff",
        21: "#8f82ff",
        22: "#8f82ff",
        23: "#8f82ff"
    };

    const color = colorSettings[hours];

    const clock = document.getElementById("clock");
    const date = document.getElementById("date");

    clock.style.color = color;
    date.style.color = color;
}

updateClock();
setInterval(updateClock, 1000);