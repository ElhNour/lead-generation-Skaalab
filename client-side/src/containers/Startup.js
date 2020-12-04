import { connect } from "react-redux"
import Tab from "../table-startups"

const { default: fetchAllStartups } = require("../actions creators/startups/fetch")

const mapStateToProps = state => ({
    startups:state.startups.startups,
    loading:state.startups.loading
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllStartups: () => {
        dispatch(fetchAllStartups())
    }
})

const Table = connect(mapStateToProps, mapDispatchToProps)(Tab)
export default Table

