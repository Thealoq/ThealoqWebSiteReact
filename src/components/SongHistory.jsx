import React, { useEffect, useState } from 'react';
import Client from '../Client';
function SongHistory() {
    const [User, setData] = useState();
   
    useEffect(() => {
        Client.UserManager.FetchHistory("967151160156897390")
          .then(data => {
            setData(data)
          });
      }, []);


      if(!User) {
        return <div className='boxiy'><h1>Loading User..</h1></div>;
      }
        
    return (
        <div className='pageone'>
           <div className='bobs'>
              <div className='bob'>
                   {
                     User.map(a => {
                       console.log(a.Track.Artists);
                     })
                   }
              </div>
           </div>
        </div>
    )

}

export default SongHistory