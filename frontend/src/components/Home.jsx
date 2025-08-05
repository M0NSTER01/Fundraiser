import styles from "./home.module.css";
import { FaRankingStar, FaArrowRight,FaRegHeart ,FaRegStar, FaTrophy } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { LuTarget } from "react-icons/lu";
import { CiGift } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function Home() {
    let navigate = useNavigate();

    let handlelogin = ()=>{
        navigate("/login");
    }
    let handledash = ()=>{
        navigate("/leaderboard");
    }
    return (
            <div className={styles.container}>
                <section className={`flex section100 trans aic  ${styles.firstsection}`}>
                    <div className={`${styles.firstiinnersection}`}>
                        <button className={`flex ${styles.firstbutton}`}>Empowering Young Fundraisers</button>
                        <h1 className={`${styles.firstcolorhead}`}>Intern Portal</h1>
                        <h1 className={styles.firsthead}>Where Impact Meets Achievement</h1>
                        <p className={styles.firstpara}>Join our community of dedicated interns making a real difference. Track your fundraising journey, compete with peers, and unlock rewards as you help change the world.</p>
                        <div className={`flexr ${styles.buttondiv}`}>
                            <button  className={`flexr aic jic ${styles.greenbutton}`} onClick={handlelogin}>Get Started <FaArrowRight/></button>
                            <button className={`flexr aic jic ${styles.transbutton}`} onClick={handledash}>View Leader Board <FaRankingStar/></button>
                        </div>
                    </div>
                </section>
                <section className={`flex trans aic jic ${styles.secondsection}`}>
                    <div className={`flexr aic jic ${styles.statcardiv}`}>
                        <div className={`flex aic jic ${styles.statcard}`}>
                            <FiUsers className={`${styles.valueicon}`}/>
                            <p className={styles.value}>450+</p>
                            <p className={styles.valuename}>Active Users</p>
                        </div>
                        <div className={`flex aic jic ${styles.statcard}`}>
                            <FaRegHeart className={`${styles.valueicon}`}/>
                            <p className={styles.value}>$127K</p>
                            <p className={styles.valuename}>Funds Raised</p>
                        </div>
                        <div className={`flex aic jic ${styles.statcard}`}>
                            <FaRegStar className={`${styles.valueicon}`}/>
                            <p className={styles.value}>1.2K</p>
                            <p className={styles.valuename}>Achievements Earned</p>
                        </div>
                    </div>
                </section>
                <section className={`flex trans ${styles.thirdsection}`}>
                        <div className={`flex aic jic ${styles.thirdsectiondiv}`}>
                            <div className={`flex aic jic ${styles.thirdsectiontext}`}>
                                <h1 className={`${styles.texthead}`}>Everything You Need to Succeed</h1>
                                <p className={`${styles.textpara}`}>Our platform provides all the tools and motivation you need to excel in your fundraising journey</p>
                            </div>
                            <div className={`flex ${styles.cardwindowmain}`}>
                                <div className={`flexr ${styles.cardwindow}`}>
                                    <div className={`flexr aic jic ${styles.card}`}>
                                        <FaTrophy className={`${styles.thirdvalueicon} `}/>
                                        <div className={`flex ${styles.cardtextarea}`}>
                                            <h2 className={`${styles.thirdvalue}`}>Competitive Leaderboards</h2>
                                            <p className={`${styles.thirdpara}`}>Track your progress and compete with fellow interns to reach the top</p>
                                        </div>
                                    </div>
                                    <div className={`flexr aic jic ${styles.card} `}>
                                        <LuTarget className={`${styles.thirdvalueicon} ${styles.icongreen}`}/>
                                        <div className={`flex ${styles.cardtextarea}`}>
                                            <h2 className={`${styles.thirdvalue}`}>Reward System</h2>
                                            <p className={`${styles.thirdpara}`}>Unlock exclusive rewards and recognition for your fundraising achievements.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`flexr ${styles.cardwindow}`}>
                                    <div className={`flexr aic jic ${styles.card}`}>
                                        <CiGift className={`${styles.thirdvalueicon} ${styles.iconpurple}`}/>
                                        <div className={`flex ${styles.cardtextarea}`}>
                                            <h2 className={`${styles.thirdvalue}`}>Real-time Analytics</h2>
                                            <p className={`${styles.thirdpara}`}>Monitor your impact with detailed performance dashboards.</p>
                                        </div>
                                    </div>
                                    <div className={`flexr aic jic ${styles.card}`}>
                                        <FiUsers className={`${styles.thirdvalueicon} ${styles.iconblue}`}/>
                                        <div className={`flex ${styles.cardtextarea}`}>
                                            <h2 className={`${styles.thirdvalue}`}>Community Support</h2>
                                            <p className={`${styles.thirdpara}`}>Connect with peers and mentors to share strategies and celebrate success.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>
                <section className={`flex trans aic jic ${styles.thirdsection}`}>
                    <div className={`flex aic jic ${styles.finalsection}`}>
                        <h1 className={`${styles.finalhead}`}>Ready to Make an Impact?</h1>
                        <p className={`${styles.finalpara}`}>Join hundreds of interns who are already making a difference. Start your fundraising journey today!</p>
                        <button className={`flexr jic aic ${styles.finalbutton}`} onClick={handlelogin}>Join the Movement <FaRegHeart/></button>
                    </div>
                </section>
            </div>
        )
}

export default Home;