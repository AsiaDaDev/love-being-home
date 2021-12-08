import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import Property from '../components/Property';
import SearchFilters from '../components/SearchFilters';
import noresult from '../assets/illustrations/noresult.svg';
import { baseUrl, fetchApi } from '../utils/fetchApi';

const Search = ({ properties }) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex
                p="2"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
                bg="gray.100"
                borderColor="gray.200"
                borderBottom="1px"
                fontWeight="black"
                fontSize="lg"
                onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
            >
                <Text>Property Filters</Text>
                <Icon w="7" paddingLeft="2" as={BsFilter}/>
            </Flex>
            
            {searchFilters && <SearchFilters />}
            
            <Text p="4" fontSize="2xl" fontWeight="bold">
                Properties {router.query.purpose}
            </Text>
            
            <Flex flexWrap="wrap">
                {properties.map((property) => <Property property={property} key={property.id} />)}
            </Flex>
            
            {properties.length === 0 && (
                <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
                    <Text fontSize="3xl" marginTop="3">Oh no... Seems there were no properties found.</Text>
                    <Image alt="no result" src={noresult}/>
                </Flex>
            )}
        </Box>
    )
}

export default Search;

export async function getStaticProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc'
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&minPrice=${minPrice}&maxPrice=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
  
    return {
      props: {
        properties: data?.hits,
      }
    }
  }