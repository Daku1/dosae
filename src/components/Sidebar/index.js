import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebtnWrap,
    SidebarRoute,
} from './SidebarElements'

const index = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">dosae</SidebarLink>
                <SidebarLink to="/">beverages</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SidebtnWrap>
                <SidebarRoute to="/"> Order now </SidebarRoute>
            </SidebtnWrap>
        </SidebarContainer>
    )
}

export default index
