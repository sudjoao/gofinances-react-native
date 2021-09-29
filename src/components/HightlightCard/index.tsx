import React from "react";
import { Container, Header, Title, Icon, Content, Amount, LastTransiction } from "./styles";
export function HightlightCard(){
    return(
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name="arrow-up-circle" />
            </Header>
            <Content>
                <Amount>R$ 200.000</Amount>
                <LastTransiction>Última entrada dia 13 de abril</LastTransiction>
            </Content>
        </Container>
    )
}