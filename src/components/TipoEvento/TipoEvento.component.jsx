import React, { Fragment } from 'react';
import {
    DivHeader,
    DivText,
    DivOpc,
    TextOpc,
    ContainerOpc,
    ContainerOpcItem
} from './TipoEvento.styles';

const TipoEvento = () => {
    return ( 
        <Fragment>
            <DivHeader>
                <DivText>¿Que tipo de evento quieres realizar?</DivText>      
            <ContainerOpc>
                <ContainerOpcItem>
                    <DivOpc></DivOpc>
                    <TextOpc>Boda</TextOpc>
                </ContainerOpcItem>
                <ContainerOpcItem>
                    <DivOpc></DivOpc>
                    <TextOpc>XV años</TextOpc>
                </ContainerOpcItem>
                <ContainerOpcItem>
                    <DivOpc></DivOpc>
                    <TextOpc>3 años</TextOpc>
                </ContainerOpcItem>
                <ContainerOpcItem>
                    <DivOpc></DivOpc>
                    <TextOpc>Otro</TextOpc>
                </ContainerOpcItem>
            </ContainerOpc>
            </DivHeader>
        </Fragment>
     );
}
 
export default TipoEvento;
