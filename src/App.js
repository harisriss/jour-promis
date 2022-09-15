import './App.scss';
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import { ChakraProvider } from '@chakra-ui/react'

function App() {


    return (
        <ChakraProvider>
            <Navbar/>
            <Counter/>
            <Footer/>
        </ChakraProvider>
    );
}

export default App;
