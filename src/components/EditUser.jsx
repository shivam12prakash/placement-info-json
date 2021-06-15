import { useEffect, useState } from "react";
import { FormGroup,FormControl,InputLabel,Input,Button,makeStyles,Typography } from "@material-ui/core";
import { editUser, getUsers } from "../Service/api";
import { useHistory,useParams } from "react-router";


const initialValues = {
    "id": '',
    "regNo": '',
    "name": '',
    "Branch": '',
    "email": '',
    "GPA": '',
    "phone": ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '2% 0 0 25%',
        '& > *': {
            marginTop: 15
        }
    }
})


const EditUser = () => {
    const [ user,setUser ] = useState(initialValues);
    const { regNo,name,Branch,email,GPA,phone } = user;
    const history = useHistory();
    const { id } = useParams();
    const classes = useStyles();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async() => {
        const response =  await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async () => {
        await editUser(id, user);
        history.push("/all");
    }


    return ( 
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Details</Typography>
            <FormControl>
                <InputLabel>ID</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name='id' value={id} />
            </FormControl>
            <FormControl>
                <InputLabel>Registration Number</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name='regNo' value={regNo} />
            </FormControl>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name='name' value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>Branch</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name='Branch' value={Branch} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name='email' value={email} />
            </FormControl>
            <FormControl>
                <InputLabel>GPA</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name='GPA' value={GPA} />
            </FormControl>
            <FormControl>
                <InputLabel>phone</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name='phone' value={phone} />
            </FormControl>
            <Button variant="contained" onClick={() => editUserDetails()} color="primary">Edit</Button>
        </FormGroup>
    )
}

export default EditUser;