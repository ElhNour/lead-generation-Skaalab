import Axios from 'axios'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import './offres.css'

class OFFRE extends Component {
   constructor(props) {
      super(props)
      this.state = {
         Offers: [
         ],
         loading: true,
         size:0,
       
      }
      
   }

   componentDidMount() {
      var name = this.props.match.params.name;
      Axios.get('http://localhost:3003/api/offres/'+name).then(res => {

         console.log("res", res.data)
         this.setState({ Offers: res.data, loading: false });
         this.setState({ size:this.state.Offers.length  });

      });

   }


   renderTableHeader() {

      let header = Object.keys(this.state.Offers[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }
   renderTableData() {
      return this.state.Offers.map((offer, index) => {
         const { poste, salaire, travail, skills, description, contrat, diplome, experience } = offer;
         return (
            <tr >

               <td>{poste}</td>
               <td>{salaire}</td>
               <td>{travail}</td>
               <td>{skills}</td>

               <td>{contrat}</td>
               <td>{diplome}</td>
               <td>{experience}</td>
               <td><div className="desc">{description}</div></td>



            </tr>
         )
      })
   }

   render() {
      return (
         <div >
            {this.state.loading ?
               'loading...'

               :
               <>
                  <h1 id='title'>Offers List Table //{this.state.size}//</h1>
                  <table id='offers'>
                     <tbody>

                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                     </tbody>
                  </table>
               </ >
            }
         </div>
      )
   }

}
export default withRouter(OFFRE)