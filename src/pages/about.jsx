import Header from '../components/header'
import pageTitle from '../hooks/pageTitle'



export default function About() {
    pageTitle("About");
    return(
        <>
            
            <Header/>
            <h2>About page</h2>
        </>
    )
}