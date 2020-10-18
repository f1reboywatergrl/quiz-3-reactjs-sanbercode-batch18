import React, {useState, useEffect} from "react"
import axios from "axios"
import "../tugas-2/Tugas-2/public/css/style.css"
import "./edit.css"

const DaftarFilm = () => {  
  const [daftarFilm, setDaftarFilm] =  useState(null)
  const [input, setInput]  =  useState({id:"", title:"", description:"", year: 2020, duration: 120, genre:"", rating: 0, image_url:""})

  useEffect( () => {
    if (daftarFilm === null){
      axios.get(`http://backendexample.sanbercloud.com/api/movies`)
      .then(res => {
        setDaftarFilm(res.data.map(el=>{ return {id: el.id, created_at: el.created_at, updated_at: el.updated_at, title: el.title, description: el.description,
            year: el.year, duration: el.duration, genre: el.genre, rating: el.rating, review: el.review, image_url: el.image_url}} ))
      })
    }
  }, [daftarFilm])
  
  const handleDelete = (event) => {
    let id_movies = parseInt(event.target.value)

    axios.delete(`http://backendexample.sanbercloud.com/api/movies/${id_movies}`)
    .then(() => {
      setDaftarFilm(null)
    })
          
    
  }
  
  const handleEdit = (event) =>{
    let id_movies = parseInt(event.target.value)
        
    axios.get(`http://backendexample.sanbercloud.com/api/movies/${id_movies}`)
    .then(res => {
      let el = res.data
      setInput({id: el.id, created_at: el.created_at, updated_at: el.updated_at, title: el.title, description: el.description,
        year: el.year, duration: el.duration, genre: el.genre, rating: el.rating, review: el.review, image_url: el.image_url})
    })
  
  }

  const handleChange = (event) =>{
    let typeOfInput = event.target.id

    switch (typeOfInput){
      case "id":
      {
        setInput({...input, id: event.target.value});
        break
      }
      case "title":
      {
        setInput({...input, title: event.target.value});
          break
      }      
      case "description":
        {
          setInput({...input, description: event.target.value});
            break
        }      
      case "year":
      {
        setInput({...input, year: event.target.value});
        break
      }
      case "duration":
      {
        setInput({...input, duration: event.target.value});
          break
      }      
      case "genre":
      {
        setInput({...input, genre: event.target.value});
          break
      }      
      case "rating":
      {
        setInput({...input, rating: event.target.value});
          break
      }
      case "image_url":
        {
          setInput({...input, image_url: event.target.value});
            break
        }
    default:
      {break;}
    }
  }

  const handleSubmit = (event) =>{
    event.preventDefault()

    let id = input.id
    let title = input.title
    let description = input.description
    let year = input.year
    let duration = input.duration
    let genre = input.genre
    let rating = input.rating
    let image_url = input.image_url

    if (!daftarFilm.includes(input.id)){        
      axios.post(`http://backendexample.sanbercloud.com/api/movies/`, {id, title, description, year, duration, genre, rating,image_url})
      .then(() => {
          setDaftarFilm([
            ...daftarFilm, 
            { id:year,
              title,
              description, 
              year,
              duration,
              genre,  
              rating,
              image_url
            }])
      })
    }else{
      axios.put(`http://backendexample.sanbercloud.com/api/movies/${input.id}`, {id, title, description, year, duration, genre, rating,image_url})
      .then(() => {
          let dataFilm = daftarFilm.find(el=> el.id === input.id)
          dataFilm.id = id
          dataFilm.title=title
          dataFilm.description=description
          dataFilm.year = year
          dataFilm.duration=duration
          dataFilm.genre=genre
          dataFilm.rating = rating
          dataFilm.image_url = image_url
          setDaftarFilm([...daftarFilm])
      })
    }

  }

  return(
    <>
    <section>
      <div style={{display: "flex", justifyContent: "center"}}>
        <input style={{marginRight:"5px"}}type="text" value="" id="search"/>
        <button style={{ float: "right"}}>Search</button>
      </div>
      <h1>Daftar Film</h1>
      <div style={{display: "flex", justifyContent: "center"}}>
        <table>
            <thead>
            <tr>
                <th>No</th>
                <th>Title</th>
                <th>Description</th>
                <th>Year</th>
                <th>Duration</th>
                <th>Genre</th>
                <th>Rating</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {
                daftarFilm !== null && daftarFilm.map((item, index)=>{
                    return(                    
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.year} </td>
                        <td>{item.duration}</td>
                        <td>{item.genre}</td>
                        <td>{item.rating}</td>
                        <td>
                        <button onClick={handleEdit} value={item.id}>Edit</button>
                        &nbsp;
                        <button onClick={handleDelete} value={item.id}>Delete</button>
                        </td>
                    </tr>
                    )
                })
                }
            </tbody>
        </table>
      </div>
      {/* Form */}
      <h1>Movies Form</h1>

      <div style={{width: "50%", margin: "0 auto", display: "block"}}>
        <div style={{border: "1px solid #aaa", padding: "20px"}}>
          <form onSubmit={handleSubmit} style={{margin:"15px"}}>
            <label style={{float: "left"}}>
              <strong>Title :</strong>
            </label>
            <input style={{float: "right"}} type="text" required id="title" value={input.title} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
                <strong>Description :</strong>
            </label>
            <textarea style={{float: "right"}} type="text" required id="description" value={input.description} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
                <strong>Year :</strong>
            </label>
            <input style={{float: "right"}} type="number" required id="year" min="1980" value={input.year} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
                <strong>Duration :</strong>
            </label>
            <input style={{float: "right"}} type="number" required id="duration" value={input.duration} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
                <strong>Genre :</strong>
            </label>
            <input style={{float: "right"}} type="text" required id="genre" value={input.genre} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
                <strong>Rating :</strong>
            </label>
            <input style={{float: "right"}} type="number" required id="rating" min="0" max="10" value={input.rating} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
                <strong>Image URL :</strong>
            </label>
            <input style={{float: "right"}} type="text" required id="image_url" value={input.image_url} onChange={handleChange}/>
            <br/>
            <br/>
            <div style={{width: "100%", paddingBottom: "20px"}}>
              <input type="submit" style={{ float: "right"}} onClick={handleSubmit}/>
            </div>
          </form>
        </div>
      </div>
      </section>
    </>
    
  )
}

export default DaftarFilm
