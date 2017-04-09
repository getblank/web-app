import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Nav from 'components/Nav'
import * as historyActions from 'actions/historyActions'

const mapStateToProps = (state, props) => {
    return {
        links: Object.keys(state.config.data).map(storeName => {
            const storeDesc = state.config.data[storeName]
            const href = `#${storeName}`
            const { label } = storeDesc
            return { href, label }
        })
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(historyActions, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav)
