import styles from "./Leaderborad.module.css";
import { FaRankingStar, FaArrowLeft, FaArrowRight,FaRegHeart ,FaRegStar, FaTrophy } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function Leaderboard() {
    let [name, setname] = useState("Sample User");
    useEffect(()=>{
        if(localStorage.getItem("user")){
            name = localStorage.getItem("user");
            setname(name);
        }
    },[]);
    const rankings = [
        { name: "Sarah Chen", username: "sarahc2025", amount: "$4,250", rank: "<FaTrophy/>" },
        { name: "Marcus Williams", username: "marcusw2025", amount: "$3,890", rank: "<FaTrophy/>" },
        { name: `${name}`, username: "raghav2025", amount: "$2,850", rank: "<FaTrophy/>" },
        { name: "Emily Rodriguez", username: "emilyr2025", amount: "$2,640", rank: "#4" },
        { name: "David Kim", username: "davidk2025", amount: "$2,380", rank: "#5" },
        { name: "Jessica Taylor", username: "jesst2025", amount: "$2,150", rank: "#6" },
        { name: "Michael Brown", username: "mikeb2025", amount: "$1,980", rank: "#7" },
        { name: "Lisa Wang", username: "lisaw2025", amount: "$1,850", rank: "#8" },
        { name: "James Wilson", username: "jamesw2025", amount: "$1,720", rank: "#9" },
        { name: "Anna Martinez", username: "annam2025", amount: "$1,650", rank: "#10" },
    ];

    const getTrophyStyle = (index) => {
        switch (index) {
            case 0:
                return { color: "#FFD700" };
            case 1:
                return { color: "#C0C0C0" };
            case 2:
                return { color: "#CD7F32" };
            default:
                return null;
        }
    };
    let navigate = useNavigate();
    let goback = ()=>{
        if(name === "Sample User"){
            navigate("/");
        }
        else{
            navigate("/dashboard");
        }
    }

    return (
            <div className={`${styles.container}`}>
                <section className={`flexr aic ${styles.navbar}`}>
                    <div className={`flex aic jic ${styles.back}`}>
                        <button className={`flex aic jic ${styles.backbutton} ${styles.hover}`} onClick={goback}><FaArrowLeft /></button>
                    </div>
                    <div className={` flex jic ${styles.navtext}`}>
                        <h1>Leaderboard</h1>
                        <p>Compete with fellow raisers and track your progress 🚀</p>
                    </div>
                </section>
                <section className={`flexr aic jic ${styles.top3}`}>
                    <div className={`flex aic ${styles.topcard} ${styles.hover}`}>
                        <FaTrophy className={`${styles.top3icon}`}/>
                        <h2>Sarah Chen</h2>
                        <h1>$4,250</h1>
                        <div className={`${styles.top3ref}`}>
                            <p>sarahc2025</p>
                        </div>
                        <div className={`${styles.top3rank}`}>
                            👑 1st
                        </div>
                    </div>
                    <div className={`flex aic ${styles.topcard} ${styles.topcard2} ${styles.hover}`}>
                        <FaTrophy className={`${styles.top3icon}`}/>
                        <h2>Marcus Williams</h2>
                        <h1>$3,890</h1>
                        <div className={`${styles.top3ref}`}>
                            <p>marcusw2025</p>
                        </div>
                        <div className={`${styles.top3rank}`}>
                            🥈 2nd
                        </div>
                    </div>
                    <div className={`flex aic ${styles.topcard} ${styles.topcard3} ${styles.hover}`}>
                        <FaTrophy className={`${styles.top3icon}`}/>
                        <h2>{name}</h2>
                        <h1>$2,850</h1>
                        <div className={`${styles.top3ref}`}>
                            <p>raghav2025</p>
                        </div>
                        <div className={`${styles.top3rank}`}>
                            🥉 3rd
                        </div>
                    </div>
                </section>
                <section className={`flex aic jic ${styles.top10}`}>
                    <div className={`flexr aic ${styles.top10head}`}>
                        <FaTrophy className={`${styles.top10headicon}`}/>
                        <h2>Complete Rankings</h2>
                    </div>


                {rankings.map((user, index) => (
                    <div key={index} className={`flexr aic ${styles.rank} ${styles.hover}`}>
                        <div className={`flexr aic jic ${styles.rankleft}`}>
                            {index < 3 ? (
                                <FaTrophy
                                    className={`${styles.rankicon}`}
                                    style={getTrophyStyle(index)}
                                />
                            ) : (
                                <div className={`${styles.ranknumber}`}>#{index + 1}</div>
                            )}

                            <div className={`flex aic ${styles.rankname}`}>
                                <h2>{user.name}</h2>
                                <div className={`flex aic jic ${styles.rankref}`}>
                                    <p>{user.username}</p>
                                </div>
                            </div>
                        </div>
                        <div className={`flex aic jic ${styles.rankright}`}>
                            <h2>{user.amount}</h2>
                        </div>
                    </div>
                ))}
                </section>
            </div>
        )
}

export default Leaderboard;