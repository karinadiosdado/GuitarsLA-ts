import Header from './components/Header'
import GuitarCard from './components/GuitarCard'
import GuitarForm from './components/GuitarForm'
import { useCart } from './hooks/useCart'
import { useGuitarsLA } from './hooks/useGuitarsLA'

function App() {
    const {
        cart,
        addToCart,
        decreaseQuantity,
        increaseQuantity,
        removeFromCart,
        clearCart,
        isEmpty,
        cartTotal
    } = useCart()

    const {
        guitars,
        loading,
        formData,
        errors,
        success,
        handleChange,
        handleSubmit
    } = useGuitarsLA()

    return (
        <>
            <Header
                cart={cart}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
                isEmpty={isEmpty}
                cartTotal={cartTotal}
            />

            {/* Formulario de Registro */}
            <GuitarForm
                formData={formData}
                errors={errors}
                success={success}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            {/* Catalogo desde la API */}
            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Coleccion</h2>

                {loading ? (
                    <p className="text-center mt-4">Cargando guitarras...</p>
                ) : guitars.length === 0 ? (
                    <p className="text-center mt-4 text-muted">
                        No hay guitarras registradas aun. Agrega una arriba!
                    </p>
                ) : (
                    <div className="row mt-5">
                        {guitars.map(guitar => (
                            <GuitarCard
                                key={guitar.id}
                                guitar={guitar}
                                addToCart={addToCart}
                            />
                        ))}
                    </div>
                )}
            </main>

            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
                </div>
            </footer>
        </>
    )
}

export default App
