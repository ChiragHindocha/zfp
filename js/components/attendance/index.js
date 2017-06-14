
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, H3, Button, Icon, Footer, FooterTab, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
//import Calendar from 'react-native-calendar';
//import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
//import {Calendar} from 'react-native-calendars';
import Calendar from "react-native-calendar-component";

class Attendance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  handleNextButtonPress() {
    const date = new Date(this.state.date);
    date.setMonth(date.getMonth() + 1);
    this.setState({
      date
    });
  }

  handlePrevButtonPress() {
    const date = new Date(this.state.date);
    date.setMonth(date.getMonth() - 1);
    this.setState({
      date
    });
  }

  handleDateSelect(date) {
    alert(`clicked: ${this.state.date.toString()}`);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Attendance</Title>
          </Body>
          <Right />

        </Header>


        <Content padder>
          <Calendar
            date={this.state.date}
            onPrevButtonPress={() => this.handlePrevButtonPress()}
            onNextButtonPress={() => this.handleNextButtonPress()}
            onDateSelect={(date) => this.handleDateSelect(date)} />

        </Content>


        {/*<Footer>
          <FooterTab>
            <Button active full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>*/}
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(Attendance);
