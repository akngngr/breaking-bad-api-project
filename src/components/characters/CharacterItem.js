import React, { useState, useEffect } from 'react'

const CharacterItem = ({ item }) => {

    const [occupation, setOccupation] = useState([])

    useEffect(() => {
        const fetchJob = () => {
            var job = Object.values(item.occupation)
            setOccupation(job.toString())
        }
        fetchJob()
    }, [])

    return (
        <div className='card'>
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.img} alt='' />
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {item.portrayed}
                        </li>
                        <li>
                            <strong>Nickname:</strong> {item.nickname}
                        </li>
                        <li>
                            <strong>Birthday:</strong> {item.birthday}
                        </li>
                        <li>
                            <strong>Occupation:</strong> {occupation}
                        </li>
                        <li>
                            <strong>Status:</strong> {item.status}
                        </li>
                        <li>
                            <strong>Seasons:</strong> {item.appearance.toString()}
                        </li>
                        <li>
                            <strong>Productions:</strong> {item.category.toString()}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
