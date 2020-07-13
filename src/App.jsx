import React from 'react';
import EmojiApp from './components/EmojiAPI';
import Form from './components/Form'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      search: '',
      items: [],
      isLoaded: false,
    }
  }

  searchSpace(e) {
    return(
      this.setState({ ...this.state, search: e.target.value })
    )
  }

  componentDidMount() {
    const apiKey = 'e34266cb0a624c016e8a2a833aad50c6b8648cda'
    const URL = `https://emoji-api.com/emojis?access_key=${apiKey}`
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {
    
    let { isLoaded, items, search } = this.state;

    return (
      <div className="app">
        <h1 className='text-center'>Emoji Search</h1>
        <Form searchSpace={(e) => this.searchSpace(e)}/>
        <EmojiApp items={this.state.items} loading={this.state.isLoaded} search={this.state.search}/>
      </div>
    )
  }
}

