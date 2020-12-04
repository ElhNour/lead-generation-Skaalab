import './navForm.css';
import React, { useState } from "react"
import { Button } from 'reactstrap';


const NavForm = (
    {
        filtreStartups = f => f
    }
) => {
    const [filtre, setFiltre] = useState({
        source: 0,
        travail: '',
        technologie: '',
        contrat: ''
    })
    function handleChangeSource(e) {
        e.preventDefault()
        setFiltre(
            {
                ...filtre,
                source: e.target.value
            }
        )
    }
    function handleChangeTech(e) {
        e.preventDefault()
        setFiltre(
            {
                ...filtre,
                technologie: e.target.value
            }
        )
    }
    function handleChangeContrat(e) {
        e.preventDefault()
        setFiltre(
            {
                ...filtre,
                contrat: e.target.value
            }
        )
    }
    function handleChangeCheck(e) {
        e.preventDefault()
        setFiltre(
            {
                ...filtre,
                travail: e.target.value ? 'Remote' : ''
            }
        )

    }
    return <nav className="box">

        <div className="element sourcedropdown" >
            <label>Source :</label>
            <select className="form-control" name="Source" onChange={e => handleChangeSource(e)} >
                <option selected>Select Source</option>
                <option value={1}>Welcome To The Jungle</option>
                <option value={2}>Indeed</option>
                <option value={3}>Angellist</option>
            </select>

        </div>

        <div className="element Techdropdown">
            <label>Technology :</label>
            <select className="form-control" name="Tech" onChange={e => handleChangeTech(e)}>
                <option selected>Select Technology</option>
                <option className="dropdown-item" value="React">React</option>
                <option className="dropdown-item" value="Node">Node</option>
                <option className="dropdown-item" value="Angular">Angular</option>
            </select>
        </div>


        <div id="contrat" className="element contrat">
            <label>Contract :</label>
            <select className="form-control" name="Contract" onChange={e => handleChangeContrat(e)}>
                <option selected>Select contract</option>
                <option className="dropdown-item" value="CDD">CDD</option>
                <option className="dropdown-item" value="CDI">CDI</option>
                <option className="dropdown-item" value="Stage">Stage</option>
                <option className="dropdown-item" value="Alternance">Alternance</option>
                <option className="dropdown-item" value="Apprentissage">Apprentissage</option>

        e.preventDefault()
      </select>
        </div>
        <div id="checkbox" className="element checkbox">
            <label check>
                <input type="checkbox" name="Remote" onChange={e => handleChangeCheck(e)} />{' '}
      Remote
     </label>
        </div>
        <Button id="button" onClick={e => {
            console.log(filtre)
            filtreStartups(filtre)
        }}>Submit</Button>

    </nav>
}

export default NavForm