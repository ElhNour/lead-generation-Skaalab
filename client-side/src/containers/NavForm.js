import { connect } from "react-redux"
import Form from "../navForm"
import fetchStartups from '../actions creators/startups/fetchStartups'



const mapDispatchToProps = (dispatch) => ({
    filtreStartups: (filtre) => {
        dispatch(fetchStartups(filtre))
    }
})

const NavForm = connect(null, mapDispatchToProps)(Form)
export default NavForm

