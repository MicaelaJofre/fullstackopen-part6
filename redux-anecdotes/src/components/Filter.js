import { connect } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

const Filter = ({ setFilter }) => {


    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={(e) => setFilter(e.target.value)} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes
    }
}
const mapDispatchToProps = {
    setFilter
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)