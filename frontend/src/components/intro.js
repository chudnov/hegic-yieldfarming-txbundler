import React, { useContext } from 'react';
import { Row, Container, Col, Button } from 'reactstrap';
import { WalletContext } from '../context/Wallet';

function Intro(props) {
    const connect = useContext(WalletContext).connect
    return (
    <Container>
        <Row style={{marginTop:'10vh', minHeight:'50vh', zIndex:'-1', textAlign:'center'}}>
            <Col sm='12' md={{ size: 6, offset: 3}}>
                    <h1 style={{
                        color:'#45fff4',
                        fontFamily:'Jura',
                        fontWeight:'bold',
                        lineHeight:'125%',
                        fontSize:'46px',
                        textTransform:'uppercase'
                        }}>rHegic swap yield farming</h1>
                    <div style={{color: '#defefe', fontFamily:'Exo 2', fontWeight:'500', lineHeight:'150%'}}>
                    Service for converting swapped Hegic directly into writeETH, writeBTC, and/or yvHEGIC. Just a button click away.   
      		    </div>
                    <div style={{marginTop:'25px', display:'flex', justifyContent:'center'}}>
                    <Button style={{
                        color:'#15203d',
                        fontWeight:'bold',
                        fontFamily:'Jura',
                        letterSpacing:'.1em',
                        background:'transparent',
                        borderImageSource:'url(https://www.hegic.co/assets/img/button-primary.svg)', 
                        borderImageSlice:'20',
                        borderStyle:'solid',
                        boxSizing:'border-box',
                        borderRadius:'2px',
                        borderImageWidth:'50px'}} 
                        onClick={connect}>CONNECT WALLET</Button>
                    </div>
            </Col>
        </Row>
    </Container>);
}

export default Intro;
