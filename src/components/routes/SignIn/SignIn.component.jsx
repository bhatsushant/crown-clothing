import { signInWithGooglePopup, createUserDoc } from "../../../utils/firebase/firebase.utils";
import SignUp from "../../SignUp/SignUp.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = createUserDoc(user);
    }

    return (
        <div>
            <button onClick={logGoogleUser}>Sign In with Google</button>
            <SignUp />
        </div>
    )
}

export default SignIn;