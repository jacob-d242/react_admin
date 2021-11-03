import "./Sidebar.css"
import {LineStyle, TrendingUp, Home} from '@material-ui/icons';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Dashboard</h2>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitems active">
                            <Home />Home
                        </li>
                        <li className="sidebarlistitems">
                            <LineStyle />Anaytics
                        </li>
                        <li className="sidebarlistitems">
                            <TrendingUp />Projects
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Quick  Menu</h2>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitems ">
                            <Home />Users
                        </li>
                        <li className="sidebarlistitems">
                            <LineStyle />Projects
                        </li>
                        <li className="sidebarlistitems">
                            <TrendingUp />Activities
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Notifications</h2>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitems ">
                            <Home />Mail
                        </li>
                        <li className="sidebarlistitems">
                            <LineStyle />Feedback
                        </li>
                        <li className="sidebarlistitems">
                            <TrendingUp />Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Staff</h2>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitems ">
                            <Home />manage
                        </li>
                        <li className="sidebarlistitems">
                            <LineStyle />sharing
                        </li>
                        <li className="sidebarlistitems">
                            <TrendingUp />Reports
                        </li>
                    </ul>
                </div>
           </div>
        </div>
    )
}
