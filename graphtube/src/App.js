import React from "react";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import HeaderNav from "./components/HeaderNav";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import api from "./services/api";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  handleSubmit = async (termFromSearchBar) => {
    const response = await api.get("/search", {
      params: {
        q: termFromSearchBar,
        part: "snippet",
        maxResults: 6,
        key: "AIzaSyDJltZInKAl19fXQF4jF06r2ojJyhfwbN8",
        type: "video",
      },
    });

    this.setState({
      videos: response.data.items,
    });
    console.log("this is resp", response);
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="App">
        <Container fluid bg="light">
          <HeaderNav handleFormSubmit={this.handleSubmit}></HeaderNav>
          <Container>
            <Row>
              <div className="col-md-6">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="col-md-6">
                <VideoList
                  handleVideoSelect={this.handleVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}

export default App;
