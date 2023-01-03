import styled from "styled-components";
export const Film = ({movie: {imdbID, Year, Poster, Title, Type}}) => {
    return(
        <FilmWrapper>
            <h2>{Title}</h2>
            <p>{Year}</p>
            <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title}/>
            <p>{Type}</p>
        </FilmWrapper>
    )
}
const FilmWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        margin: 20px 0 0;
    }
    p{
        margin: 5px 0;
    }
`