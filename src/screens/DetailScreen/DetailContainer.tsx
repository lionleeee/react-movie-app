import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import { Route, useLocation,  } from "react-router-dom";
import withRouter from '../../utils/withRouter';


interface DetailContainerState{
  result: null,
  error: null,
  loading: true,
  //isMovie: pathname.includes("/movie/"),
  recommendations: null,
  cast: null,
  keywords: null,
  reviews: null,
  backdrops: null,
  posters: null,
  tvDetail2: null,
}




class DetailContainer extends Component<{},DetailContainerState> {
  constructor(props:any) {
    super(props);
    this.state = {
      result: null,
      error: null,
      loading: true,
      //isMovie: pathname.includes("/movie/"),
      recommendations: null,
      cast: null,
      keywords: null,
      reviews: null,
      backdrops: null,
      posters: null,
      tvDetail2: null,
    };

  }
  
  
  async componentDidMount(){
 const id = this.props
    console.log(id);
  }

  render() {
    //

    return <DetailPresenter {...this.state} />;
  }
}

export default withRouter(DetailContainer);

