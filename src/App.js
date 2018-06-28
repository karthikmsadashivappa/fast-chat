import React from 'react';
import Chatkit from '@pusher/chatkit';
import MessageList from './components/MessageList';
import { tokenUrl, instanceLocator } from './config';


class App extends React.Component {

  state = {
    messages: []
  }

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
              this.setState({
                  messages: [...this.state.messages, message]
              })
            }
          }
        });
      })
  }

  render() {
    return(
      <MessageList messages={this.state.messages}/>
    )
  }
}

export default App;