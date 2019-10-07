import Layout from '../components/Layout';
import SignupCompontent from '../components/auth/SignupComponent';
import Link from 'next/link';

const Signup = () => {
    return (

        <Layout>
                <a>Registratie pagina</a>
                <SignupCompontent/>
        </Layout>

    );
};

export default Signup;