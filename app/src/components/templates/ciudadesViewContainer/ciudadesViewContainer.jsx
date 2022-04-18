import "./ciudadesViewContainer.scss"
export const CiudadesViewContainer = () => {

    return (
        <div className="ciudadesContainer">

            <h2 className="seccionTitle">Nos encontramos en: </h2>
            <div className="lineRed"></div>
            <div className="lineGrey"></div>

            <div className="cards">
                <div className="lugares" id="card1">
                    <p>London</p>
                </div>

                <div className="lugares" id="card2">
                    <p>Miami</p>
                </div>

                <div className="lugares" id="card3">
                    <p>Cancún</p>
                </div>

            </div>
        </div>
    )

}