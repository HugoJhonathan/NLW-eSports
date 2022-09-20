// 1080 -> 18:00

export function convertMinutesToHourString(minutes: number) {
    const hours = Math.floor(minutes / 60)
    const minutes_ = minutes % 60
    return `${String(hours).padStart(2, '0')}:${String(minutes_).padStart(2, '0')}`
}