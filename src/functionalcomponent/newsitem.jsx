import React from 'react'
import { Link } from 'react-router-dom'

export default function Newsitem(props) {
    
        return (
            <>
                <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ' >
                    <div className="card " >
                        {
                            props.pic? 
                            <img src={props.pic} height="200px" className="card-img-top" alt="..." /> :
                            <img src="images/notfound.jfif" height="200px" className="card-img-top" alt=" not found" />

                        }

                        
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <div className='d-flex justify-content-between'>
                            <h6 className='date1'>{props.source}</h6>
                            <h6 className='date'>{props.date}</h6>
                            </div>
                            <hr />
                            <p className="card-text">{props.description}</p>
                            <Link to={props.url} rel="noreferrer" target='_blank' className="btn background w-100 btn-sm text-light"> Read full article</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }

