export default function calculateTime(totalLenghtInSeconds, playbackSpeed) {

    let calculatedTime = '';
    let timeSavedOrLost = ''

    const durationInSeconds = totalLenghtInSeconds / playbackSpeed; // after playback speed is applied
    const differenceInSeconds = totalLenghtInSeconds - durationInSeconds

    let hours = Math.floor(durationInSeconds / 3600);
    let minutes = Math.floor((durationInSeconds % 3600) / 60);
    let remainingSeconds = Math.floor(durationInSeconds % 60);

    if (hours <= 9) {
        hours = `0${hours}`
    }
    if (minutes <= 9) {
        minutes = `0${minutes}`
    }
    if (remainingSeconds <= 9) {
        remainingSeconds = `0${remainingSeconds}`
    }
    
    let diffHours = Math.abs(Math.floor(differenceInSeconds / 3600));
    let diffMinutes = Math.abs(Math.floor((differenceInSeconds % 3600) / 60));
    let diffRemainingSeconds = Math.abs(Math.floor(differenceInSeconds % 60));

    if (diffHours <= 9) {
        diffHours = `0${diffHours}`
    }
    if (diffMinutes <= 9) {
        diffMinutes = `0${diffMinutes}`
    }
    if (diffRemainingSeconds <= 9) {
        diffRemainingSeconds = `0${diffRemainingSeconds}`
    }


    calculatedTime = `${hours}:${minutes}:${remainingSeconds}`
    timeSavedOrLost = `${diffHours}:${diffMinutes}:${diffRemainingSeconds}`

    return { calculatedTime, timeSavedOrLost };

}