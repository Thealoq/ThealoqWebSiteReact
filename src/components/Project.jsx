import React, { useEffect, useState } from 'react';
function Project() {
    let array = [{
        name: 'GhostNight',
        link: 'https://cdn.discordapp.com/attachments/938465474876948581/977118329477165116/logo.png',
        desc: 'Social media platform',
        url: "https://GhostNight.xyz"
    },
    {
        name: 'DiscordBio',
        link: 'https://cdn.discordapp.com/attachments/932033611920736316/933421635241918474/logo.png',
        desc: 'DiscordBio is a Discord bot that allows you to add a bio to your Discord account.',
        url: "https://DiscordBio.xyz"
    },
    ];
    return (
        <div>
            <div>
                <h1>Project</h1>
            </div>
            <div className='projectbox'>
                {array.map(a => {
                    return (
                        <div className='project'>
                               <a href={a.url}>
                               <div >
                                    <img src={a.link} alt="project" />
                                </div>
                                <div>
                                    <span>{a.name }</span>
                                </div>
                                <div>
                                    <span>{a.desc}</span>
                                </div>
                               </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
export default Project
