import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox'

export default UserComponent = ({
    username,
    userPhoneNumber,
    avatarID = 0,
}) => {

    //Avatar array
    const avatarArray = [{
        id: 0,
        src: require('../../assets/icons/avatar1.png')
    }, {
        id: 1,
        src: require('../../assets/icons/avatar2.png')
    }, {
        id: 2,
        src: require('../../assets/icons/avatar3.png')
    }, {
        id: 3,
        src: require('../../assets/icons/avatar4.png')
    }, {
        id: 4,
        src: require('../../assets/icons/avatar5.png')
    }, {
        id: 5,
        src: require('../../assets/icons/avatar6.png')
    }, {
        id: 6,
        src: require('../../assets/icons/avatar7.png')
    }, {
        id: 7,
        src: require('../../assets/icons/avatar8.png')
    }, {
        id: 8,
        src: require('../../assets/icons/avatar9.png')
    }, {
        id: 9,
        src: require('../../assets/icons/avatar10.png')
    }, {
        id: 10,
        src: require('../../assets/icons/avatar11.png')
    }, {
        id: 11,
        src: require('../../assets/icons/avatar12.png')
    },]

    return (
        <View>
            {/* User Component */}
            <View style={styles.selectMembers}>
                <View style={styles.selectMembersItems}>
                    <Image
                    source={avatarArray[avatarID].src}
                    style={styles.memberImage} />

                    <View style={{marginLeft: '5%'}}>
                        <Text style={{fontSize: 16}}>{username}</Text>
                        <Text style={{fontSize: 12, color: '#666666'}}>{userPhoneNumber}</Text>
                    </View>
                </View>
                
                <View style={{
                    flexDirection: 'row',
                    marginTop: '8%',
                    marginLeft: '7%',
                }}>
                    <Checkbox
                        value={false}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    selectMembers: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#D4D4D4'
    },
    selectMembersItems: {
        width: '80%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    memberImage: {
        width: 48,
        height: 48,
        borderRadius: 100,
        marginLeft: 8,
        marginVertical: 8,
    },
})