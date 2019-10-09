import Layout from '../components/Layout';
import SigninCompontent from '../components/auth/SignupComponent';
import Link from 'next/link';
import SigninComponent from "../components/Auth/SigninComponent";

const Signin = () => {
    return (

        <Layout>
            <h3 className="text-center pt-4 pt-4">log in</h3>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                 <SigninComponent/>
                </div>
            </div>
        </Layout>

    );
};

export default Signin;