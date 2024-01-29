import Header from '../components/header'
import pageTitle from '../hooks/pageTitle'

export default function Login() {
    pageTitle("Login");
    return(
        <>
            <Header/>
            <h2>Login Page</h2>
        </>
    )
}