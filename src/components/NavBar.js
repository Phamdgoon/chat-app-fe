import React, { useContext } from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Notification from "./chat/Notification";
function NavBar() {
    const { user, logoutUser } = useContext(AuthContext);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <h2>
                    <Link to="/" className=" text-decoration-none">
                        Chat App
                    </Link>
                </h2>
                {user && (
                    <span className="text-warning">
                        Logged in as {user?.name}
                    </span>
                )}
                <Nav>
                    <Stack direction="horizontal" gap={3}>
                        {user && (
                            <>
                                <Notification />
                                <Link
                                    onClick={() => logoutUser()}
                                    to="/login"
                                    className="text-decoration-none"
                                >
                                    Logout
                                </Link>
                            </>
                        )}

                        {!user && (
                            <>
                                <Link
                                    to="/login"
                                    className="text-decoration-none"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="text-decoration-none"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </Stack>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
