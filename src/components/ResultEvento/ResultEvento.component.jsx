import React, { Fragment } from 'react';
import Images from "./images/1.jpeg";
import Images2 from "./images/2.jpeg";
import Images3 from "./images/3.jpg";
import {
    DivHeader,
    DivText,
    DivSubText,
    CardsContainer,
    Cards,
    CardText,
    CardSpan,
    ButtonIngresar,
    TitleButton,
    Footer,
    TextFooter,
    SpanFooter
} from './ResultEvento.styles';

const ResultEvento = () => {
    return ( 
        <Fragment>
            <DivHeader>
                <DivText>Felicidades, te hemos encontrado las mejores opciones para tu evento.</DivText>
                <DivSubText>Agenda una visita o ve más info del lugar, tan pronto nos comunicaremos contigo para darle la mejor asesoría</DivSubText>
            </DivHeader>
            <CardsContainer>
                <Cards>
                    <img src={Images} style={{width: 350, height: 350}}></img>
                    <CardText>Jardín los angeles<CardSpan>$35,000</CardSpan></CardText>
                    <CardText>Personas: 200</CardText>
                    <CardText>Decoración: Gold</CardText>
                    <CardText>Ciudad de México, Iztapalapa</CardText>
                    <ButtonIngresar>
                        <TitleButton>Ver más fotos</TitleButton>
                    </ButtonIngresar>
                </Cards>
                <Cards>
                    <img src={Images2} style={{width: 350, height: 350}}></img>
                    <CardText>Salón Don Jose<CardSpan>$35,000</CardSpan></CardText>
                    <CardText>Personas: 250</CardText>
                    <CardText>Decoración: Gold</CardText>
                    <CardText>Ciudad de México, Roma Norte</CardText>
                    <ButtonIngresar>
                        <TitleButton>Ver más fotos</TitleButton>
                    </ButtonIngresar>
                </Cards>
                <Cards>
                    <img src={Images3} style={{width: 350, height: 350}}></img>
                    <CardText>Salón Fantasy<CardSpan>$35,000</CardSpan></CardText>
                    <CardText>Personas: 150</CardText>
                    <CardText>Decoración: Platino</CardText>
                    <CardText>Estado de México, Chimalhuacan</CardText>
                    <ButtonIngresar>
                        <TitleButton>Ver más fotos</TitleButton>
                    </ButtonIngresar>
                </Cards>
            </CardsContainer>
            <Footer>
                <TextFooter>Si no estas satisfecho, vuelve a hacer tu evento dandole <SpanFooter>clic</SpanFooter> aqui</TextFooter>
            </Footer>
            
        </Fragment>
     );
}
 
export default ResultEvento;