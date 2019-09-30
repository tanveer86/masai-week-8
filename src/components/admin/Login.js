import React from 'react';
import styles from '../style.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Login(){
    return(
        <React.Fragment>
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mt-5">
                        <h1>Login to Access Admin</h1>
                    </div>
                </div>
            </div>
            <div className={styles.adminLogin}>
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-6">
                            <form>
                                <div class="form-group">
                                    <label>Email address</label>
                                    <input type="text" class="form-control" placeholder="Enter Username" required />
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control" placeholder="Enter Password" required />
                                </div>
                                <Link to="/dashboard"><button type="submit" class="btn btn-danger">Login Now</button></Link>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;