import Header from '../components/header'
import pageTitle from '../hooks/pageTitle'

export default function Contact() {
    pageTitle("Contact");
    return(
        <>
            <Header/>
            <h2>Contact page</h2>
        </>
    )
}