
import React, { useState, useEffect } from 'react';
import {helpHttp} from "../helpers/helpHttp";

const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e)=>{
        const{name, value} = e.target;
        setForm({
            ...form,
            [name]:value
        })
    }
    const handleBlur = (e)=>{
        handleChange(e);
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0){
            alert("Enviando formulario");
            setLoading(true);
            helpHttp().post("https://formsubmit.co/ajax/gabriyanezvallerdu@gmail.com", {
                body: form,
                headers: {
                    "Content-Type":"application/json",
                    "Accept": "application/json"
                }
            }).then(res=> {
                setLoading(false);
                setResponse(true);
                setTimeout(()=> {
                    setResponse(false)
                }, 5000)
            })
        } else {
            return;
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setErrors(validateForm(form));
    }

    return {
        form, errors,loading,response, handleChange, handleBlur, handleSubmit
    }
}

export default useForm
