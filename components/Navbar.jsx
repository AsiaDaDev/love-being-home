import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from  '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

// NavBar - This component creates the navigation bar

const Navbar = () => (
    <Flex p="2" borderColor="gray.100" borderBottom="1px">
        <Box color="blue.400" fontSize="3xl" fontWeight="bold">
            <Link href="/" paddingLeft="2">Love Being Home Real Estate</Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton color="red.400" as={IconButton} icon={< FcMenu/>} variant="outlined" />
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
);

export default Navbar;