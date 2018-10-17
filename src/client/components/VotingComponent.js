import React from 'react';
import ChoiceBar from './ChoiceBar';

export default class VotingComponent extends React.Component {
    render() {
        const { vote } = this.props;
        return (<div>
            {vote.title}
            {vote.totalVotes}
            {vote.description}
            <div>{vote.map((vote) => {
                <ChoiceBar key={caches.id} {...vote}/>
            })}</div>
        </div>);
    }
}