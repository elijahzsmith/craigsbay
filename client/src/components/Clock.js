import React, { useState } from "react";

function Clock({ end_time }) {
    const [timeLeft, setTimeLeft] = useState("")

    const countdown = new Date(end_time).getTime();

    setInterval(function () {
        let now = new Date().getTime();
        let timeLeft = countdown - now

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`)
    }, 1000)

    return (
        <>{timeLeft}</>
    )
}

export default Clock;