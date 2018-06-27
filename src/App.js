import React from 'react';
import Chatkit from '@pusher/chatkit';
import MessageList from './components/MessageList';
import { tokenUrl, instanceLocator } from './config';


class App extends React.Component {

  componentDidMount() {
    var chatManager = new Chatkit.ChatManager({
        instanceLocator,
        userId: 'karthik',
        tokenProvider: new Chatkit.TokenProvider({
          url: tokenUrl
        })
    })

      chatManager.connect()
      .then(currentUser => {
        currentUser.subscribeToRoom({
          roomId: 10387571,
          hooks: {
            onNewMessage: message => {
              console.log('message.text: ', message.text);
            }
          }
        });
      })
  }

  render() {
    return(
      <MessageList />
    )
  }
}

export default App;