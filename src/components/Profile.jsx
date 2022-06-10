import React, { useEffect, useState } from 'react'
import Client from '../Client';
import config from '../config';


function Profile() {
  const [User, setData] = useState();
  useEffect(() => {
    fetch(`https://api.lanyard.rest/v1/users/${config.userId}`)
      .then(response => response.json()
      )
      .then(data => {
        setData(data.data);
      });
  }, []);
  

  const [Mach, SetMach] = useState();
  useEffect(() => {
    Client.UserManager.FetchCurrentPlaying(config.userId)
      .then(data => {
        SetMach(data);
      });
  }, []);



  if (!User) {
    return <div className='boxiy'><h1>Loading User..</h1></div>;
  }

  function Presence() {
    if (User.discord_status === 'offline') {
      setTimeout(() => {
        document.getElementById("avim").style.border = "6px solid #212121 "
        document.getElementById('test').style.backgroundImage = `url("https://cdn.discordapp.com/attachments/976236953819299890/984727023366852658/offline.gif?size=2048")`;
        document.getElementById('test').style.backgroundSize = 'cover'
        document.getElementById('test').style.backgroundRepeat = 'no-repeat'
        document.getElementById('test').style.backgroundPosition = 'center'
      }, 100);
    } else if (User.discord_status === 'online') {
      setTimeout(() => {
        document.getElementById("avim").style.border = "6px solid #107a0c"

      }, 100);
    }
    else if (User.discord_status === 'idle') {
      setTimeout(() => {
        document.getElementById("avim").style.border = "6px solid #ffb100"
      }, 100);

    }
    else if (User.discord_status === 'dnd') {
      setTimeout(() => {
        document.getElementById("avim").style.border = "6px solid #931c1c"
      }, 100);
    }
  }

  function PreseneceLook() {
    if (User.spotify) {
      setTimeout(() => {
        document.getElementById('test').style.backgroundSize = 'cover'
        document.getElementById('test').style.backgroundRepeat = 'no-repeat'
        document.getElementById('test').style.backgroundPosition = 'center'
        if (![...Mach.Track?.Artists][0].Banner || [...Mach.Track?.Artists][0].Banner == undefined) return document.getElementById('test').style.backgroundImage = `url(${User.spotify.album_art_url})`;
        else document.getElementById('test').style.backgroundImage = `url(https://i.scdn.co/image/${[...Mach.Track?.Artists][0].Banner})`;
      }, 600);
      return (
        <div className='bio'>
          <div className='tiloq'>
          <div className='spoftytext'>
            <div className='songtitle'>
              <span>{User.spotify.song}</span>
            </div>
            <div className='songartist'>
              <span>{User.spotify.artist}</span>
            </div>
          </div>
          </div>
        </div>
      )
    } else {
      if(!User.activities || !User.activities[0]) {
        setTimeout(() => {
          document.getElementById("avim").style.border = "6px solid #212121 "
          document.getElementById('test').style.backgroundImage = `url("https://cdn.discordapp.com/attachments/976236953819299890/984727023366852658/offline.gif?size=2048")`;
          document.getElementById('test').style.backgroundSize = 'cover'
          document.getElementById('test').style.backgroundRepeat = 'no-repeat'
          document.getElementById('test').style.backgroundPosition = 'center'
        }, 100);
        return <div id='test' className="biom"><div className='tiloq'><div>Bir Aktivitesi Bulunmuyor</div><div> {User.discord_user.username} 🎆 </div></div></div>
      }
        if (User.activities && User.activities.length > 0) {
        if (User.activities[0].name == "Visual Studio Code") {
          setTimeout(() => {
            document.getElementById('test').style.backgroundImage = `url(https://cdn.discordapp.com/app-assets/${User.activities[0].application_id}/${User.activities[0].assets.large_image}.png)`;
          }, 600);
        } else {
          if(!User.activities[0].assets || !User.activities[0].assets.large_image) {
           let World = User.activities[0].name.split(' ')
           let NewWorld = World.map(word => word.charAt(0).toUpperCase() + word.slice(1))
           
           for (let i = 0; i <  World.length; i++) {
            setTimeout(() => {
              document.getElementById('test').style.backgroundImage = `url(https://via.placeholder.com/1820x700.png?text=${NewWorld})`;
              document.getElementById('test').style.backgroundSize = 'cover'
              document.getElementById('test').style.backgroundRepeat = 'no-repeat'
              document.getElementById('test').style.backgroundPosition = 'center'
            }, 600);
            }
          } else {
            setTimeout(() => {
              document.getElementById('test').style.backgroundImage = `url(https://cdn.discordapp.com/app-assets/${User.activities[0].application_id}/${User.activities[0].assets.large_image}.png?size=2048)`;
              document.getElementById('test').style.backgroundSize = 'cover'
              document.getElementById('test').style.backgroundRepeat = 'no-repeat'
              document.getElementById('test').style.backgroundPosition = 'center'
            }, 600);
          }
       
        }
        return (
          <div className='bio'>
            <div className='tiloq'>
           
                <div className='songtitle'>
                  <span>{User.activities[0].state}</span>
                </div>
                <div className='songartist'>
                  <span >{User.activities[0].name}</span>
                </div>
                <div>
                  <span>{User.activities[0].details}</span>
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
      <div id='avim' className='avatar'>
          <img src={`https://cdn.discordapp.com/avatars/${User.discord_user.id}/${User.discord_user.avatar}.${User.discord_user.avatar.startsWith("a_") ? "gif" : "png"}?size=1024`} />
        </div>
        <div className='TextAll'>
          <span className='Text'>Hello I' am <b className='nick'>{User.discord_user.username}#{User.discord_user.discriminator}</b> 👋</span>
        </div>
      
      </div>
      <div className="biocard">
        <div className='hello'>
          {
            PreseneceLook()
          }
          {
            Presence()
          }
        </div>
      </div>
    </div>
  )
}

export default Profile
