import React from "react";
import "./sidebar.css";
import { LineStyle } from "@material-ui/icons";

const SideBar = () => {
	return (
		<div className="sideBar">
			<div className="sideBarWrapper">
				<div className="sideBarMenu">
					<h3 className="sideBarTitle">Dashboard</h3>
					<ul className="sideBarList">
						<li className="sideBarListItem">
							<LineStyle />
							Home
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
