import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'

export const Contact = () => {
    const { data, isLoading, refetch } = useQuery (['cat'], () => {

        return Axios.get('https://catfact.ninja/fact').then ((res) => res.data)
    })

    if (isLoading) {
    return <h1>Loading</h1>
    } 

    return (
        <h1>
           His is contact page {data?.fact}
           <button onClick={refetch}>New fact</button>
         </h1>
    )
    
    
}
