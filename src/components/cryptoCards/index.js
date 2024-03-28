import { FaEuroSign } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io5";
import { PiCurrencyGbpBold } from "react-icons/pi";
import './index.css'

const CryptoCards = (props) => {
    const { cardDetails } = props
    const { eur, usd, gbp } = cardDetails

    return (
        <div className="cryptoCards">
            <div className="card">
                <FaEuroSign className="cryptoImage" />
                <p className="cardtext">{`Code - ${eur.code}`}</p>
                <p className="cardtext">{`Description - ${eur.description}`}</p>
                <p className="rate">{`Rate - ${eur.rate}`}</p>
            </div>
            <div className="card">
                <PiCurrencyGbpBold className="cryptoImage" />
                <p className="cardtext">{`Code - ${gbp.code}`}</p>
                <p className="cardtext">{`Description - ${gbp.description}`}</p>
                <p className="rate">{`Rate - ${gbp.rate}`}</p>
            </div>
            <div className="card">
                <IoLogoUsd className="cryptoImage" />
                <p className="cardtext">{`Code - ${usd.code}`}</p>
                <p className="cardtext">{`Description - ${usd.description}`}</p>
                <p className="rate">{`Rate - ${usd.rate}`}</p>
            </div>
        </div>
    )
}

export default CryptoCards