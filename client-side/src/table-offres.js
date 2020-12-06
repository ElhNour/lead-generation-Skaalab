import React, { Component } from 'react'
import { withRouter } from 'react-router'
import './offres.css'
import { useEffect } from 'react'

const OFFRE = ({
   offers = [],
   match,
   loading = false,
   fetchAllOffers = f => f,
   fetchOffers = f=>f
}) => {
   useEffect(()=>{
         if(match.state && match.state.fromStartups){
        fetchOffers(match.params.name,match.state.filtre)
      }else fetchAllOffers(match.params.name)
     
   },[match],fetchAllOffers)
   const renderTableHeader = () => {
      if (offers.length) {
         let header = Object.keys(offers[0])
         return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
         })
      }

   }

  
   const renderTableData = () => {
      return offers.map((offer, index) => {
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


      return (
         <div >
            {loading ?
               'loading...'

               :
               <>
                  <h1 id='title'>Offers List Table</h1>
                  <table id='offers'>
                     <tbody>

                        <tr>{renderTableHeader()}</tr>
                        {renderTableData()}
                     </tbody>
                  </table>
               </ >
            }
         </div>
      )
   }


export default withRouter(OFFRE)