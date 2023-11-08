export function Formulario() {
    return (
        <>
            <form>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <i className="bi bi-person-circle"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <i class="bi bi-person-bounding-box"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellido"
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <i class="bi bi-cake2"></i>
                            </span>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Edad"
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <i class="bi bi-calendar-date"></i>
                            </span>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Nacimiento"
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <i class="bi bi-person-vcard"></i>
                            </span>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Documento"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <i class="bi bi-envelope-at-fill"></i>
                            </span>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <i class="bi bi-filter"></i>
                            </span>
                            <select className="form-select" >
                                <option selected>Selecciona una opcion</option>
                                <option value="1">Queja</option>
                                <option value="2">Agradecimiento</option>
                                <option value="3">Dudas</option>
                                <option value="4">Reclamo</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 h-2">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <i class="bi bi-chat-left-text"></i>
                            </span>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Comments</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary w-50 my-3 mx-auto d-block" >ENVIAR</button>
            </form>
        </>
    )
}