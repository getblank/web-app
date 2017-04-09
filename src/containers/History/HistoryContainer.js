import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
    return { ...state.history }
}

class HistoryContainer extends Component {
    render() {
        const { items } = this.props
        return <div>
            <h3>History</h3>
            {items.map((h, i) => {
                return (
                    <p key={i}>{h}</p>
                )
            })}
        </div>
    }
}

export default connect(
    mapStateToProps,
)(HistoryContainer)
