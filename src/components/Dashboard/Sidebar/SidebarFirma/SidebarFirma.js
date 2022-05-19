import React from "react";
import SidebarItem from "../SidebarItem/SidebarItem";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

const SidebarFirma = () => {
    const pathname = window.location.pathname; //returns the current url minus the domain name
    return (
        <>
            <SidebarItem
                location="/adaugare-stagiu"
                text="Adaugă stagiu"
                icon={<AddBoxOutlinedIcon />}
                active={pathname === "/adaugare-stagiu" ? true : false}
            />
            <SidebarItem
                location="/modificare-stagiu"
                text="Modifică stagiu"
                icon={<BorderColorOutlinedIcon />}
                active={pathname === "/modificare`-stagiu" ? true : false}
            />
        </>
    );
};

export default SidebarFirma;
