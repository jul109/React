export default function Characters({ getCharsWithLimit }) {
    return (


        <div>
            {
                getCharsWithLimit(5, 0).map((char, index) => {
                    return (
                        <div key={index}>
                            <h1>{char.name}</h1>
                            <p>{char.status}</p>
                            <img src={char.image}/>
                        </div>
                    )


                })
            }
        </div>
    )
}