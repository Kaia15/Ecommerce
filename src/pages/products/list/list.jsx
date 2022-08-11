import React from 'react'
// import Button from '../../../common/button/button'

const List = ({list}) => {
    // console.log(list)
    return (
        <div className='items' style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", margin: "20px 0px"}}>
            {list.length > 0 && list.map(pr => {
                return (
                    <div className='d-flex flex-column'>
                        <img src={pr.model} style={{ width: "70%", height: "70%", borderRadius: "4px",  }} />
                        <p style = {{margin: "10px"}}> {pr.title} </p>
                        <div className="options-btn" style = {{display: "flex", flexDirection: "column"}}>
                            
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default List