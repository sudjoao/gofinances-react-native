import React from "react";
import { Container, Header, PowerIcon, UserGreeting, UserGreetingBox, UserImage, UserInfo, UserName, UserWrapper } from './styles';

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
        </Container>
    )
}

