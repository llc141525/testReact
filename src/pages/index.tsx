// import Test2 from "../components/test2"
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom"
export default function Index() {
    const navigate = useNavigate();
    return (
        <Button variant="outlined" color="secondary" onClick={()=>{navigate('/login')}}>
          去登陆
        </Button>
    )
}