import React, { useEffect, useState } from 'react';
function Github() {
    const [User, setData] = useState();
    useEffect(() => {
        fetch('https://api.github.com/users/Thealoq/repos')
            .then(response => response.json()
            )
            .then(data => {
                setData(data);
            });
    }, []);


    if (!User) {
        return <div className='box'><h3>Loading Data..</h3></div>;
    }

    return (
        <div className='boxi'>
            {
                User.map(item => {
                    return (

                        <div className='boxa'>
                            <div>
                                <div className='boxatitle'>
                                    <div>
                                     <a href={`https://github.com/${item.owner.login}/${item.name}`}>
                                        <span>{item.name}</span>
                                    </a>
                                    </div>
                                </div>
                                <div>
                                    <p>{item.stargazers_count} ⭐</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Github