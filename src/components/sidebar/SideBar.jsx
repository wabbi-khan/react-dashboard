import React from "react";
import "./sidebar.css";
import {
	LineStyle,
	Timeline,
	TrendingUp,
	PersonOutline,
} from "@material-ui/icons";
const SideBar = () => {
	return (
		<div className="sideBar">
			<div className="sideBarWrapper">
				<div className="sideBarMenu">
					<h3 className="sideBarTitle">Dashboard</h3>
					<ul className="sideBarList">
						<li className="sideBarListItem active">
							<LineStyle className="sibeBarIcon" />
							Home
						</li>
						<li className="sideBarListItem">
							<Timeline className="sibeBarIcon" />
							Analytics
						</li>
						<li className="sideBarListItem">
							<TrendingUp className="sibeBarIcon" />
							Sales
						</li>
					</ul>
				</div>
				<div className="sideBarMenu">
					<h3 className="sideBarTitle">Quik Menu</h3>
					<ul className="sideBarList">
						<li className="sideBarListItem ">
							<PersonOutline className="sibeBarIcon" />
							user
						</li>
						<li className="sideBarListItem">
							<Timeline className="sibeBarIcon" />
							Product
						</li>
						<li className="sideBarListItem">
							<Timeline className="sibeBarIcon" />
							Transaction
						</li>
						<li className="sideBarListItem">
							<TrendingUp className="sibeBarIcon" />
							Reports
						</li>
					</ul>
				</div>
				<div className="sideBarMenu">
					<h3 className="sideBarTitle">Notification</h3>
					<ul className="sideBarList">
						<li className="sideBarListItem ">
							<LineStyle className="sibeBarIcon" />
							Mail
						</li>
						<li className="sideBarListItem">
							<Timeline className="sibeBarIcon" />
							FeedBack
						</li>
						<li className="sideBarListItem">
							<TrendingUp className="sibeBarIcon" />
							Messages
						</li>
					</ul>
				</div>
				<div className="sideBarMenu">
					<h3 className="sideBarTitle">Staff</h3>
					<ul className="sideBarList">
						<li className="sideBarListItem ">
							<LineStyle className="sibeBarIcon" />
							Manage
						</li>
						<li className="sideBarListItem">
							<Timeline className="sibeBarIcon" />
							Analytics
						</li>
						<li className="sideBarListItem">
							<TrendingUp className="sibeBarIcon" />
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
