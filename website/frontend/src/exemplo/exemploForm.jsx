import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search } from './exemploActions'

class ExemploForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        if(e.key === 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if(e.key === 'Escape') {
            props.handleClear()
        }
    }

    render() {
        return (
            <div role='form' className='exemploForm'>
                <Grid cols='12 9 10'>
                    <input
                        id='description'
                        className='form-control'
                        placeholder='Adicione uma tarefa'
                        value={this.props.description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}>
                    </input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={this.props.handleAdd}></IconButton>
                    <IconButton style='info' icon='search' onClick={this.props.handleSearch}></IconButton>
                    <IconButton style='default' icon='close' onClick={this.props.handleAdd}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.exemplo.description})
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ExemploForm)