import Layout from '../components/Layout';
import SignupCompontent from '../components/auth/SignupComponent';
import Link from 'next/link';

const Signup = () => {
    return (

        <Layout>
            <h3 className="text-center pt-4 pt-4">Registreren</h3>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <SignupCompontent/>
                </div>
            </div>
        </Layout>

    );
};

export default Signup;