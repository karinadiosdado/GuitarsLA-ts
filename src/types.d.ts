

type Guitar={
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}

type CartItem = Guitar & {
    quantity: number;
}

type GuitarProps = {
    guitar: Guitar,
    addToCart: ((item: Guitar) => void)
}

type CartProp = {
    cart: CartItem[],
    decreaseQuantity: (item: number) => void,
    increaseQuantity: (item: number) => void,
    removeFromCart: (item: number) => void,
    clearCart: () => void,
    isEmpty: boolean,
    cartTotal: number
}

type GuitarAPI = {
    id: number
    modelo: string
    descripcion: string
    precio: number
    marca: string
    imagen: string
}

type GuitarFormData = {
    modelo: string
    descripcion: string
    precio: string
    marca: string
    imagen: string
}

type GuitarFormErrors = {
    modelo?: string
    descripcion?: string
    precio?: string
    marca?: string
}
