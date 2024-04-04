import './card.css'
import inquisitiveLogo from '../../assets/logo/inquisitive_logo.svg'
import nasdaqLogo from '../../assets/logo/nasdaq_logo.svg'
import optusLogo from '../../assets/logo/optus_logo.svg'

const Card = () => {
    return (
        <div class="cards">
            <div class="card">
                <img src={inquisitiveLogo} />
                <div id="position">QA Engineer</div>
                <div id="duration">2022-now</div>
            </div>
            <div class="card">
                <img src={nasdaqLogo} />
                <div id="position">Automation Engineer</div>
                <div id="duration">2021-2022</div>
            </div>
            <div class="card">
                <img src={optusLogo} />
                <div id="position">Automation Test Analyst</div>
                <div id="duration">2019-2021</div>
            </div>
        </div>

    )
}

export default Card;