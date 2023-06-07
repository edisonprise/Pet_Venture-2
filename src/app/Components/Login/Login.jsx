import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebaseConfig";
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
    if (userState) {
      router.push("/createUserName")
    }
  }, [userState])

  const handlerUserStateChanged = (user) => {
    if (user) {
      dispatch(setUserState(true))
      dispatch(setUserInfo(user))
    } else {
      console.log("no hay nadie")
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
  );
}
