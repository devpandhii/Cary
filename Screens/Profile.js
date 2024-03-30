import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <View style={styles.innercontainer}>
                        <Image source={require("../assets/back.png")} style={styles.backImage} />
                        <Text style={styles.editProfileText}>Edit Profile</Text>
                        <View style={styles.profileImageContainer}>
                            {/* <Image source={require("../assets/user.png")} style={styles.profileImage} /> */}
                        </View>
                        <Text style={styles.username}>Dev Pandhi</Text>
                        <Text style={styles.email}>devpandhi1@gmail.com</Text>
                    </View>

                    <View style={styles.outercontainer}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: "7%" }}>Saved Places</Text>
                        <View>
                            <View style={styles.menuItemContainer}>
                                <Image source={require("../assets/home.png")} style={styles.menuIcon} />
                                <Text style={styles.menuItem}>Enter Home Location</Text>
                            </View>
                            <View style={styles.line} />
                            <View style={styles.menuItemContainer}>
                                <Image source={require("../assets/work.png")} style={styles.menuIcon} />
                                <Text style={styles.menuItem}>Enter Work Location</Text>
                            </View>
                            <View style={styles.line} />
                            <View style={styles.menuItemContainer}>
                                <Image source={require("../assets/addplace.png")} style={styles.menuIcon} />
                                <Text style={styles.menuItem}>Add a place</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.outercontainer}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: "7%" }}>Others</Text>
                        <View>
                            <View style={styles.menuItemContainer}>
                                <Image source={require("../assets/home.png")} style={styles.menuIcon} />
                                <Text style={styles.menuItem}>Payment methods</Text>
                            </View>
                            <View style={styles.line} />
                            <View style={styles.menuItemContainer}>
                                <Image source={require("../assets/work.png")} style={styles.menuIcon} />
                                <Text style={styles.menuItem}>Your trips</Text>
                            </View>
                            <View style={styles.line} />
                            <View style={styles.menuItemContainer}>
                                <Image source={require("../assets/addplace.png")} style={styles.menuIcon} />
                                <Text style={styles.menuItem}>Notifications</Text>
                            </View>
                            <View style={styles.line} />
                            <View style={styles.menuItemContainer}>
                                <Image source={require("../assets/addplace.png")} style={styles.menuIcon} />
                                <Text style={styles.menuItem}>Help Center</Text>
                            </View>
                            <View style={styles.line} />
                            <View style={styles.menuItemContainer}>
                                <Image source={require("../assets/addplace.png")} style={styles.menuIcon} />
                                <Text style={styles.menuItem}>About us</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.outercontainer}>
                        <View>
                            <View style={styles.menuItemContainer}>
                                <Image source={require("../assets/home.png")} style={styles.menuIcon} />
                                <Text style={styles.menuItem}>Logout</Text>
                            </View>
                            <View style={styles.line} />
                            <View style={styles.menuItemContainer}>
                                <Image source={require("../assets/work.png")} style={styles.menuIcon} />
                                <Text style={styles.menuItem}>Delete Account</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CBCBCB",
    },
    innercontainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        marginBottom: "3%",
        paddingBottom: "5%",
        paddingTop: "5%",
    },
    outercontainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        marginBottom: "3%",
        paddingBottom: "5%",
        paddingTop: "5%",
    },
    backImage: {
        marginLeft: "5%",
        marginTop: "8%",
        flex: 1,
        width: 30,
        height: 10,
    },
    editProfileText: {
        textAlign: "right",
        fontSize: 16,
        marginRight: 10,
        fontWeight: 'bold',
    },
    profileImageContainer: {
        borderRadius: 100,
        backgroundColor: "#F1F1F1",
        width: "35%",
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    profileImage: {
        width: "50%",
        height: "100%",
    },
    username: {
        color: "#000000", // or "#000000" as per your requirement
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",
        marginTop: "3%",
    },
    email: {
        color: "#8B8B8B", // or "#000000" as per your requirement
        fontSize: 16,
        textAlign: "center",
        marginTop: "1%",
    },
    line: {
        borderBottomColor: '#CBCBCB',
        borderBottomWidth: 1,
        marginLeft: '7%',
        marginRight: '7%',
        marginTop: '3%',
    },
    menuItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '7%',
        marginTop: '3%',
    },
    arrowIcon: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    menuIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    menuItem: {
        fontSize: 16,
    },
});