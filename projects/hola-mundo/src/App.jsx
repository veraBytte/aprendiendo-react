import React from 'react';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {

    //Metodo para formatear cdenas de texto en este caso el nombre de usuario con un @
    const format = (username) => `@${username}`;

    return (
        <> 
            <section className='tw-container-recommend'>
                <TwitterFollowCard
                    initialIsFollowing
                    formatUserName={format} 
                    username="omidnikrah" >
                        
                    Omar Krasshon
                </TwitterFollowCard>

                <TwitterFollowCard
                    initialIsFollowing={false}  
                    formatUserName={format} 
                    username="montyhayton" >
                    
                    Manuel Hayton
                </TwitterFollowCard>
            </section>
        </> 
    )
}