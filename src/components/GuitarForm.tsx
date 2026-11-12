type GuitarFormProps = {
    formData: GuitarFormData
    errors: GuitarFormErrors
    success: boolean
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    handleSubmit: (e: React.FormEvent) => void
}

export default function GuitarForm({ formData, errors, success, handleChange, handleSubmit }: GuitarFormProps) {
    return (
        <div className="container-xl mt-5 ">
            <h2 className="text-center mb-4">Registrar Nueva Guitarra</h2>

            {success && (
                <div className="alert alert-success text-center" role="alert">
                    ¡Guitarra registrada exitosamente!
                </div>
            )}
<div className="cardInicial">
            <form
                className="row g-3 bg-white p-4 rounded shadow-sm"
                onSubmit={handleSubmit}
                noValidate
            >
                {/* Modelo */}
                <div className="col-md-6">
                    <label htmlFor="modelo" className="form-label fw-bold">Modelo</label>
                    <input
                        type="text"
                        id="modelo"
                        name="modelo"
                        className={`form-control ${errors.modelo ? 'is-invalid' : ''}`}
                        placeholder="Ej. Stratocaster"
                        value={formData.modelo}
                        onChange={handleChange}
                    />
                    {errors.modelo && <div className="invalid-feedback">{errors.modelo}</div>}
                </div>

                {/* Marca */}
                <div className="col-md-6">
                    <label htmlFor="marca" className="form-label fw-bold">Marca</label>
                    <input
                        type="text"
                        id="marca"
                        name="marca"
                        className={`form-control ${errors.marca ? 'is-invalid' : ''}`}
                        placeholder="Ej. Fender"
                        value={formData.marca}
                        onChange={handleChange}
                    />
                    {errors.marca && <div className="invalid-feedback">{errors.marca}</div>}
                </div>

                {/* Descripción */}
                <div className="col-12">
                    <label htmlFor="descripcion" className="form-label fw-bold">Descripción</label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        rows={3}
                        className={`form-control ${errors.descripcion ? 'is-invalid' : ''}`}
                        placeholder="Descripción de la guitarra"
                        value={formData.descripcion}
                        onChange={handleChange}
                    />
                    {errors.descripcion && <div className="invalid-feedback">{errors.descripcion}</div>}
                </div>

                {/* Precio */}
                <div className="col-md-6">
                    <label htmlFor="precio" className="form-label fw-bold">Precio ($)</label>
                    <input
                        type="number"
                        id="precio"
                        name="precio"
                        min="0"
                        step="0.01"
                        className={`form-control ${errors.precio ? 'is-invalid' : ''}`}
                        placeholder="Ej. 299.99"
                        value={formData.precio}
                        onChange={handleChange}
                    />
                    {errors.precio && <div className="invalid-feedback">{errors.precio}</div>}
                </div>

               

                {/* Botón */}
                <div className="col-12 text-end">
                    <button type="submit" className="btn btn-dark px-5">
                        Registrar Guitarra
                    </button>
                </div>
                
            </form>
            </div>
        </div>
    )
}
