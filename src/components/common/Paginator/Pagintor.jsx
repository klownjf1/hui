import React, {useState} from "react";
import s from './Paginator.module.css'

let Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged, portionSize=10}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage/portionSize))
    let leftPortionRange = (portionNumber - 1) * portionSize+1
    let RightPortionNumber = portionNumber * portionSize

    return (
        <div>
            {
                portionNumber > 1? <button onClick={() => setPortionNumber(prev => prev-1)}>prev</button>: ''
            }
            {
                pages
                    .filter(page => {
                        if(page >= leftPortionRange && page <= RightPortionNumber){
                            return page
                        }})
                    .map(page => <span className={currentPage===page? s.selected_page:''}
                                       key = {page}
                                       onClick={(e) => onPageChanged(page)}>{page + ' '}</span>)
            }
            {
                portionNumber < pages.length/portionSize ? <button onClick={() => setPortionNumber(prev => prev+1)}>next</button> : ''
            }
        </div>
    )
}

export default Paginator