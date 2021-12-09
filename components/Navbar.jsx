import Link from 'next/link';
import Image from 'next/image';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from  '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

import lovebeinghomerealestatelogo from '../assets/illustrations/love-being-home-real-estate-logo.svg';

// NavBar - This component creates the navigation bar

export default function Navbar() {
    return (
        <Flex w="100%" p="2" paddingTop="4" shadow="dropShadow" justifyContent='center'>
            <Flex w="1280px" justifyContent="space-between" alignItems='center'>
                <Box cursor="pointer" marginLeft="4">
                    <Link href="/">
                        <Image alt="Love Being Home Real Estate logo" src={lovebeinghomerealestatelogo}/>
                    </Link>
                </Box>
                <Spacer />
                <Box>
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
                </Box>
            </Flex>
        </Flex>
    )
}
