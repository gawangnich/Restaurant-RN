/* eslint-disable react/no-unused-state */
import React from 'react';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Container, Card, CardItem, Body, Text, View } from 'native-base';
import PropTypes from 'prop-types';
// import NoData from '../../components/layouts/NoData';
import Inbox from '../../../assets/svgs/InboxIcon';
import i18n from '../../i18n';
// import { IMAGES } from '../../configs';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import styles from './styles';
// import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      data: false
    };
  }
  componentDidMount() {
    // this._getData();
  }

  //   _getData = async () => {
  //     const result = await ENDPOINT.allVoucher();
  //     console.log(result);
  //     if (result > 0) {
  //       this.setState({ allData: result.data.data, data: true });
  //       console.log(this.state.allData);
  //     }
  //   };

  _onPress = (title, code, photo, description, value, exp, minimal) => {
    this.props.navigation.navigate('DetailInbox', { title, code, photo, description, value, exp, minimal });
  };

  _renderCard = () => (
    <View style={styles.content}>
      <Header back={false} title={i18n.t('inbox')} />
      <Container style={styles.container}>
        {/* <Content> */}
        <ScrollView>
          <View>
            <FlatList
              data={this.state.allData}
              // keyExtractor={item => item.voucher_id}
              renderItem={({ item }) => (
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      this._onPress(
                        item.title,
                        item.code,
                        item.photo,
                        item.description,
                        item.value,
                        item.exp,
                        item.minimal
                      )
                    }
                  >
                    <Card style={styles.card}>
                      <CardItem style={styles.card}>
                        <Body style={styles.bodyLeftRight}>
                          <Inbox />
                        </Body>
                        <Body style={styles.bodyCenter}>
                          <Text style={styles.text}>{item.title}</Text>
                          {/* <Text style={styles.text1}>asdasd</Text> */}
                        </Body>
                        <Body style={styles.bodyLeftRight}>
                          <Text style={styles.text2}>asdas</Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </ScrollView>
        {/* </Content> */}
      </Container>
    </View>
  );
  //   _renderBlank = () => <NoData title={i18n.t('inbox')} />;

  render() {
    return <MainScreen>{this._renderCard()}</MainScreen>;
    // return <MainScreen>{this.state.data ? this._renderCard() : this._renderBlank()}</MainScreen>;
  }
}
Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
