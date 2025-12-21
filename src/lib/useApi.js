import { useCallback, useState } from "react"

export const useAPI = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (apicall) => {
        try {
            setLoading(true)
            setError(null)
            return await apicall()
        } catch (error) {
            setError(error?.response?.data || error.message);
            throw error
        } finally {
            setLoading(false)
        }
    }, [])

    return { loading, error, request }
}