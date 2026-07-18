export default function Ticket({

    year,
    brand,
    model,
    version,
    location

}){

    if(!version) return null;

    return(

        <div className="ticket show">

            <div className="ticket-row">

                <span>Año</span>

                <span>{year}</span>

            </div>

            <div className="ticket-row">

                <span>Marca</span>

                <span>{brand}</span>

            </div>

            <div className="ticket-row">

                <span>Modelo</span>

                <span>{model}</span>

            </div>

            <div className="ticket-row">

                <span>Versión</span>

                <span>{version}</span>

            </div>

            <div className="ticket-row">

                <span>Localidad</span>

                <span>

                    {

                        location

                        ?

                        `${location.localidad} (${location.provincia})`

                        :

                        "—"

                    }

                </span>

            </div>

        </div>

    );

}
