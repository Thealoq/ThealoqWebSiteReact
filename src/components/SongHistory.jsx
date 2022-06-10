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




    return (
        <div className='pageone'>
           <div className='bobs'>
              <div className='bob'>

              </div>
           </div>
        </div>
    )

}

export default SongHistory