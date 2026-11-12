import { useState, useEffect } from 'react'

const API_URL = 'http://localhost:4002/api/guitarsLA'

const initialFormData: GuitarFormData = {
    modelo: '',
    descripcion: '',
    precio: '',
    marca: '',
    imagen: ''
}

export const useGuitarsLA = () => {

    const [guitars, setGuitars] = useState<GuitarAPI[]>([])
    const [loading, setLoading] = useState(true)
    const [formData, setFormData] = useState<GuitarFormData>(initialFormData)
    const [errors, setErrors] = useState<GuitarFormErrors>({})
    const [success, setSuccess] = useState(false)

    const fetchGuitars = async () => {
        try {
            setLoading(true)
            const response = await fetch(API_URL)
            const data = await response.json()
            setGuitars(data.data)
        } catch (error) {
            console.error('Error al obtener guitarras:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchGuitars()
    }, [])

    const validate = (): boolean => {
        const newErrors: GuitarFormErrors = {}

        if (!formData.modelo.trim()) {
            newErrors.modelo = 'El modelo no puede estar vacío'
        }
        if (!formData.descripcion.trim()) {
            newErrors.descripcion = 'La descripción no puede estar vacía'
        }
        if (!formData.precio.trim()) {
            newErrors.precio = 'El precio no puede estar vacío'
        } else if (isNaN(Number(formData.precio)) || Number(formData.precio) <= 0) {
            newErrors.precio = 'El precio debe ser un número mayor a 0'
        }
        if (!formData.marca.trim()) {
            newErrors.marca = 'La marca no puede estar vacía'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name as keyof GuitarFormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }))
        }
    }

    //  Crear nueva guitarra
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    precio: Number(formData.precio)
                })
            })

            if (response.ok) {
                setSuccess(true)
                setFormData(initialFormData)
                await fetchGuitars() 
                setTimeout(() => setSuccess(false), 3000)
            }
        } catch (error) {
            console.error('Error al crear guitarra:', error)
        }
    }

    return {
        guitars,
        loading,
        formData,
        errors,
        success,
        handleChange,
        handleSubmit
    }
}
