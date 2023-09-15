import React, { useState } from 'react';
import passport from '../photo/passport1.jpg'







function VotingPage({ user, onSignOut }) {

    const [hasVoted, setHasVoted] = useState(user.hasVoted);
    const [votedParty, setVotedParty] = useState('');


    const handleVote = (partyName) => {
        if (hasVoted) {
            alert(`You have already voted for ${votedParty}. Please stop the corruption`);
        } else {
            setHasVoted(true);
            setVotedParty(partyName);
            user.hasVoted = true;
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
                    Vote
                </button>
                <button className='vote-btn'>Unvote</button>
            </div>
        );
    };




    return (
        <div>

            <main className='row'>
                <div className='col-2' style={{ padding: "30px" }}>
                    <img src={passport} alt="" />
                    <p>Hello! {user.fullName}</p>
                    <p>Email: {user.email}</p>
                    <p>Voters ID: {user.votersId}</p>

                </div>
                <div className='col-10'>
                    <nav>
                        <a href="#">HOME</a>
                        <a href="#">ABOUT US</a>
                        <a href="#">CONTACT US</a>
                    </nav>
                    <div className='d-flex justify-content-between'>
                        <h4>Welcome</h4>
                        <button className='btn btn-danger' onClick={onSignOut}>Sign out</button>
                    </div>


                    <p>Vote wisely <br />Vote for the party that will not make you cry after voting</p>





                    <div className='container voting-container'>
                        <div className='row' >
                            <div className='col-8 text-center' style={{ border: "2px solid black" }}>PARTIES</div>
                            <div className='col-4 text-center' style={{ border: "2px solid black" }}>SCORES</div>

                        </div>

                        <div className='parties row'>
                            <div className='col-4'>
                                <h1>LP</h1>
                                <button className='vote-btn'>Vote </button>
                                <button className='vote-btn'>Unvote</button>
                            </div>
                            <div className='col-4'>
                                <h1>APP</h1>
                                <img src={passport} alt="" />
                                <button button className='vote-btn'>Vote</button>
                                <button button className='vote-btn'>Unvote</button>
                            </div>
                            <div className='col-2 p-4 text-center align-items-center'>
                                0
                            </div>
                            <div className='col-2 p-4'>
                                0
                            </div>


                        </div>
                        <div className='parties row'>
                            <div className='col-4'>
                                <h1>PDP</h1>
                                <button className='vote-btn'>Vote </button>
                                <button className='vote-btn'>Unvote</button>
                            </div>
                            <div className='col-4'>
                                <h1>APC</h1>
                                <button button className='vote-btn' >Vote</button>
                                <button button className='vote-btn' >Unvote</button>
                            </div>
                            <div className='col-2 p-4 text-center align-items-center'>
                                0
                            </div>
                            <div className='col-2 p-4'>
                                0
                            </div>


                        </div>

                        <div className='parties row'>
                            <div className='col-4'>
                                <h1>AD</h1>
                                <button className='vote-btn'>Vote </button>
                                <button className='vote-btn'>Unvote</button>
                            </div>
                            <div className='col-4'>
                                <h1>NNPP</h1>
                                <button button className='vote-btn'>Vote</button>
                                <button button className='vote-btn' >Unvote</button>
                            </div>
                            <div className='col-2 p-4 text-center align-items-center'>
                                0
                            </div>
                            <div className='col-2 p-4'>
                                0
                            </div>


                        </div>

                    </div>

                </div>

            </main>

        </div>
    )
}

export default VotingPage