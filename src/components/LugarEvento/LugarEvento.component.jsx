import React, { Fragment } from 'react';
import {
    ButtonIngresar,
    TitleButton,
    DivHeader,
    DivText,
    Input
} from './LugarEvento.styles';

const LugarEvento = () => {
    return ( 
        <Fragment>
            <DivHeader>
                <DivText>¿En donde quieres tu evento?</DivText>
                <Input placeholder="Estado"></Input>
                <Input placeholder="Delegación"></Input>
                <ButtonIngresar>
                    <TitleButton>Empezar</TitleButton>
                </ButtonIngresar>
            </DivHeader>
        </Fragment>
     );
}
 
export default LugarEvento;
