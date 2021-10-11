const SongArtist = ({artist}) => {
    return (
        <div>
            <h2>{artist.strArtist}</h2>
            <img src={artist.strArtistThumb}/>
            <p>{artist.intBornYear} - {artist.intDiedYear || "Presente"}</p>
            <p>{artist.strCountre}</p>
            <p>{artist.strGenre} - {artist.strStyle}</p>
            <a href= {`http://${artist.strWebsite}`} target="_blank">Sitio web</a>
            <p>{artist.strBiographyEN}</p>
        </div>
    )
}

export default SongArtist
