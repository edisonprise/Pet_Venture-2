import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebaseConfig";
export default function Login() {
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
