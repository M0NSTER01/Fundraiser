import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Dashboard.module.css";
import { FaRankingStar, FaArrowRight,FaRegHeart ,FaRegStar, FaTrophy } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { CiGift } from "react-icons/ci";
import { RxExit } from "react-icons/rx";



function Dashboard() {
    
    let url = "http://localhost:9000";
    //let url = "https://khhpmfpb-9000.inc1.devtunnels.ms/";
    let navigate = useNavigate()
    let [username, setusername] = useState("");
    let [refcode, setRefcode] = useState("");
    
    useEffect(()=>{
        if(localStorage.getItem("user") === null){
            alert("Please Login");
            navigate("/");
        }
        else{
            let user = localStorage.getItem("user");
            console.log(user);
            setusername(user);
        }
    },[]);

    let copy =()=>{
        let textToCopy = "raghav2025";
        navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Copied the text: " + textToCopy);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }
    let dash = ()=>{
        navigate("/leaderboard");
    }
    let logout =()=>{
        localStorage.removeItem("user");
        navigate("/");
    }
    return <>
        <div className="containerdash">
            <section className={`flexr ${styles.heading}`}>
                <div className={`flex ${styles.messagesection}`}>
                    <h1 className={`${styles.welcome}`}>Welcome back, {username}! </h1>
                    <p className={`${styles.welcomepara}`}>Track your fundraising journey and achievements</p>
                </div>
                <div className={`flexr aic ${styles.buttonwindow}`}>
                    <button className={`flexr aic jic ${styles.logoutbutton} ${styles.hover1}`} onClick={logout}><RxExit/>Logout</button>
                    <button className={`flexr aic jic ${styles.welcomebutton} ${styles.hover1}`} onClick={dash}><FaTrophy/>View Leaderboard</button>
                </div>
            </section>
            <section className={`flexr ${styles.statsection}`}>
                <div className={`${styles.moneysection} ${styles.hover}`}>
                    <div className={`flexr aic ${styles.stattop}`}>
                        <h5>Total Raised</h5>
                        <AiFillDollarCircle className={`${styles.greenicon}`}/>
                    </div>
                    <div className={`${styles.statmiddle}  ${styles.greenmiddle}`}>
                        <p>$2,850</p>
                    </div>
                    <div className={`${styles.statbottom} ${styles.greenbottom}`}>
                        <p>+$180 from last week ↗️</p>
                    </div>
                </div>
                <div className={`${styles.ranksection} ${styles.hover}`}>
                    <div className={`flexr aic ${styles.stattop}`}>
                        <h5>Current Rank</h5>
                        <FaTrophy className={`${styles.goldicon}`}/>
                    </div>
                    <div className={`${styles.statmiddle} ${styles.goldmiddle}`}>
                        <p>#3</p>
                    </div>
                    <div className={`${styles.statbottom}`}>
                        <p>out of 45 interns 🎯</p>
                    </div>
                </div>
                <div className={`${styles.refsection} ${styles.hover}`}>
                    <div className={`flexr aic ${styles.stattop}`}>
                        <h5>Referral Code</h5>
                        <FiUsers className={`${styles.blueicon}`}/>
                    </div>
                    <div className={`${styles.statmiddle} ${styles.bluemiddle}`}>
                        <p>raghav2025</p>
                    </div>
                    <div className={`${styles.statbottom}`}>
                        <p onClick={copy}>Share with donors 🔗</p>
                    </div>
                </div>
            </section>
            <section className={`flex ${styles.rewardsection}`}>
                <div className={`flexr aic ${styles.rewardhead}`}>
                    <CiGift className={`${styles.rewardheadicon}`}/> Rewards & Achievements
                </div>
                <div className={styles.verticalline}></div>
                <div className={`flex aic jic ${styles.maintrewarddiv}`}>
                    <div className={`flexr aic jic ${styles.rewarddiv}`}>
                        <div className={`flexr aic ${styles.rewardcard} ${styles.hover}`}>
                            <div className={`${styles.rewardmessage}`}>
                                <div className={`flexr aic jic ${styles.rewardicontext}`}>
                                    <div className={`${styles.rewardicon}`}>🎯</div>
                                    <h2>Welcome Badge</h2>
                                </div>
                                <p>Join the program</p>
                            </div>
                            <div className={`${styles.locked}`}>
                                <p>✓ Unlocked</p>
                            </div>
                        </div>
                        <div className={`flexr aic ${styles.rewardcard} ${styles.hover}`}>
                            <div className={`${styles.rewardmessage}`}>
                                <div className={`flexr aic jic ${styles.rewardicontext}`}>
                                    <div className={`${styles.rewardicon}`}>💰</div>
                                    <h2>First $100</h2>
                                </div>
                                <p>Raise your first $100</p>
                            </div>
                            <div className={`${styles.locked}`}>
                                <p>✓ Unlocked</p>
                            </div>
                        </div>
                        <div className={`flexr aic ${styles.rewardcard} ${styles.hover}`}>
                            <div className={`${styles.rewardmessage}`}>
                                <div className={`flexr aic jic ${styles.rewardicontext}`}>
                                    <div className={`${styles.rewardicon}`}>🏆</div>
                                    <h2>Top 10</h2>
                                </div>
                                <p>Reach Top 10 Leaderboard</p>
                            </div>
                            <div className={`${styles.locked}`}>
                                <p>✓ Unlocked</p>
                            </div>
                        </div>
                    </div>
                    <div className={`flexr aic jic ${styles.rewarddiv}`}>
                        <div className={`flexr aic ${styles.rewardcard} ${styles.hover}`}>
                            <div className={`${styles.rewardmessage}`}>
                                <div className={`flexr aic jic ${styles.rewardicontext}`}>
                                    <div className={`${styles.rewardicon}`}>🚀</div>
                                    <h2>Raise first $1000</h2>
                                </div>
                                <p>Raise $1000 in donations</p>
                            </div>
                            <div className={`${styles.locked}`}>
                                <p>✓ Unlocked</p>
                            </div>
                        </div>
                        <div className={`flexr aic ${styles.rewardcard} ${styles.rewardcardlocked} ${styles.hover}`}>
                            <div className={`${styles.rewardmessage}`}>
                                <div className={`flexr aic jic ${styles.rewardicontext}`}>
                                    <div className={`${styles.rewardicon}`}>👑</div>
                                    <h2>Fundraising Master</h2>
                                </div>
                                <p>Raise $5000 in donations</p>
                            </div>
                            <div className={`${styles.locked} ${styles.notlocked}`}>
                                <p>🔒 Locked</p>
                            </div>
                        </div>
                        <div className={`flexr aic ${styles.rewardcard} ${styles.rewardcardlocked} ${styles.hover}`}>
                            <div className={`${styles.rewardmessage}`}>
                                <div className={`flexr aic jic ${styles.rewardicontext}`}>
                                    <div className={`${styles.rewardicon}`}>⭐</div>
                                    <h2>Top 5</h2>
                                </div>
                                <p>Reach Top 5 Leaderboard</p>
                            </div>
                            <div className={`${styles.locked} ${styles.notlocked}`}>
                                <p>🔒 Locked</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </>
}

export default Dashboard;
