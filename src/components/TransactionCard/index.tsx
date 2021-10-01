import React from 'react';

import {
    Container,
    Title,
    Amount,
    Footer,
    CategoryIcon,
    CategoryName,
    Date,
    Category,
} from './styles';

interface Category {
    key: string;
    name: string;
    icon: string;
}

export interface TransactionCardProps {
    title: string;
    amount: string;
    category: Category;
    date: string;
    type: "in" | "out";
}

interface Props {
    data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
    const getAmount = () => {
        return `${data.type === "out" ? "-" : ""}${data.amount}`
    }
    return (
        <Container>
            <Title>{data.title}</Title>
            <Amount type={data.type}>{getAmount()}</Amount>
            <Footer>
                <Category>
                    <CategoryIcon name={data.category.icon} />
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}