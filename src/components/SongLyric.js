import React from 'react'

const SongLyric = ({title, lyrics}) => {
    return (
        <div>
            <h2>{title}</h2>
            <blockquote style={{whiteSpace: "pre-wrap"}}>{lyrics}</blockquote>
        </div>
    )
}

export default SongLyric
