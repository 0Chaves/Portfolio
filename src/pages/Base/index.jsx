import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Base(){
    return(
        <>
            <Header/>
            <Container>
                <Outlet/>
            </Container>
            <Footer/>
        </>
    )
}