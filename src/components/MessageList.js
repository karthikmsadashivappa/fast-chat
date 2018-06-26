import React from 'react';

var data = [
			{
				senderId: 'Perter',
				text: 'Hello there'
			},
			{
				senderId: 'Karthik',
				text: 'Hey Wassup'
			},
			{
				senderId: 'Mr. Kats',
				text: 'How are you all'
			}
		]

class MessageList extends React.Component {
	render() {
		return (
			<div className="message-list">
				{data.map((message, index) => {
					return (
						<div key={index}>
							<div>{message.senderId}</div>
							<div>{message.text}</div>
						</div>
					)
				})}
			</div>
		)
	}
}

export default MessageList;