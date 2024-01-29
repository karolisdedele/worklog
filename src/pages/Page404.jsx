import Header from '../components/header'
import pageTitle from '../hooks/pageTitle'

export default function Page404() {
    pageTitle("Page not found")
    return(
        <>
            <Header/>
            <h2>Page not found</h2>
        </>
    )
}