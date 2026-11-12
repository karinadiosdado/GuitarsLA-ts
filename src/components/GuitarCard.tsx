type GuitarCardProps = {
    guitar: GuitarAPI
    addToCart: (item: Guitar) => void
}

export default function GuitarCard({ guitar, addToCart }: GuitarCardProps) {
    const { id, modelo, descripcion, precio, marca, imagen } = guitar

    // Mapear los campos de la API al tipo Guitar del carrito
    const handleAddToCart = () => {
        addToCart({
            id,
            name: modelo,
            image: imagen || 'guitarra_01',
            description: descripcion,
            price: Number(precio)
        })
    }

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img
                    className="img-fluid"
                    src={imagen ? `/img/${imagen}` : `/img/guitarra_01.jpg`}
                    alt={`imagen ${modelo}`}
                />
            </div>
            <div className="col-8">
                <p className="text-muted mb-1" style={{ fontSize: '0.8rem' }}>{marca}</p>
                <h3 className="text-black fs-4 fw-bold text-uppercase">{modelo}</h3>
                <p>{descripcion}</p>
                <p className="fw-black text-primary fs-3">${Number(precio).toFixed(2)}</p>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={handleAddToCart}
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}
