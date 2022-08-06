import { StyledPageNotFound, ContentWrapper, TextWrapper } from "../styled/PageNotFound.styled";

const PageNotFound = () => {
    return ( 
        <StyledPageNotFound>
            <ContentWrapper>
                <img src="./images/error.svg" alt="" />
                <TextWrapper>
                    <h1>Error 404</h1>
                    <h2>The page you were looking for was not found.</h2>
                    <h4>Sorry...</h4>
                </TextWrapper>
            </ContentWrapper>
        </StyledPageNotFound>
     );
}
 
export default PageNotFound;