import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Item, Popup, Icon } from 'semantic-ui-react';
import classes from './Park.css';
import { bindActionCreators } from 'redux'
import { fetchPark, updateUser } from '../../../store/actions/index';

class Park extends Component {

    state = {
        showAddParkBtn: true
    }

    componentWillMount(){
        if (this.props.currentUser.parks.find(park => (park.id === this.props.park.id))){
            this.setState({
                showAddParkBtn: false
            })
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.state !== nextState;
    }

    handleAddPark = () => {
        this.setState({
            showAddParkBtn: false,
        })
        this.props.hasAddedParks();
        this.props.updateUser(this.props.currentUser, 'parksList', this.props.park.id);
    }

    render(){

        const isFenced = this.props.park.fenced ? "Fenced" : "Open Off Leash Area"
        const parkAddress = !this.props.park.address_2 ? `${this.props.park.address_1}` : `${this.props.park.address_1} and ${this.props.park.address_2}`
        const hours = `${this.props.park.hours_open} A.M. to ${this.props.park.hours_close}`

        let userPopups;
        userPopups = this.props.park.users.map(user => {
            const popupHeader = <Popup.Header>
                <Image src={user.profile_image_url} verticalAlign='middle' circular />
            </Popup.Header>

            return <Popup
                key={user.username}
                trigger={<Image src={user.profile_image_url} avatar />}
                header={popupHeader}
                content={user.username}
                className={classes.Popup}
            />
        })

        const parkVisitors = (<React.Fragment>
            <strong>Visitors:</strong> {userPopups.length !== 0 ? userPopups : 'None yet. Be the first to visit!'}
        </React.Fragment>)

        let parkIcon = null;
        if (this.state.showAddParkBtn) {
            parkIcon = <Popup
                trigger={<Icon name="add circle"
                    onClick={this.handleAddPark}
                    size="large" color="green"
                    className={classes.ParkIcon} />}
                content="Add park to my favorites."
                basic />;
        }

        return (

            <Item className={classes.Content}>
                <Image className={classes.ParkImage} rounded src={this.props.park.image_url} />
                <Item.Content verticalAlign='middle'>
                    {parkIcon}
                    <Item.Header>{this.props.park.name} </Item.Header>
                    <Item.Meta>
                        <span>{parkAddress}</span>
                    </Item.Meta>
                    <Item.Description>{this.props.park.description}</Item.Description>
                    <Item.Extra>
                        <strong>{isFenced}</strong><br />
                        <strong>Hours:</strong>{hours}<br />
                        {userPopups ? parkVisitors : null}
                    </Item.Extra>
                </Item.Content>
            </Item>

        )
    }
   


};

const mapStateToProps = state => {
    const { loading } = state.park;
    const { currentUser } = state.user;
    return {
        loading,
        currentUser
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({ updateUser }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Park)
