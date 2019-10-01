/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from 'react';
import { View, Text, TouchableOpacity, Share, Clipboard } from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import styles from './styles';
import Header from '../../components/elements/Header';
import Button from '../../components/elements/Button';
import Copy from '../../../assets/svgs/Copy';
import { COLOR_TRANSPARENT, COLOR_WHITE, COLOR_BASE_PRIMARY_MAIN } from '../../styles';
import { scale } from '../../utils/scaling';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      code: '',
      photo: '',
      description: '',
      // value: '',
      exp: ''
      // minimal: ''
    };
  }

  componentDidMount() {
    this._getparams();
  }

  _getparams = async () => {
    const { params } = await this.props.navigation.state;
    const getTitle = (await params) ? params.title : 'Junkfood';
    const getCode = (await params) ? params.code : 'Nama';
    const getPhoto = (await params) ? params.photo : 'http://';
    const getDescription = (await params) ? params.description : 'dasdasda';
    // const getValue = (await params) ? params.value : 100;
    const getExp = (await params) ? params.exp : 100;
    // const getMinimal = (await params) ? params.minimal : 100;
    console.log(getTitle);
    console.log(getPhoto);
    this.setState({
      nama: getTitle,
      code: getCode,
      photo: getPhoto,
      description: getDescription,
      exp: getExp
    });
  };

  readFromClipboard = async () => {
    const Code = await Clipboard.getString();
    this.setState({ Code });
  };

  writeToClipboard = async () => {
    await Clipboard.setString(this.state.Code);
  };

  _onPressShare = async () => {
    try {
      await Share.share({
        message: `http://${this.state.photo} *${this.state.nama}*
        ${this.state.description}`
      });
    } catch (error) {
      alert(error.message);
    }
  };

  _onPressButtonAdd = () => {
    try {
      console.log('Add Item');
    } catch (error) {
      console.log(error.message);
    }
  };

  renderNavBar = () => (
    <View style={styles.navContainer}>
      <Header active={false} containerStyle={{ backgroundColor: COLOR_TRANSPARENT }} />
      <View style={styles.statusBar} />
    </View>
  );

  renderContent = () => (
    <View style={styles.container}>
      <View style={styles.contentDetail}>
        <View style={styles.titleDetail}>
          <Text style={styles.txtTitle}>{this.state.nama}</Text>
        </View>
        <View style={styles.dateDetail}>
          <Text style={styles.txtCategory}>{this.state.exp}</Text>
        </View>
        <View style={styles.descDetail}>
          <Text style={styles.txtDesc}>{this.state.description}</Text>
        </View>
        <View style={styles.containerCode}>
          <View style={styles.Code}>
            <Text
              style={styles.txtCode}
              onChangeText={Code => this.setState({ Code })}
              value={this.state.code}
            >
              {this.state.code}
            </Text>
          </View>
          <View style={styles.clipboard}>
            <TouchableOpacity>
              <Copy onPress={this.writeToClipboard} title="Copy to Clipboard" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerAddMenu}>
          <Button
            title="Tambah"
            isUpperCase={false}
            onPress={this._onPressButtonAdd}
            customContainer={{
              backgroundColor: COLOR_BASE_PRIMARY_MAIN,
              borderRadius: scale(5),
              height: scale(40),
              width: scale(260)
            }}
            customText={{ color: COLOR_WHITE, fontWeight: '500' }}
          />
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <ReactNativeParallaxHeader
          headerMinHeight={scale(50)}
          headerMaxHeight={scale(250)}
          extraScrollHeight={scale(20)}
          navbarColor={COLOR_BASE_PRIMARY_MAIN}
          titleStyle={styles.titleStyle}
          backgroundImage={{ uri: `http://${this.state.photo}` }}
          backgroundImageScale={1.2}
          renderNavBar={this.renderNavBar}
          renderContent={this.renderContent}
          containerStyle={styles.container}
          contentContainerStyle={styles.contentContainer}
          innerContainerStyle={styles.container}
        />
      </View>
    );
  }
}
