import styles from "./PlaybackCalculator.module.css"

export default function PlaybackCalculator() {
    return <form className={styles.calculator}>
        <h1>Playback Speed Calculator</h1>
        <p className={styles["intro-msg"]}>You can use this calculator to calculate the length of a video, podcast, movie etc... depending on the playback speed.</p>
        <div className={styles.row}>
            <div className={styles.label}>Time</div>
            <div className={styles.timeInputs}>
                <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Hours</label>
                    <input type="text" className={styles.input} defaultValue="1" />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Minutes</label>
                    <input type="text" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Seconds</label>
                    <input type="text" className={styles.input} />
                </div>
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.label}>Playback Speed</div>
            <div className={styles.speedSelector}>
                <input
                    type="number"
                    className={styles.select}
                    defaultValue="1.05">
                </input>
            </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.row}>
            <div className={styles.label}>Calculated Time</div>
            <div className={styles.result}>
                <input
                    type="text"
                    className={`${styles.input} ${styles.resultField}`}
                    readOnly
                    value="00:57:08"
                />
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.label}>Time Saved</div>
        </div>

        <div className={styles.row}>
            <div className={styles.timeSavedLabel}>How much time can you save</div>
        </div>

        <div className={styles.row}>
            <div className={styles.speedLabel}>at such speed</div>
            <div className={styles.result}>
                <input
                    type="text"
                    className={`${styles.input} ${styles.resultField}`}
                    readOnly
                    value="00:02:51"
                />
            </div>
        </div>
    </form>
}