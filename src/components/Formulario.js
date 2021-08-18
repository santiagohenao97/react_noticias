import React from 'react';
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({setCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deporte'},
        {value: 'technology', label: 'Tecnología'}

    ]

    //utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES)

    //Submit al form, pasar categoría al app.js
    const buscarNoticias = e =>{
        e.preventDefault();
        setCategoria(categoria);
        console.log(categoria)
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={buscarNoticias}>
                <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
                <SelectNoticias/>
                <div className="input-field col s12">
                    <input 
                        type="submit"
                        className={`btn-large amber darken-2 ${styles['btn-block']}`} //O cambiar el estilo por .btn_block
                        value="Buscar"
                    />
                </div>
                </form>
            </div>
        </div>
     );
}
 
Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
}

export default Formulario;