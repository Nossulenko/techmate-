import Layout from '../../components/Layout';
import Private from '../../components/Auth/Private';
import Link from 'next/link';
import Admin from "../../components/Auth/Admin";

const AdminIndex = () => {
    return (

        <Layout>
            <Admin>
                <h2>Admin Dashboard</h2>
            </Admin>
        </Layout>

    );
};

export default AdminIndex;