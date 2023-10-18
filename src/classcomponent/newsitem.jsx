import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Newsitem extends Component {
    render() {
        return (
            <>
                <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card" >
                        {
                            this.props.pic? 
                            <img src={this.props.pic} height="200px" className="card-img-top" alt="..." /> :
                            <img src="images/notfound.jfif" height="200px" className="card-img-top" alt=" not found" />

                        }

                        
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <div className='d-flex justify-content-between'>
                            <h6 className='date1'>{this.props.source}</h6>
                            <h6 className='date'>{`${(new Date(this.props.date)).getDate()}/${(new Date(this.props.date)).getMonth()}/${(new Date(this.props.date)).getFullYear()}`} </h6>
                            </div>
                            <hr />
                            <p className="card-text">{this.props.description}</p>
                            <Link to={this.props.url} rel="noreferrer" target='_blank' className="btn background w-100 btn-sm text-light"> Read full article</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
