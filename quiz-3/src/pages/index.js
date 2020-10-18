import axios from 'axios';
import React, {Component} from 'react';

class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            daftarFilm : [],
            filled : false,
        };
    }
    componentDidMount(){
        let tempArr = []
        this.setState({daftarFilm: this.props})
        axios.get(`http://backendexample.sanbercloud.com/api/movies`).then(res =>{
            tempArr = res.data
            this.setState({daftarFilm:tempArr,filled:true})    
        })
        tempArr.forEach(el=>{this.state.daftarFilm.push({id: el.id, created_at: el.created_at, updated_at: el.updated_at, title: el.title, description: el.description,
                year: el.year, duration: el.duration, genre: el.genre, rating: el.rating, review: el.review, image_url: el.image_url})}) 
 
    }
    
    render(){
        return (
            <>
            <div>
                <section>
                <h1>Daftar Film Film Terbaik</h1>
                <div id="article-list">
                    {
                        this.state.filled && (
                           this.state.daftarFilm.map((val,index)=>{
                            return(
                                <div class="article">
                                    <h2>
                                        {val.title}
                                    </h2>
                                    <div style={{display:"flex",flexDirection:"row"}}>
                                        <img src={val.image_url} style={{maxWidth:"512px",maxHeight:"384px"}}></img>
                                        <div>
                                            <h3>Rating : {val.rating}</h3>
                                            <h3>Durasi : {val.duration} menit</h3>
                                            <h3>Genre : {val.genre} </h3>
                                        </div>
                                    </div>
                                    <p>
                                        <strong>Deskripsi Film</strong> : {val.description}
                                    </p>                                    
                                </div>

                            )
                            })
                        )
                    }
                </div>
                </section>
            </div>
            </>                                
        );        
    }

}
export default Index;