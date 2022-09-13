import '../style/Footer.scss'
import moment from "moment"

/**
 * display the remaining time
 * @returns {JSX.Element}
 * @constructor
 */
const Footer = () => {
    moment.locale('fr');
    return (
        <div className='footer'>
            Nous sommes le {moment().format('LL')}
        </div>
    )
}
export default Footer
