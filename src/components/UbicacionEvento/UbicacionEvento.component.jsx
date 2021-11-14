import React, { Fragment } from 'react';
import {
    DivHeader,
    DivText,
    DivOpc,
    TextOpc,
    ContainerOpc,
    ContainerOpcItem
} from './UbicacionEvento.styles';

const TipoEvento = () => {
    return ( 
        <Fragment>
            <DivHeader>
                <DivText>¿Que tipo de evento quieres realizar?</DivText>      
            <ContainerOpc>
                <ContainerOpcItem>
                    <DivOpc></DivOpc>
                    <TextOpc>Salón</TextOpc>
                </ContainerOpcItem>
                <ContainerOpcItem>
                    <DivOpc></DivOpc>
                    <TextOpc>Bar o antro</TextOpc>
                </ContainerOpcItem>
                <ContainerOpcItem>
                    <DivOpc></DivOpc>
                    <TextOpc>Jardín</TextOpc>
                </ContainerOpcItem>
            </ContainerOpc>
            <ContainerOpc>
                <ContainerOpcItem>
                    <DivOpc></DivOpc>
                    <TextOpc>Carpa</TextOpc>
                </ContainerOpcItem>
                <ContainerOpcItem>
                    <DivOpc></DivOpc>
                    <TextOpc>Roof Garden</TextOpc>
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