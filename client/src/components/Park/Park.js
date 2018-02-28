import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Image, Item, Popup, Icon } from 'semantic-ui-react';
import classes from './Park.css';
import { bindActionCreators } from 'redux';
import { updateCurrentUser, fetchCurrentUser } from '../../store/actions/index';

class Park extends Component {

    state = {
        showAddParkBtn: true,
        hideable: false,
        showPark: true
    };

    componentWillMount = () => {
        const isHideable = !!this.props.selectedUser && parseInt(this.props.match.params.userId, 10) === this.props.currentUser.id;
        const addBtnShowable = this.props.park.users.some(user => (user.id === this.props.currentUser.id));

        this.setState({
            showAddParkBtn: addBtnShowable ? false : true,
            hideable:  isHideable ? true : false
        });
    };

    shouldComponentUpdate = (nextProps, nextState) => (
        this.props !== nextProps || this.state !== nextState
    );

    componentWillReceiveProps = nextProps => {
        if (this.props.selectedUser !== nextProps.selectedUser){
            const isHideable = parseInt(nextProps.match.params.userId, 10) === nextProps.currentUser.id 
            const addBtnShowable = nextProps.park.users.some(user => (user.id === nextProps.currentUser.id));

            this.setState({
                showAddParkBtn: addBtnShowable ? false : true,
                hideable: isHideable ? true : false
            });
        };
    };

    handleAddRemovePark = () => {
        this.setState({ 
            showAddParkBtn: !this.state.showAddParkBtn,
            showPark: this.state.hideable ? false : true 
        });

        this.props.updateCurrentUser(this.props.currentUser, 'parksList', this.props.park.id);
    }

    render(){

        const isFenced = this.props.park.fenced ? "Fenced" : "Open Off Leash Area";
        const parkAddress = !this.props.park.address_2 ? `${this.props.park.address_1}` : `${this.props.park.address_1} and ${this.props.park.address_2}`;
        const hours = `${this.props.park.hours_open} A.M. to ${this.props.park.hours_close}`;

        const userPopups = this.props.park.users.map(user => {
            const popupHeader = <Popup.Header>
                                    <Image 
                                        src={user.profile_image_url} 
                                        verticalAlign='middle' 
                                        circular 
                                    />
                                </Popup.Header>;

            return <Popup
                key={user.username}
                trigger={<Image src={user.profile_image_url} avatar />}
                header={popupHeader}
                content={user.username}
                className={classes.Popup}
            />;
        });


        const parkIcon = <Popup
                            trigger={<Icon 
                                        name={this.state.showAddParkBtn ? "add circle" : "remove circle"}
                                        onClick={() => this.handleAddRemovePark()}
                                        size="large"
                                        color={this.state.showAddParkBtn ? "green" : "red"}
                                        className={classes.ParkIcon} 
                                    />}
                            content={this.state.showAddParkBtn ? `Add ${this.props.park.name} to my favorites.` : `Remove ${this.props.park.name} from my favorites`}
                            basic 
                        />;

        let park = <Item className={classes.Content}>
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
                                <strong>Visitors:</strong> {userPopups.length !== 0 ? userPopups : 'None yet. Be the first to visit!'}
                            </Item.Extra>
                        </Item.Content>
                    </Item>

        park = this.state.hideable && !this.state.showPark ? <div></div> : park;

        return park;
    };
};

const mapStateToProps = state => {
    const { loading } = state.park;
    const { currentUser } = state.auth;
    const { selectedUser } = state.user
    return {
        loading,
        currentUser,
        selectedUser
    };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ updateCurrentUser, fetchCurrentUser }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Park));
