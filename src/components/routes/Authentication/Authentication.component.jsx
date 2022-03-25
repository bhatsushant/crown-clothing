import SignUp from "../../SignUp/SignUp.component";
import SignIn from "../../SignIn/SignIn.component";
import './Authentication.styles.scss';

const Authentication = () => {
    return (
        <div className="authentication-container">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authentication;