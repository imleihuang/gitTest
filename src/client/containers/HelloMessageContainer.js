import React from 'react';
import HelloMessage from '../components/HelloMessage';
import * as Action from '../actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


    function mapStateToProps(state) {
       return {
           greeting: state.greeting
       }
    }


function mapDispatchToProps(dispatch) {
    bindActionCreators(Action, dispatch);
}

class HelloMessageContainer extends React.Component {
    render() {
        const { greeting, updateGreeting } = this.props;
        return (
            <div>
                <input onChange= {event => updateGreeting(event.target.value)} value={greeting}/>
                Hello 
                <HelloMessage value={greeting} />
                </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloMessageContainer);