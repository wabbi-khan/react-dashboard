import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
const Topbar = () => {
	return (
		<div className="topbar">
			<div className="topbarWrapper">
				<div className="topLeft">
					<span className="logo">Admin</span>
				</div>
				<div className="topright">
					<div className="topbariconcontainer">
						<NotificationsNone />
						<span className="topiconbadge">2</span>
					</div>
					<div className="topbariconcontainer">
						<Language />
						<span className="topiconbadge">2</span>
					</div>
					<div className="topbariconcontainer">
						<Settings />
					</div>
					<img src="./avatar.jpg" alt="pic" className="topAvatar" />
				</div>
			</div>
		</div>
	);
};

export default Topbar;
