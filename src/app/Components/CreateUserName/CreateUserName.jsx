
import { useFormik } from "formik"
import { existsUserName, updateUser } from "@/app/Firebase/firebaseConfig"
import { useSelector, useDispatch } from "react-redux"
import { setUserState } from "../../../../redux/actions"
import { useRouter } from "next/router"
import { useEffect } from "react"

const validate = async values => {
    const exists = await existsUserName(values)
    const errors = {}
    if (!values.userName) {
        errors.userName = "Requerido"
    } else if (exists) {
        errors.userName = "Por favor elija otro nombre de usuario"
    }
    return errors
}
export default function CreateUserName() {
    const router = useRouter()
    const dispatch = useDispatch()
    const userInfo = useSelector((state) => state.userInfo)
    const userState = useSelector((state) => state.userState)

    useEffect(() => {
        if (userState === 3 || userState === 1) {
            router.push("/")
        }
    })
    const { displayName } = userInfo
    const formik = useFormik({
        initialValues: {
            userName: ""
        },
        validate,
        onSubmit: async values => {
            const tmp = { ...userInfo }
            tmp.username = values.userName
            tmp.processCompleted = true
            await updateUser(tmp)
            dispatch(setUserState(3))
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>{`bienvenido ${displayName}, crea tu nombre de usuario`}</div>
            <label htmlFor="userName">Nombre de usuario: </label>
            <input
                type="text"
                name="userName"
                id="userName"
                onChange={formik.handleChange}
                value={formik.values.userName}
            />
            {formik.errors.userName ? <div>{formik.errors.userName}</div> : null}
            <button type="submit">Crear</button>

        </form>
    )
}