import FaceExpression from "../../Expression/Components/FaceExpression";
import Player from "../components/Player";
import { useSong } from "../hooks/useSong";

function Home() {
    const { handleGetSong } = useSong();

    return (
        <main className="dashboard">
            <section className="dashboard__container">
                <div className="dashboard-card">
                    <FaceExpression onClick={(expression)=>{handleGetSong({mood:expression})}} />
                </div>
            </section>
            <Player />
        </main>
    );
}

export default Home;
