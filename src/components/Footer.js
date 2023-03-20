import '../style/Footer.scss'
import moment from "moment"
import {Box, useColorModeValue} from "@chakra-ui/react";

/**
 * display the remaining time
 * @returns {JSX.Element}
 * @constructor
 */
const Footer = () => {

    moment.locale('fr');
    return (
        <div>
            <Box as="footer" className="footer" display="flex" justifyContent="space-around">
                <p>Nous sommes le {moment().format('LL')}</p>
                <a href="https://singe.life" className="underdecoration" target="_blank">Admin Panel</a>
            </Box>

        </div>

    )
}
export default Footer
