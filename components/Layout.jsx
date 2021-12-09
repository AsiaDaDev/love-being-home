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
        <header>
            <Navbar />
        </header>
        <Box maxWidth="1280px" m="auto">
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