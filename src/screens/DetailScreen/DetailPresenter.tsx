import { styled } from "styled-components";
import Loader from "../../components/Loader/Loader";
import styles from './DetailPresenter.module.css';
import { Helmet, HelmetProvider } from "react-helmet-async";


const BlurBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url(${(props :any) => props.imageUrl}) no-repeat center center;
  background-size: cover;
  filter: blur(5px);
  opacity: 0.2;
`;



interface DetailPresenterProps {
  result: any | null,
  error: string |null,
  loading: boolean,
  //isMovie: pathname.includes("/movie/"),
  recommendations: any,
  cast: any,
  keywords: any,
  reviews: any,
  backdrops: any,
  posters: any,
  tvDetail2: any,
  
}





const DetailPresenter: React.FC<DetailPresenterProps> = ({
  result,
  error,
  loading,
  //isMovie: pathname.includes("/movie/"),
  recommendations,
  cast,
  keywords,
  reviews,
  backdrops,
  posters,
  tvDetail2,
}) => {
  //const checkPC = "win16|win32|win64|macintel|mac";
  //const checkPCMobileBool = checkPC.indexOf(navigator.platform.toLowerCase()) < 0;

  return loading ? (
    <Loader />
  ) :(
    <div className={styles.Container}>
      <HelmetProvider>
        <Helmet>
          <title>{result.title ? result.title : result.name}</title>
        </Helmet>
      </HelmetProvider>


    </div>
  )


}

export default DetailPresenter;

