import React from "react";
import styled from "styled-components";

import XIcon from "@mui/icons-material/X";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import FlutterDashRoundedIcon from "@mui/icons-material/FlutterDashRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NavbarOption from "./NavbarOption";
import BookmarkBorderRounded from "@mui/icons-material/BookmarkBorderRounded";
import Profile from "./Profile";
const StyledXIcon = styled(XIcon)`
  margin-left: 20px;
  margin-bottom: 20px;
`;

const NavbarContainer = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  flex: 1fr;
  /*min-width: 250px;*/
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  overflow-y: scroll;
  min-width: fit-content;
`;

const PostButton = styled.button`
  background-color: rgb(29, 155, 240);
  color: white;
  border: none;
  height: 50px;
  padding: 15px 30px;
  font-size: 20px;
  font-weight: 900;
  text-transform: inherit;
  border-radius: 30px;
  margin-top: 20px;
  margin-bottom: 60px;
  cursor: pointer;
  &:hover {
    filter: brightness(75%);
    transition: 0.2s;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <StyledXIcon />
      <NavbarOption active={true} Icon={HomeIcon} text="Home" />
      <NavbarOption Icon={SearchIcon} text="Explore" />
      <NavbarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <NavbarOption Icon={MailOutlineIcon} text="Messages" />
      <NavbarOption Icon={FlutterDashRoundedIcon} text="Grok" />
      <NavbarOption Icon={ListAltRoundedIcon} text="Lists" />
      <NavbarOption Icon={BookmarkBorderRounded} text="Bookmarks" />
      <NavbarOption Icon={PeopleOutlinedIcon} text="Communities" />
      <NavbarOption Icon={XIcon} text="Premium" />
      <NavbarOption Icon={PersonOutlineOutlinedIcon} text="Profile" />
      <NavbarOption Icon={MoreHorizIcon} text="More" />
      <PostButton>Post</PostButton>
      <Profile name="이찬희" id="@meow__" />
    </NavbarContainer>
  );
};

export default Navbar;
