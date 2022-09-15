import '../style/Footer.scss'
import moment from "moment"
import {Box, useColorModeValue} from "@chakra-ui/react";

/**
 * display the remaining time
 * @returns {JSX.Element}
 * @constructor
 */
const Footer = () => {
    const linkHoverColor = useColorModeValue('white', 'white');

    moment.locale('fr');
    return (
        <Box as="footer" className="footer">
            Nous sommes le {moment().format('LL')}
        </Box>

    )
}
export default Footer
