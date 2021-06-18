import React from 'react';
import SearchBar from './Searchbar';
import _ from "lodash";







class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
   
    render() {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                {_.times(100, (i) => (
                    <div key={i}>
                
                      
                        <video id='' width="auto" height="auto" controls>
  <source src={require('./assets/video_example.mp4')} type="video/mp4" value="/video_example.mp4"/ >
     </video>
         
     <div>
                            
                            <div>        
                                 <title>Rotating planet</title>
                            </div>
                            <div class="mt-2">
                        <p class="comment-text">Vidéo de la planète en train de tourner.</p>
                    </div>
                              
                              
                             
                              
                          
                            <div class="content"> 2021-05-01T08:00:00.00Z </div>
                          </div>
                          <div class="container mt-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-8">
            <div class="d-flex flex-column comment-section">
                <div class="bg-white p-2">
                   
                    <div class="mt-2">
                        <p class="comment-text">woowwww</p>
                    </div>
                </div>
                <div class="bg-white">
                    <div class="d-flex flex-row fs-12">
                        <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
                        <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
                    </div>
                </div>
                <div class="container pb-cmnt-container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-info">
                <div class="panel-body">
                    <textarea placeholder="Write your comment here!" class="pb-cmnt-textarea"></textarea>
                    <form class="form-inline">
                        <div class="btn-group">
                            <button class="btn" type="button"><span class="fa fa-picture-o fa-lg"></span></button>
                            <button class="btn" type="button"><span class="fa fa-video-camera fa-lg"></span></button>
                            <button class="btn" type="button"><span class="fa fa-microphone fa-lg"></span></button>
                            <button class="btn" type="button"><span class="fa fa-music fa-lg"></span></button>
                        </div>
                        <button class="btn btn-primary pull-right" type="button">comment</button>
                        <button class="btn btn-primary pull-right" type="button">Share</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
                </div>
            </div>
        </div>
    </div>
</div>
                      
                  
                                       
     </div> ))}

                  
                        </div>
             

        
        )
    }
}

export default App;