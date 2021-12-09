import React from "react";
import "./topbar.css";
import { NotificationsNone } from "@material-ui/icons";
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
						<span className="topiconbag"></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
