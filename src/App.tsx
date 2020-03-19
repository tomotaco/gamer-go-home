import * as React from 'react';
import './App.css';
import SteamNameInput from './components/SteamNameInput';

interface Props {
  steamName?: string,
  steamId64?: number
};

interface State {
  steamName: string,
  steamId64?: number
};

export default class App extends React.Component<Props, State> {
  static defaultProps: Props = {
    steamName: '',
    steamId64: 0
  }
  constructor(props: Props) {
    super(props);
    this.state = {
      steamName: "",
      steamId64: 0
    };
    this.handleSteamNameChange = this.handleSteamNameChange.bind(this);
  }

  handleSteamNameChange = (name: string) => {
      this.setState({ steamName: name });
  };

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>またSteamセール会場へ来たの?</p>
          <h1>積みゲーマーよ、お家へお帰り</h1>
          <p>キミのSteamライブラリにはこんな素敵なゲームが積まれているよ!</p>
          
          <p>
            <SteamNameInput steamName={this.state.steamName}
            onSteamNameChange={this.handleSteamNameChange} />
          </p>
        </header>
      </div>
    );
  }
}
