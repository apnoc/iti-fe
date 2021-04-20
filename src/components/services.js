import React,  {Component} from 'react' ;
import data from '../data.json';
import './services.css';


class Services extends Component {
    render() {
        return (
            <div>
                {
                  data.Services.map((information) => {
                      return(
                          <section className="container">
                               <div className="row">
                                            <section className="col-lg-8 p-4 ">
                                                <h3 className=" contnt m-3">{information.heading}</h3>
                                                
                                                {
                                                   information.detailservices.map((content) => {
                                                        return (
                                                            <div>
                                                            <h4 className=" subheader1 ">{content.header}</h4>
                                                            <section>
                                                                {
                                                                    content.paragraph.map((detail) => {
                                                                        return (
                                                                            <ul>
                                                                                 <li className="subheader2">{detail.p}</li>                                                        
                                                                            </ul>
                                                                        );
                                                                    })
                                                                }
                                                            
                                                            </section>
                                                           
                                                            </div>
                                                          );
                                                     })
                                                
                                                }
                                                                                              
                                           </section>
                                
                                           <section className="col-lg-4 p-4">
                                           {
                    data.HomePages.map((directory) => {
                        return (
                            < >
                             <h4 className="content"> {directory.header}</h4>                               
                                    
                            {
                                directory.paragraph.map((details) => {
                                    return (
                                      
                                        <ul className="list-group list-group-flush ">
                                        <li className="list-group-item "> 
                                        <a  className="sub__header"
                                        href={details.link}>
                                            <span className=" px-2"> 
                                                <strong>
                                                    <i className="  fa fa-angle-double-right" aria-hidden="true"></i>
                                                </strong>                                                
                                            </span>{details.p}
                                            </a>
                                        </li>                       
                                       
                                    </ul> 
                                    );
                                })
                            }
                            </>
                        )
                    })
                }
                  </section>
               
                                </div>                             
                          </section>
                      )
                  })  
                }
            </div>
        )
    }
}

export default Services;