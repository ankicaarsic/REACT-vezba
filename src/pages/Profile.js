import { ChangeProfile } from "../components/ChangeProfile"
import { useContext } from "react"
import { AppContext } from "../App"

export const Profile = ()=> {
    const {username, setUsername} = useContext(AppContext)
    return (
         <div>
            PROFILE is USERNAME: {username}
            <ChangeProfile/>
            </div>
    )
}