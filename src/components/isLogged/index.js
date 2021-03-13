import React, { useContext } from 'react';
import { Context } from '../Store';
import { Link, useHistory  } from 'react-router-dom';
import firebase from '../../fireCinnection';

const IsLogeed = () => {
    const [state] = useContext(Context);
    let history = useHistory();
    function handleClick() {
        firebase.logout();
        localStorage.clear();
        history.push("/login");
    }

    return (
        <>
        <ul>
            {state && (
                <li>
                    <Link to="/login" className="white-text" onClick={handleClick}>
                        Sair
                    </Link>
                </li>
            )}
            </ul>
        </>
    )

}

export default IsLogeed;