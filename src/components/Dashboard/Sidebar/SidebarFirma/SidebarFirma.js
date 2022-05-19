import React from "react";
import SidebarItem from "../SidebarItem/SidebarItem";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

const SidebarFirma = () => {
    const pathname = window.location.pathname; //returns the current url minus the domain name
    return (
        <>
            <SidebarItem
                location="/dashboard/adaugare-stagiu"
                text="Adaugă stagiu"
                icon={<AddBoxOutlinedIcon />}
                active={
                    pathname.includes("/dashboard/adaugare-stagiu")
                        ? true
                        : false
                }
            />
            <SidebarItem
                location="/dashboard/modificare-stagiu"
                text="Modifică stagiu"
                icon={<BorderColorOutlinedIcon />}
                active={
                    pathname.includes("/dashboard/modificare-stagiu")
                        ? true
                        : false
                }
            />
        </>
    );
};

export default SidebarFirma;
