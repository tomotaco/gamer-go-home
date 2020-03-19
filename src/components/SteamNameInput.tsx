import React from 'react';

interface Props {
    onSteamNameChange: (str: string) => void;
    steamName: string;
};
interface State {};

  
  
export default class SteamNameInput extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement;
        this.props.onSteamNameChange(target.value);
    }

    render() {
        const name = this.props.steamName;
    return (
        <p>
            <input type="text" value={name}
            onChange={this.handleChange} />
            <span>{name}</span>
        </p>        
    );
  }
}
