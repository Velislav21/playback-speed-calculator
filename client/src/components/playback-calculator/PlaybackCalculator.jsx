import { useEffect, useState } from "react"

import styles from "./PlaybackCalculator.module.css"

import calculateTime from "../../utils/calculateTime";

const initialState = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    playbackSpeed: 1.25
}
export default function PlaybackCalculator() {
    const [values, setValues] = useState(initialState);
    const [adjustedVideoLength, setAdjustedVideoLength] = useState('00:00:00');
    const [timeDifference, setTimeDifference] = useState('00:00:00');

    function onInputChange(e) {
        const { name, value } = e.target
        if (
            value.includes("-") || (value.startsWith("0") && name !== "playbackSpeed")
            || (value === "" || value === "0" && name === "playbackSpeed")
        ) {
            return;
        }

        setValues(prev => ({
            ...prev,
            [name]: +value
        }))
    }

    useEffect(() => {

        const totalSeconds = (values.hours * 3600) + (values.minutes * 60) + values.seconds;
        const { calculatedTime, timeSavedOrLost } = calculateTime(totalSeconds, values.playbackSpeed);

        setAdjustedVideoLength(calculatedTime)
        setTimeDifference(timeSavedOrLost);

    }, [values]);
    return (
        <form className={styles.calculator}>
            <h1>Playback Speed Calculator</h1>
            <p className={styles["intro-msg"]}>You can use this calculator to calculate the length of a video, podcast, movie etc... depending on the playback speed.</p>
            <div className={styles.row}>
                <p className={styles.label}>Time</p>
                <div className={styles.timeInputs}>
                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Hours</label>
                        <input
                            type="number"
                            name="hours"
                            step="0.01"
                            className={styles.input}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Minutes</label>
                        <input
                            type="number"
                            name="minutes"
                            step="0.01"
                            className={styles.input}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Seconds</label>
                        <input
                            type="number"
                            name="seconds"
                            step="0.01"
                            className={styles.input}
                            onChange={onInputChange}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <p className={styles.label}>Playback Speed</p>
                <div className={styles.speedSelector}>
                    <input
                        type="number"
                        name="playbackSpeed"
                        className={styles.select}
                        defaultValue="1.25"
                        step="0.01"
                        onChange={onInputChange}
                    />
                </div>
            </div>

            <hr className={styles.divider} />

            <div className={styles.row}>
                <p className={styles.label}>Video length after playback speed applied</p>
                <div className={styles.result}>
                    <input
                        type="text"
                        className={`${styles.input} ${styles.resultField}`}
                        readOnly
                        value={adjustedVideoLength}
                    />
                </div>
            </div>

            <div className={styles.row}>
                <p className={styles.speedLabel}>
                    {values.playbackSpeed >= 1 ? "Time saved at such speed" : "Extra needed time at such speed"}</p>
                <div className={styles.result}>
                    <input
                        type="text"
                        className={`${styles.input} ${styles.resultField}`}
                        readOnly
                        value={timeDifference}
                    />
                </div>
            </div>
        </form>
    )
}
