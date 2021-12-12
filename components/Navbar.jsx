import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Button, Flex, Box, Spacer } from  '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

import lovebeinghomerealestatelogo from '../assets/illustrations/love-being-home-real-estate-logo.svg';

// Logo - Displays the SVG Logo
const Logo = () => (
    <Box cursor="pointer" marginLeft="4">
        <Link href="/">
            <Image alt="Love Being Home Real Estate logo" src={lovebeinghomerealestatelogo}/>
        </Link>
    </Box>
)

const DesktopNavLink = ({ linkName, navText }) => (
    <Link href={linkName} passHref>
        <Button
            as="a" 
            w="100%"
            mr="8"
            aria-label="Home" 
            variant="link">
            {navText}
        </Button>
    </Link>
)

// NavBar - This component creates the navigation bar

export default function Navbar() {
    return (
        <Flex w="100%" p="2" paddingTop="4" shadow="dropShadow" justifyContent='center'>
            {/*This Flexbox is responsible for containing the Logo and Nav links in the middle.*/}
            <Flex w="1280px" justifyContent="space-between" alignItems='center' justifyContent="space-between">
                <Logo />
                <Spacer />
                {/*This Flexbox contains the desktop nav links that only appear for larger screens*/}
                <Flex w="50%" display={['none', 'none', 'none', 'flex']} alignItems="center">
                    <DesktopNavLink 
                        linkName="/"
                        navText="Home"
                    />
                    <DesktopNavLink 
                        linkName="/search"
                        navText="Search"
                    />
                    <DesktopNavLink 
                        linkName="/search?purpose=for-rent"
                        navText="Rent Property"
                    />
                    <DesktopNavLink 
                        linkName="/search?purpose=for-sale"
                        navText="Buy Property"
                    />
                </Flex>
                {/*This Flexbox contains the mobile icon nav smaller screens*/}
                <Flex display={['flex', 'flex', 'flex', 'none']}>
                    <Menu>
                        <MenuButton color="red.700" marginRight="8" as={IconButton} icon={< FcMenu/>} variant="outlined" />
                        <MenuList>
                            <Link href="/" passHref>
                                <MenuItem icon={<FcHome/>}>Home</MenuItem>
                            </Link>
                            <Link href="/search" passHref>
                                <MenuItem icon={<BsSearch/>}>Search</MenuItem>
                            </Link>
                            <Link href="/search?purpose=for-sale" passHref>
                                <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
                            </Link>
                            <Link href="/search?purpose=for-rent" passHref>
                                <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Flex>
    )
}
