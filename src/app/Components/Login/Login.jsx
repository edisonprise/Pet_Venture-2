import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, getUserInfo, registerNewUser, userExist } from "../../Firebase/firebaseConfig";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo, setUserState } from "../../../../redux/actions";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
export default function Login() {
  const router = useRouter()
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.userState)

  useEffect(() => {
    onAuthStateChanged(auth, handlerUserStateChanged)
    if (userState === 2) {
      router.push("/createUserName")
    }
    if (userState === 3) {
      router.push("/")
    }
  }, [userState])

  const handlerUserStateChanged = async (user) => {
    if (user) {
      const isRegistered = userExist(user.uid)
      if (isRegistered) {
        const userInfo = await getUserInfo(user.uid)
        if (userInfo?.processCompleted) {
          dispatch(setUserState(3))
          dispatch(setUserInfo(userInfo))

        }
        else {
          await registerNewUser({
            uid: user.uid,
            displayName: user.displayName,
            profilePicture: "",
            username: "",
            processCompleted: false
          })
          dispatch(setUserState(2))
          dispatch(setUserInfo(userInfo))
        }
      }
    } else {
      dispatch(setUserState(1))
      // dispatch(setUserInfo(userInfo))
    }
  }
  const handlerOnClick = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);

    async function signInWithGoogle(googleProvider) {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
  };


  return (
    <div>
      <button onClick={handlerOnClick}> Login with Google </button>
    </div>
  )

  // if (userState === 2) {
  //   return (
  //     <div>
  //       Estas autenticado...
  //     </div>
  //   )
  // }
  // if (userState === 3) {
  //   return (
  //     <div>
  //       Estas Registrado...
  //     </div>
  //   )
  // }


}
