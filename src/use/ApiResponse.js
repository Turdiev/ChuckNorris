import axios from "axios";

const MAIN_API = 'https://api.chucknorris.io'
export default async function useApiResponse({method, url, params = {}}) {
    try {
        let response = null

        await axios({
            method: method,
            url: `${MAIN_API}${url}`,
            params: params,
            headers: {}
        })
            .then((res) => {
                response = res.data
            })
        return response
    } catch (error) {
        console.error('Ошибка при получении данных:', error)
    }
}