import {useState} from 'react';
import {APP_NAME} from "../config";
import Link from 'next/link';
import {signout, isAuth} from "../actions/auth";
import Router from "next/router";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem

} from 'reactstrap';

const  Header = () => {

    const [isOpen, setIsOpen]    = useState(false);
    const  toggle = () => {
        setIsOpen(!isOpen);
    };

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Link href="/">
                        <NavLink className="font-weight-bold">
                            {APP_NAME}
                        </NavLink>
                    </Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>


                                {!isAuth() && (

                                    <React.Fragment>
                                            <NavItem>
                                                <Link href="/signin">
                                                    <NavLink>Log in</NavLink>
                                                </Link>
                                            </NavItem>
                                            <NavItem>
                                                <Link href="/signup">
                                                    <NavLink>Registreer</NavLink>
                                                </Link>
                                            </NavItem>
                                    </React.Fragment>
                                )}

                                {isAuth() && (

                                    <NavItem>
                                        <NavItem>
                                            <NavLink style={{ cursor: 'pointer' }} onClick={() =>
                                                signout(() => Router.replace(`/signin`))}>
                                                log uit
                                            </NavLink>
                                        </NavItem>
                                </NavItem>

                                )}

                            {isAuth() && isAuth().role === 0 && (
                                <NavItem>
                                    <Link href="/user">
                                    <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                                    </Link>
                                </NavItem>

                            )}

                            {isAuth() && isAuth().role === 1 && (
                                <NavItem>
                                    <Link href="/admin">
                                        <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                                    </Link>
                                </NavItem>

                            )}

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
};

export default Header;