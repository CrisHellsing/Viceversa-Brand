import { Slide } from "react-slideshow-image"

import 'react-slideshow-image/dist/styles.css'
import styles from './ProductSlideshow.module.css'

interface Props{
    images: string[]
}

export const ProductSlideshow = ({ images }: Props) => {
  return ( 
    <Slide
        easing="ease"
        duration={ 7000 }
        indicators
    >
        {
            images.map( image => {
                const url = `/products/${ image }`;
                return (
                    <div className={ styles.eachslide } key={ image }>
                        <div style={{
                            backgroundImage: `url(${url})`,
                            backgroundSize: 'cover'
                        }}>
                        </div>
                    </div>
                )
            })
        }

    </Slide>
   )
}
