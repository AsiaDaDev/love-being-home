import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';

// Layout Component - Creates the general layout of the App
const Layout = ({ children }) => (
    <div>
        <Head>
            <title>Love Being Home Real Estate</title>
        </Head>
        <Box maxWidth="1280px" m="auto">
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </div>
)

export default Layout; 