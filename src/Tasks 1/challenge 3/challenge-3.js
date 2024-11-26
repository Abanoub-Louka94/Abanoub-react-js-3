function Card({children}) {
    return (
        <div className="children">
            {children}
        </div>
    )
}


export default function Profile() {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <h1>Photo</h1>
                    <img
                        className="avatar"
                        src="https://i.imgur.com/OKS67lhm.jpg"
                        alt="Aklilu Lemma"
                        width={70}
                        height={70}
                    />
                </div>
                <Card>
                    <h1>this is p children from card</h1>
                </Card>
            </div>
            <div className="card">
                <div className="card-content">
                    <h1>About</h1>
                    <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
                </div>
                <Card>
                    <h2>this is h2 children from card</h2>
                </Card>
            </div>
        </div>
    );
}
