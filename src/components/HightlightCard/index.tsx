import React from "react";
import { Container, Header, Title, Icon, Content, Amount, LastTransiction } from "./styles";

interface Props {
    title: string;
    amount: string;
    lastTransaction: string;
    type: 'up' | 'down' | 'total'
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}

export function HightlightCard({
    title,
    amount,
    lastTransaction,
    type
}: Props) {
    return (
        <Container type={type}>
            <Header>
                <Title type={type}>{title}</Title>
                <Icon name={icon[type]} type={type} />
            </Header>
            <Content>
                <Amount type={type}>
                    {amount}
                </Amount>
                <LastTransiction type={type}>
                    {lastTransaction}
                </LastTransiction>
            </Content>
        </Container>
    )
}