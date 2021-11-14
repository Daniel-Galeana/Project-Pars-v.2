import React, { Fragment } from 'react';
import {
    ButtonIngresar,
    TitleButton,
    DivHeader,
    DivText,
    OpcItem
} from './PersonasEvento.styles';

const PersonasEvento = () => {
    return ( 
        <Fragment>
            <DivHeader>
                <DivText>¿Cuantas personas deseas en tu evento?</DivText>
                <OpcItem>50 personas</OpcItem>
                <OpcItem>100 personas</OpcItem>
                <OpcItem>150 personas</OpcItem>
                <OpcItem>+ 200 personas</OpcItem>
            </DivHeader>
        </Fragment>
     );
}
 
export default PersonasEvento;