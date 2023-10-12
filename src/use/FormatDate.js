
export default function useFormatDate(dataString) {
    const date = new Date(dataString)

    const formatter = new Intl.DateTimeFormat('ru')

    return formatter.format(date)
}