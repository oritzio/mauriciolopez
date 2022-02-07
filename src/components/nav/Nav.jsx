import './nav.css';
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";

function Nav() {

    return (
        <div className="Nav">
            <GridWrap>
                <GridRow className="Row">
                    <GridColumn width={2}>
                        <img src="/images/logo.svg" alt="" />
                    </GridColumn>
                    <GridColumn width={10}>
                        <img className="MobileMenu" src="/images/menu.svg" alt="" />
                        <ul className="Menu">
                            <li><a href="#">Deposit</a></li>
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                    </GridColumn>
                </GridRow>
            </GridWrap>
        </div>
    )
}

export default Nav;