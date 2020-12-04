import React from 'react'
import './startups.css'
import { BrowserRouter as Router, Link } from "react-router-dom"
import fetchAllStartups from './actions creators/startups/fetch'
import { useEffect } from 'react'
const Table = ({
   startups = [],
   loading = false,
   fetchAllStartups = f => f
}) => {
   useEffect(()=>{
      fetchAllStartups()
   },fetchAllStartups)
   const renderTableHeader = () => {
      if (startups.length) {
         let header = Object.keys(startups[0])
         return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
         })
      }

   }
   const renderTableData = () => {
      return startups.map((Startup, index) => {
         const { name, website } = Startup
         return (

            <tr>
               <td >
                  <Link to={'/offre/' + name}>
                     {name}
                  </Link>
               </td>

               <td id="web">
                  <a href={website}>{website}
                  </a></td>


            </tr>

         )

      })
   }
   return <div >
      {loading ?
         'loading...'
         :
         <>
            {/* <h1 id='title'>Start-ups List Table //{state.size}//</h1> */}
            <table id='offers'>
               <tbody>

                  <tr>{renderTableHeader()}</tr>

                  {renderTableData()}

               </tbody>
            </table>
         </ >
      }
   </div>
}


export default Table 