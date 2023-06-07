import { useSelector } from "react-redux"
export default function CreateUserName() {
    const userInfo = useSelector((state) => state.userInfo)
    const { displayName } = userInfo
    return (
        <div>{`bienvenido ${displayName}`}</div>
    )
}