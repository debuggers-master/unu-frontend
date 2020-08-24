import React from 'react'
import styles from './styles.module.scss'

const Meet = props => {
  const containerClassName = `${styles.meet} ${styles[props.styleType] ||
    ''}`

  return (
    <div className={containerClassName}>
      <div className={styles.meet__left}>
        <div className={styles.meet__img}>
          <img alt='nombre de la conferencia' />
        </div>
      </div>
      <div className={styles.meet__right}>
        <div className={styles.meet__title}>
          <h2>Jorge Gonzalez</h2>
          <span>Icono</span>
        </div>
        <h3>Subgerente de alguna empresa</h3>
        Es un hecho establecido hace demasiado tiempo que un lector se distraerá
        con el contenido del texto de un sitio mientras que mira su diseño. El
        punto de usar Lorem Ipsum es que tiene una distribución más o menos
        normal de las letras, al contrario de usar textos como por ejemplo
        "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un
        español que se puede leer. Muchos paquetes de autoedición y editores de
        páginas web usan el Lorem Ipsum
      </div>
    </div>
  )
}
export default Meet
