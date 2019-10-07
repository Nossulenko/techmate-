import Layout from '../components/Layout';
import SignupCompontent from '../components/auth/SignupComponent';
import Link from 'next/link';

const Signup = () => {
    return (

        <Layout>
            <h3>Registreren</h3>
                <SignupCompontent/>
        </Layout>

    );
};

export default Signup;