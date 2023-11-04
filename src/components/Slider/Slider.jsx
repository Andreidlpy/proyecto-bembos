
import React from 'react'

export const Slider = ({ heading, offers }) => {
  return (
    <article>
         <h2 className='propmociones__heading'>{ heading }</h2>
         {
            offers.map(( { id, nombre } ) => (
                <div key={ id }>
                    <h3>{ nombre }</h3>
                </div>
            ))
         }
    </article>
  )
}
