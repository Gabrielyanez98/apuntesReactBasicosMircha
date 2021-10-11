import React from 'react'
import useForm from '../hooks/useForm'
import Loader from './Loader'
import Message from './Message'

const initialForm = {
    name: "",
    email:"",
    subject:"",
    comments:""
}

const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if(!form.name.trim()) {
        errors.name = "El campo Nombre es requerido";
    } else if(!regexName.test(form.name.trim())){
        errors.name ="El campo nombre solo acepta letras y espacios en blanco"
    }

    if(!form.email.trim()) {
        errors.email = "El campo Email es requerido";
    } else if(!regexEmail.test(form.email.trim())){
        errors.email ="El campo nombre solo acepta letras y espacios en blanco"
    }

    if(!form.subject.trim()) {
        errors.subject = "El campo subject es requerido";
    } 

    if(!form.comments.trim()) {
        errors.comments = "El campo comments es requerido";
    } else if(!regexComments.test(form.name.trim())){
        errors.comments ="El campo comentarios no debe exceder los 255 caracteres"
    }

    return errors;
}

let styles = {
    fontWeight: "bold",
    color: "red"
}

const ContactForm = () => {
    const {form, 
        errors,
        loading,
        response, 
        handleChange, 
        handleBlur, handleSubmit} = useForm(initialForm,validationsForm);

    return (
        <div>
            <h2>Formulario de contacto</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Escribe tu nombre" onChange={handleChange} onBlur={handleBlur} value={form.name} required/>
                <br />

                {errors.name && <p style={styles}>{errors.name}</p>}

                <input type="email" name="name" placeholder="Escribe tu email" onChange={handleChange} onBlur={handleBlur} value={form.email} required/>
                <br />

                {errors.email && <p style={styles}>{errors.email}</p>}

                <input type="text" name="subject" placeholder="Asunto a tratar" onChange={handleChange} onBlur={handleBlur} value={form.subject} required/>
                <br />

                {errors.subject && <p style={styles}>{errors.subject}</p>}

                <textarea name="commnents" id="" cols="50" rows="5" placeholder="Escribe tus componentarios" onChange={handleChange} onBlur={handleBlur} value={form.comments} required></textarea>
                <br />
                {errors.comments && <p style={styles}>{errors.comments}</p>}

                <input type="submit" value="Enviar" />
            </form>

            {loading && <Loader/>}
            {response && <Message msg="Los datos han sido enviados" bgColor="blue"/>}
        </div>
    )
}

export default ContactForm
