import CallUsBanner from "../../components/CallUsBanner";
import CarHeader from "../../components/CarHeader";
import Footer from "../../components/Footer";
import TeamData from "../../data/TeamMembers";
import "./style.css"

const Team = () => {

    return(
        <div className="team">
            <CarHeader name="Our Team" />
            <div className="team-container">
                {
                    TeamData.map((member) => (
                        <div className="member-info">
                            <img src={member.img} alt="person" />
                            <div className="member-description">
                                <p className="member-name">{member.name}</p>
                                <p className="member-job">{member.job}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <CallUsBanner />
            <Footer />
        </div>
    )
}

export default Team;
