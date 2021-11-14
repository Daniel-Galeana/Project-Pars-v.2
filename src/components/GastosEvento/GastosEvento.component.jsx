import React, { Fragment } from 'react';
import {
    ButtonIngresar,
    TitleButton,
    DivHeader,
    DivText,
    OpcItem
} from './GastosEvento.styles';

const GastosEvento = () => {
    return ( 
        <Fragment>
            <DivHeader>
                <DivText>¿Cuanto piensas gastar en tu evento?</DivText>
                <OpcItem>$5,000 a $1,000</OpcItem>
                <OpcItem>$10,000 a $20,000</OpcItem>
                <OpcItem>$20,000 a $40,000</OpcItem>
                <OpcItem>+$40,000</OpcItem>
            </DivHeader>
        </Fragment>
     );
}
 
export default GastosEvento;
