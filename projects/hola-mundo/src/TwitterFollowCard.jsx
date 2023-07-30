import { useState } from 'react';
import './App.css';

export function TwitterFollowCard({children, formatUserName, username, initialIsFollowing}){

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    

    const text = isFollowing ? 'Siguiendo' : 'Seguir';

    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'> 

                <img 
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/dribbble/${username}`}
                    alt="Avatar Usuario"
                />

                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUsername'>{formatUserName(username)}</span>
                </div>
            </header>

            <aside>
                <button 
                    className={buttonClassName}
                    onClick={handleClick}>
                        <span className='tw-followCard-follow'>
                            {text}
                        </span>
                        <span className='tw-followCard-stopFollow'>
                            Dejar de seguir
                        </span>
                </button>
            </aside>
        </article>
    )
}