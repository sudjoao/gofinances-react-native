import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    height: ${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0px 24px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`

export const UserInfo = styled.View`
    flex-direction: row;
`;

export const UserImage = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;

export const UserGreetingBox = styled.View`
    margin-left: 17px;
`;

export const UserGreeting = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
`;

export const UserName = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.shape};
`;

export const PowerIcon = styled(Feather)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`