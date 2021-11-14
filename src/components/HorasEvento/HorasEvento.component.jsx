import React, { Fragment } from 'react';
import {
    ButtonIngresar,
    TitleButton,
    DivHeader,
    DivText,
    OpcItem
} from './HorasEvento.styles';

const HorasEvento = () => {
    return ( 
        <Fragment>
            <DivHeader>
                <DivText>¿Cuantas horas piensas realizar tu evento?</DivText>
                <OpcItem>6 hrs</OpcItem>
                <OpcItem>8 hrs</OpcItem>
                <OpcItem>10 hrs</OpcItem>
                <OpcItem>+ 10 hrs</OpcItem>
            </DivHeader>
        </Fragment>
     );
}
 
export default HorasEvento;