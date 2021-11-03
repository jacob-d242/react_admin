import { ArrowDownward } from '@material-ui/icons'
import React from 'react'
import "./featured.css"
export default function Featuredinfo() {
    return (
        <div className="featured">
            <div className="featureditem">
                <span className="featuredTittle">Projects</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredmoney">
                        200000
                    </span>
                    <span className="featuredMoneyrate down">
                        <ArrowDownward />
                    </span>
                </div>
                <span className="featuredsub">Compared to last month</span>
            </div>
            <div className="featureditem">
                <span className="featuredTittle">Projects</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredmoney">
                        200000
                    </span>
                    <span className="featuredMoneyrate ">
                       <span className="down"><ArrowDownward /></span> 
                    </span>
                </div>
                <span className="featuredsub">Compared to last month</span>
            </div>
            <div className="featureditem">
                <span className="featuredTittle">Projects</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredmoney">
                        200000
                    </span>
                    <span className="featuredMoneyrate up">
                        <ArrowDownward />
                    </span>
                </div>
                <span className="featuredsub">Compared to last month</span>
            </div>
            <div className="featureditem">
                <span className="featuredTittle">Projects</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredmoney">
                        200000
                    </span>
                    <span className="featuredMoneyrate up">
                        <ArrowDownward />
                    </span>
                </div>
                <span className="featuredsub">Compared to last month</span>
            </div>
        </div>
    )
}
