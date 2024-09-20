import React from 'react'

const Card = () => {
    const imgUrl = "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    return (
        <div className='card'>
            <img src={imgUrl} alt="profile-img" />
            <div>
                <h1>Velmurugan</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eveniet aperiam voluptates veritatis
                    repellendus corporis expedita! Ab molestias eaque reiciendis magnam?</p>

            </div>
        </div>
    )
}

export default Card