import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Heading, Text, Button, Divider } from '@chakra-ui/react';

import Property from '../components/Property';
import {baseUrl, fetchApi } from '../utils/fetchApi';

import buildings from '../assets/illustrations/buildings.svg';

// Landing Page Component - Appears above the fold on the Home Page
const Landing = ({ head1, head2, landdesc, rentlink, rentbutton, buylink, buybutton, searchlink, comprop }) => (
  <Box>
    <Flex mt="20" justifyContent="center">
      <Image src={buildings} alt="building-decor"/>
      <Box w="40%" mt="16" mr="4" textAlign="center" alignItems="center">
        <Heading fontSize="3vw" fontWeight="700">{head1}</Heading>
        <Heading fontSize="2vw" fontWeight="700" mt="2">{head2}</Heading>
        <Text fontSize="1.5vw" marginTop="2">{landdesc}</Text>
      </Box>
    </Flex>
    <Flex bg="gray.600" height="180" alignItems="center" justifyContent="space-evenly">
      <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
        <Button as="a" m="4" fontSize="lg" size='md' variant="solid" shadow="dark-lg">
          <Link href={rentlink}>{rentbutton}</Link>
        </Button>
        <Button as="a" m="4" fontSize="lg" size='md' variant="solid" shadow="dark-lg">
          <Link href={buylink}>{buybutton}</Link>
        </Button>
        <Button as="a" m="4" fontSize="lg" size='md' variant="solid" shadow="dark-lg">
          <Link href={searchlink}>{comprop}</Link>
        </Button>
      </Flex>
    </Flex>
  </Box>
)

// Banner Component - Appears below the fold on the Home Page 
const Banner = ({ imageUrl, purpose, title1, title2, desc1, desc2, linkName, buttonText }) => (
  <Flex 
  flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={300} alt="banner"/>
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
        <Heading fontSize="3vw" fontWeight="bold">{title1} <br />{title2}</Heading>
        <Text color="gray.700" paddingTop="3" paddingBottom="3" fontSize="2.5vw">{desc1} <br /> {desc2}</Text>
        <Button fontSize="lg">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
  </Flex>
)

// Home Content - Sets up Banner details and the property galleries
export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <Box>
      <Landing
        head1="Renting? Buying?"
        head2="Look no further!"
        landdesc="Find the ideal apartment, home, or office space quick and easy. We make sure people love where they're staying!"
        rentlink="/search?purpose=for-rent"
        rentbutton="Rent a Property"
        buylink="/search?purpose=for-sale"
        buybutton="Buy a Property"
        searchlink="/search"
        comprop="Commercial Properties"
      />

      <Banner 
        purpose={'RENT A HOME'} 
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />

      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
      </Flex>

      <Divider />

      <Banner 
        purpose="BUY A HOME"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />

      <Flex flexWrap="wrap">
      {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
    </Box>
  )
}

// Async Function - Contains API calls and returns the data that appears on the property gallery
export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }
}