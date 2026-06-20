export default function Home() {
    return (
        <main className="flex-grow-1">

            <section id="home">

                {/* Photo Display */}
                <div className="photo-display" style={{ backgroundImage: `url(/photos/point_up.png)` }}>
                    <img className="Image" src={"/photos/point_up.png"} alt={"Artist Photo"} width={700}/>
                </div>

            </section>


        </main>        
    );
}