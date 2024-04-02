import style from './carousel.module.css';
type CarouselProps = {
    list: Array<React.ReactNode>;
    };

export default function Carousel({list}: CarouselProps) {
  return (
    <div className={style.marquee}>
        <div className={style.marquee__content}>
            {
                list.map((item, index) => {
                    return <div key={index} className={style.marquee__item}>{item}</div>
                })
            }
        </div>
        <div className={style.marquee__content}>
            {
                 list.map((item, index) => {
                    return <div key={index} className={style.marquee__item}>{item}</div>
                })
            }
        </div>
    </div>
  )
}
