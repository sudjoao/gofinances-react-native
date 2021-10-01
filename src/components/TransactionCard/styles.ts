import styled from 'styled-components/native';
import { Feather } from "@expo/vector-icons"
import { RFValue } from 'react-native-responsive-fontsize';

interface CardType {
    type: "in" | "out"
}

export const Container = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    padding: ${RFValue(18)}px ${RFValue(24)}px;
    margin-bottom: 16px;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
`

export const Amount = styled.Text<CardType>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    color: ${({ theme, type }) =>
        type === "in" ? theme.colors.success : theme.colors.attention
    };
    margin-top: 2px;

`

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`

export const CategoryIcon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
`

export const CategoryName = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text};
    margin-left: ${RFValue(17)}px;
`

export const Date = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text};
`