import React, { useState, useEffect } from 'react';
import userservice from '../services/UserServices';
import { Navbar, Nav,Form,FormControl,Button }  from 'react-bootstrap';


const User = () => {
    const [users, setUsers] = useState([ ]);

    useEffect(() => {
        userservice.getUsers()
            .then(
                res => {
                const { data } = res;
                setUsers( data );// remove curly braces here
              });
    }, []);


    return (
        <div>
                <Navbar bg="dark" variant="dark">
                  <Navbar.Brand href="#home">TecnoTab</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                </Navbar>
                <h1 className = "text-center">Users List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>email Id</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map( user =>
                                    <tr key = {user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                    </tr>
                             )
                             
                        }
                    </tbody>
                </table>
            </div>
    );
}
export default User;