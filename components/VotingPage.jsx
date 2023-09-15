import React, { useState } from 'react';
import photo from "../public/vercel.svg";
import Image from 'next/image'

function VotingPage({ user, onSignOut }) {
    const [hasVoted, setHasVoted] = useState(user.hasVoted);
    const [votedParty, setVotedParty] = useState('');
    const [partyScores, setPartyScores] = useState({
        LP: 0,
        APP: 0,
        PDP: 0,
        APC: 0,
        AD: 0,
        NNPP: 0,
        // Add more parties and initialize their scores here if needed
    });

    const handleVote = (partyName) => {
        if (hasVoted) {
            alert(`You have already voted for ${votedParty}`);
        } else {
            setHasVoted(true);
            setVotedParty(partyName);
            // You can update the user's `hasVoted` property in your user data here.
            // For simplicity, I'm updating it in-place. You may want to update it in your data.js file.
            user.hasVoted = true;

            // Update the party score
            setPartyScores((prevScores) => ({
                ...prevScores,
                [partyName]: prevScores[partyName] + 1,
            }));
        }
    };

    const handleUnvote = (partyName) => {
        if (hasVoted && votedParty === partyName) {
            setHasVoted(false);
            setVotedParty('');
            // You can update the user's `hasVoted` property in your user data here.
            // For simplicity, I'm updating it in-place. You may want to update it in your data.js file.
            user.hasVoted = false;

            // Decrement the party score
            setPartyScores((prevScores) => ({
                ...prevScores,
                [partyName]: prevScores[partyName] - 1,
            }));
        }
    };

    const renderVoteButtons = (partyName) => {
        return (
            <div className='col-4'>
                <h1>{partyName}</h1>
                <button
                    className='vote-btn'
                    onClick={() => handleVote(partyName)}
                    disabled={hasVoted}
                >
                    {hasVoted ? 'Already Voted' : 'Vote'}
                </button>
                <button
                    className='vote-btn'
                    onClick={() => handleUnvote(partyName)}
                    disabled={!hasVoted || votedParty !== partyName}
                >
                    Unvote
                </button>
                <div className='score'>{partyScores[partyName]}</div>
            </div>
        );
    };

    return (
        <div>
            <main className='row'>
                <div className='col-2' style={{ padding: '30px' }}>
                    <Image src={user.passport} alt='Passport' width={50} height={50} />
                    <p>Hello! {user.fullName}</p>
                    <p>Email: {user.email}</p>
                    <p>Voters ID: {user.votersId}</p>
                </div>
                <div className='col-10'>
                    <nav>
                        <a href="#">HOME</a>
                        <a href="#">ABOUT US</a>
                        <a href="#">CONTACT US</a>

                        <button className='sign-out' onClick={onSignOut}>
                            Sign out
                        </button>
                    </nav>
                    <div className='d-flex justify-content-between'>
                        <h4>Welcome</h4>
                        
                    </div>

                    <p>Vote wisely</p>

                    <div className='container voting-container'>
                        <div >
                            <div className=' text-center' style={{ border: '2px solid black' }}>
                                PARTIES
                            </div>

                        </div>

                        <div className='parties row'>
                            {renderVoteButtons('LP')}
                            {renderVoteButtons('APP')}
                            {renderVoteButtons('PDP')}
                            {renderVoteButtons('APC')}
                            {renderVoteButtons('AD')}
                            {renderVoteButtons('NNPP')}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default VotingPage;
