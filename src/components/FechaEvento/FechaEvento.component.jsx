import React, { Fragment } from 'react';
import {
    ButtonIngresar,
    TitleButton,
    DivHeader,
    DivText,
    OpcItem
} from './FechaEvento.styles';

const FechaEvento = () => {
    return ( 
        <Fragment>
            <DivHeader>
                <DivText>¿Para cuando es tu evento?</DivText>
                <OpcItem>Este mes</OpcItem>
                <OpcItem>3 a 6 meses</OpcItem>
                <OpcItem>6 a 9 meses</OpcItem>
                <OpcItem>El proximo año</OpcItem>
            </DivHeader>
        </Fragment>
     );
}
 
export default FechaEvento;