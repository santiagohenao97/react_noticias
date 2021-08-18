import React from 'react';
import styles from './Noticia.module.css'
import PropTypes from 'prop-types';
import notImage from './notImage.png'


const Noticia = ({noticia}) => {

    //extraer los datos
    const { urlToImage, url, title, description, source } = noticia;

    const imagen = (urlToImage) ? (
        <>
            <img src={urlToImage} className={styles.card_img}  alt={title}/>
            <span className="card-title">{source.name}</span>
        </>
    ): (
        <>
            <img src={notImage} className={styles.card_img}  alt="not Found"/>
            <span className="card-title">No encontramos la imagen</span>
        </>
    )
   

    return ( 
        <div className="col s12 m6 l4">
            <div className={`${styles.card_size} card`}>
                <div className={`card-image`}>
                     {imagen}

                </div>
                <div className={`${styles.card_info} card-content`}>
                    <h4 className={styles.card_title}>{title}</h4>
                    <p  className={styles.card_text}>{description}</p>
                </div>

                <div className={`${styles.card_action} card-action`}>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver Noticia Completa</a>
                </div>
            </div>
        </div>
     );
}
 
Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia;