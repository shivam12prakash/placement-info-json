import { useEffect,useState } from "react";
import { Table,TableHead,TableRow,TableCell,TableBody,makeStyles,Button } from "@material-ui/core";
import { getUsers,deleteUser } from "../Service/api";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            background: '#000000',
            color: '#FFFFFF',
            fontSize: 20
        }
    },
    row: {
        '& > *': {
            fontSize: 20
        }
    }
})


const Users = () => {

    const [users,setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async() => {
        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }

    const deleteUserData = async(id) => {
        await deleteUser(id)
        getAllUsers();
    }


    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Registration Number</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Branch</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>CGPA</TableCell>
                    <TableCell>phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow className={classes.row}>
                            <TableCell>{user.regNo}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.Branch}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.GPA}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" component={Link} to={`/edit/${user.id}`} style={{margin: '10 0 10 0'}}>Edit</Button>
                                <Button variant="contained" color="secondary"  onClick={()=> deleteUserData(user.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default Users;