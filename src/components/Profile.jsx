import React, { useEffect, useState } from 'react';
function Profile() {
  const [User, setData] = useState();
  useEffect(() => {
    fetch('https://api.lanyard.rest/v1/users/967151160156897390')
      .then(response => response.json()
      )
      .then(data => {
        setData(data.data);
      });
  }, []);

  if (!User) {
    return <div className='boxiy'><h1>Loading User..</h1></div>;
  }

  function Presence() {
    if (User.discord_status === 'offline') {
      return <div className='offline'></div>
    } else if (User.discord_status === 'online') {
      return <div className='online'></div>
    }
    else if (User.discord_status === 'idle') {
      return <div className='idle'></div>
    }
    else if (User.discord_status === 'dnd') {
      return <div className='dnd'></div>
    }
  }



  


  function Data (time) {
    var date = new Date(time);
    return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  }
   


  function Bio() {
    if (User.spotify) {
      setTimeout(() => {
        document.getElementById('test').style.backgroundImage = `url(${User.spotify.album_art_url})`;
        document.getElementById('test').style.backgroundSize = 'cover'
        document.getElementById('test').style. backgroundRepeat = 'no-repeat'
      }, 600);
      return (
        <div className='bio'>
          <div className='spoftytext'>
            <div className='songtitle'>
              <span>{User.spotify.song}</span>
            </div>
            <div className='songartist'>
              <span>{User.spotify.artist}</span>
            </div>
          </div>
        </div>
      )
    } else {
      if(User.activities.length)
      if (User.activities[0].name == "Visual Studio Code") {
        setTimeout(() => {
          document.getElementById('test').style.backgroundImage = `url(https://cdn.discordapp.com/app-assets/${User.activities[0].application_id}/${User.activities[0].assets.large_image}.png)`;
        }, 600);
        return (
          <div className='biom'>
            <div className='vsctext'>
              <div className='title'>
              <span>{User.activities[0].name}</span>
              </div>
              <div className='smalltitle'>
                <span>{User.activities[0].details }</span>
              </div>
              <div className='smalltitle'>
                <span>{User.activities[0].state}</span>
              </div>
            </div>
          </div>
        )
      } else {
        if (User.activities.length) return (
          <div className="biom">
             <div className='spoftytext'>
               <div>
                    Bir Aktivitesi Bulunmuyor
               </div>
               <div>
                    {User.discord_user.username} 🎆
               </div>
             </div>
          </div>
        )
      }

    }


  }

  return (
    <div className="box">
      <div id='test' className='boxiy'>
        <div className='TextAll'>
          <span className='Text'>Hello I' am <b className='nick'>{User.discord_user.username}#{User.discord_user.discriminator}</b> 👋</span>
        </div>
        <div className='avatar'>
          <img src={`https://cdn.discordapp.com/avatars/${User.discord_user.id}/${User.discord_user.avatar}.gif?size=1024`} />
          {
            Presence()
          }
        </div>
      </div>
      <div className="biocard">
        <div className=''>
          {
            Bio()
          }
        </div>
      </div>
    </div>
  )
}

export default Profile
