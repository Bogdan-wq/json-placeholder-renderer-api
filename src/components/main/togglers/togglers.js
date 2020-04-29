import React,{Component} from 'react';

export default class Togglers extends Component {

    buttons = [
        {label:"Posts",url:"posts"},
        {label:"Comments",url:"comments"},
        {label:"Albums",url:"albums"},
        {label:"Photos",url:"photos/?albumId=1"},
        {label:"Todos",url:"todos"},
        {label:"Users",url:"users"}
    ]




    render() {

        const buttons = this.buttons.map(({label,url}) => {

            const isActive = this.props.type === url;

            const {loading,error} = this.props;

            const isDisabled = loading || error;

            const clazz = isActive ? 'btn-secondary' : 'btn-outline-secondary';
            return (
                <button type="button"
                        key={label}
                        className={`btn ${clazz}`}
                        onClick={() => this.props.toggleType(url)}
                        disabled={isDisabled}>
                    {label}</button>
            )
        })

        return  (
            <div className="btn-group btn-group-lg">
                {buttons}
            </div>
        )
    }
}