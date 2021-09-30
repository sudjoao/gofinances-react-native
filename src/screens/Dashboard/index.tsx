import React from "react";
import { HightlightCard } from "../../components/HightlightCard";
import { Container, Header, HighlightCards, PowerIcon, UserGreeting, UserGreetingBox, UserImage, UserInfo, UserName, UserWrapper } from './styles';

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <UserImage source={{ uri: "https://avatars.githubusercontent.com/u/46005310?v=4" }} />
                        <UserGreetingBox>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Johnson</UserName>
                        </UserGreetingBox>
                    </UserInfo>
                    <PowerIcon name="power" />
                </UserWrapper>
            </Header>
            <HighlightCards>
                <HightlightCard
                    type="up"
                    title="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction="Última entrada dia 13 de abril"
                />
                <HightlightCard
                    type="down"
                    title="Saídas"
                    amount="R$ 1.259,00"
                    lastTransaction="Última saída dia 03 de abril"
                />
                <HightlightCard
                    type="total"
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction="01 à 16 de abril"
                />
            </HighlightCards>
        </Container>
    )
}

