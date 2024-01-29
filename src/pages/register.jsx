import Header from '../components/header'
import pageTitle from '../hooks/pageTitle'

export default function Register() {
    pageTitle("Register")
    return(
        <>
            <Header/>
            <h2>Register Page</h2>
        </>
    )
}