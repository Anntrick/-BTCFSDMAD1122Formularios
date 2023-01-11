import { useState } from 'react'
//import { myAPIService } from '../../services/myAPIService.js'

import FormButton from '../FormButton/FormButton'

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '0',
        country: '',
        message: '',
        phone: '',
        errors: [],
        errMes: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (formData.name.length == 0) {
            //alert("Tiene que poner su nombre")
            formData.errors.push("name")
            setFormData({
                ...formData,
                errMes: "Hay un error en el formulario" 
            })
        }

        if (formData.errors.length == 0) {
            //Aqui iria el axios.post a nuestro back

            /*let resp = doReg()
            alert(resp)*/
        }
    }

    /*const doReg = async() => {
        return await myAPIService.register(formData)
    }*/

    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="Form">
            <p>{formData.errMes}</p>
            <form>
                <div>
                    <label> Nombre
                        <input type="text" name="name" value={formData.name} onChange={handleInput} />
                    </label>
                </div>
                <div>
                    <label> Email
                        <input type="email" value={formData.email} name="email" onChange={handleInput} />
                    </label>
                </div>
                <div>
                    <label> Edad
                        <input type="number" value={formData.age} name="age" onChange={handleInput} />
                    </label>
                </div>
                <div>
                    <label> Pais
                        <input type="text" value={formData.country} name="country" onChange={handleInput} />
                    </label>
                </div>
                <div>
                    <label> Teléfono
                        <input type="text" value={formData.phone} name="phone" onChange={handleInput} />
                    </label>
                </div>
                <div>
                    <label> Mensaje
                        <textarea value={formData.message} name="message" onChange={handleInput}></textarea>
                    </label>
                </div>
                <div>
                    <FormButton value="Enviar" handle={handleSubmit} />
                </div>
            </form>
        </div>
    )
}

export default Form