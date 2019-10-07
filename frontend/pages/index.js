import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
    return (

        <Layout>

            <Link href={"/"}>
                <a>HOME</a>
            </Link>
            <p> </p>
            <Link href={"/signin"}>
                <a>LOGIN PAGINA</a>
            </Link>
            <p> </p>
            <Link href={"/signup"}>
                <a>REGISTRATIE PAGINA</a>
            </Link>

        </Layout>

        );
};

export default Index;