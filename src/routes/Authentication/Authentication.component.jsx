import SignUp from "../../components/SignUp/SignUp.component";
import SignIn from "../../components/SignIn/SignIn.component";
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