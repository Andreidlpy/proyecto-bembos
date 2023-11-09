
export const MenuItem = ({ img , nombre }) => {
  return (
    <article className='menu-card'>
        <img src={ img } alt={ nombre } />
        <div className="menu-card__content">
            <button>
                Ver todos
            </button>
        </div>
        <h2 className="menu__name-item">{nombre}</h2>
    </article>
  )
}
