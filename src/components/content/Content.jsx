import './content.css';
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";

function Content() {

    return (
        <GridWrap>
            <GridRow className="Row">
                <GridColumn className="Col">
                    <img src="/images/asterisk.svg" alt="" />
                    <div className="Content">
                        <h1>All the <b>experience</b> in&nbsp;the new credit card</h1>
                        <img src="/images/arrow.svg" alt="" />
                        <p>Simple transfers, payments for utilities, functional statement,
                            card settings, for which you used to have to go to the branch online-banking
                        </p>
                        <div className="HeaderButtons">
                            <a href="#" className="PrimaryButton">Order a card</a>
                            <a href="#" className="SecondaryButton">How it works <img className="TinyArrow" src="/images/tinyarrow.svg" alt="" /></a>
                        </div>
                        <div className="HeaderInformation">
                            <div className="HeaderInfoBox">
                                <div className="HeaderInfoLabel">Active users</div>
                                <div className="HeaderInfoValue">5000+</div>
                            </div>
                            <div className="HeaderInfoBox">
                                <div className="HeaderInfoLabel">Download</div>
                                <div className="HeaderInfoValue">30.3k</div>
                            </div>
                            <div className="HeaderInfoBox">
                                <div className="HeaderInfoLabel">Reviews</div>
                                <div className="HeaderInfoValue">1200+</div>
                            </div>
                        </div>
                        <img className="CardoMobile" src="/images/cardo.svg" alt="" />
                    </div>
                </GridColumn>
            </GridRow>
        </GridWrap>
    )
}

export default Content;