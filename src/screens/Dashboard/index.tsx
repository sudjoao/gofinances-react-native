import React from "react";
import { HightlightCard } from "../../components/HightlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
import {
    Container,
    Header,
    HighlightCards,
    PowerIcon,
    UserGreeting,
    UserGreetingBox,
    UserImage,
    UserInfo,
    UserName,
    UserWrapper,
    Transactions,
    Title,
    TransactionsList
} from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}
export function Dashboard() {
    const data: DataListProps[] = [{
        id: "1",
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,00",
        category: {
            name: "Vendas",
            icon: "dollar-sign",
            key: "sales"
        },
        date: "13/04/2021",
        type: "in"
    },
    {
        id: "2",
        title: "Hamburgueria Pizzy",
        amount: "R$ 59,00",
        category: {
            name: "Alimentação",
            icon: "coffee",
            key: "food"
        },
        date: "10/04/2021",
        type: "out",
    }, {
        id: "3",
        title: "Aluguel do apartamento",
        amount: "R$ 1200,00",
        category: {
            name: "Casa",
            icon: "home",
            key: "house"
        },
        date: "27/03/2021",
        type: "out"
    },
    ]
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
            <Transactions>
                <Title>Listagem</Title>
                <TransactionsList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
            </Transactions>
        </Container>
    )
}

