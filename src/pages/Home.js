import { useContext } from "react"
import { AppContext } from "../App"

export const Home = () => {
    const { username } = useContext(AppContext)
    return(
        <div>
            <h1>THIS IS A HOME PAGE AND USER NAME IS: {username}</h1>
        </div>
    )
}