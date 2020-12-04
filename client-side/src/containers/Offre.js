import { connect } from "react-redux"
import Off from "../table-offres.js"

const { default: fetchAllOffers } = require("../actions creators/offres/fetch")

const mapStateToProps = state => ({
    poste:state.offres.poste,
    salaire:state.offres.salaire,
    travail:state.offres.travail,
    skills:state.offres.skills,
    description:state.offres.description,
    contrat:state.offres.contrat,
    diplome:state.offres.diplome,
    experience:state.offres.experience,

})

const mapDispatchToProps = (dispatch) => ({
    fetchAllOffers: () => {
        dispatch(fetchAllOffers())
    }
})

const Offre = connect(mapStateToProps, mapDispatchToProps)(Off)
export default Offre

