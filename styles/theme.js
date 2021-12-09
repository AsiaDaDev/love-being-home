import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
    fonts: {
        heading: 'Podkova Bold',
        body: 'Montserrat Alternates Regular',
    },
    shadows: {
        dropShadow: '0px 6px 4px rgba(0, 0, 0, 0.25)'
    }
})

export default customTheme