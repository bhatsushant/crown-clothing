import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrownLogo} from '../../../assets/crown.svg';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className='logo-container' to='/'>
                    <CrownLogo className='logo'/>
                </Link>
                <div className="nav-links-container"></div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;