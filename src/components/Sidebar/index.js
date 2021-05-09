import React, { useState } from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebtnWrap,
    SidebarRoute,
} from './SidebarElements'
import {} from './SidebarElements'

const index = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Dosae</SidebarLink>
                <SidebarLink to="/">Beverages</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SidebtnWrap>
                <SidebarRoute to="/"> Order now </SidebarRoute>
            </SidebtnWrap>
        </SidebarContainer>
    )
}

export default index
