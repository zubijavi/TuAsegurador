export default function Filters({

    years,
    brands,
    models,
    versions,

    year,
    brand,
    model,
    version,

    setYear,
    setBrand,
    setModel,
    setVersion,

    cp,
    setCp

}){

    return(

        <div className="card">

            <div className="field">

                <label>Año</label>

                <select
                    value={year}
                    onChange={e=>setYear(e.target.value)}
                >

                    <option value="">
                        Elegí un año
                    </option>

                    {years.map(y=>

                        <option
                            key={y}
                            value={y}
                        >
                            {y}
                        </option>

                    )}

                </select>

            </div>

            <div className="field">

                <label>Marca</label>

                <select

                    value={brand}

                    disabled={!year}

                    onChange={e=>{

                        setBrand(e.target.value);

                        setModel("");
                        setVersion("");

                    }}

                >

                    <option value="">
                        Elegí una marca
                    </option>

                    {brands.map(b=>

                        <option
                            key={b}
                            value={b}
                        >
                            {b}
                        </option>

                    )}

                </select>

            </div>

            <div className="field">

                <label>Modelo</label>

                <select

                    value={model}

                    disabled={!brand}

                    onChange={e=>{

                        setModel(e.target.value);

                        setVersion("");

                    }}

                >

                    <option value="">
                        Elegí un modelo
                    </option>

                    {models.map(m=>

                        <option
                            key={m}
                            value={m}
                        >
                            {m}
                        </option>

                    )}

                </select>

            </div>

            <div className="field">

                <label>Versión</label>

                <select

                    value={version}

                    disabled={!model}

                    onChange={e=>setVersion(e.target.value)}

                >

                    <option value="">
                        Elegí una versión
                    </option>

                    {

                        versions.map(v=>

                            <option

                                key={v.infoauto}

                                value={v.description}

                            >

                                {v.description}

                            </option>

                        )

                    }

                </select>

            </div>

            <div className="field">

                <label>Código Postal</label>

                <input

                    type="text"

                    value={cp}

                    maxLength={4}

                    placeholder="1001"

                    onChange={e=>setCp(e.target.value)}

                />

            </div>

        </div>

    );

}