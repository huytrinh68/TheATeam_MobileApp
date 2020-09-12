import AsyncStorage from '@react-native-community/async-storage';

const rememberme_info = 'rememberme_info'
const autologin_info = 'autologin_info'

class Storage {
    static saveData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('Error saving data');
        }
    };

    static getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value;
            }
        } catch (error) {
            console.log('Error retrieving data');
        }
    };

    static removeData = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        }
        catch (exception) {
            return false;
        }
    }

    static saveAutoLoginInfo(customerInfo) {
        const save = async () => {
            await AsyncStorage.setItem(autologin_info, JSON.stringify(customerInfo), () => {
                const info = AsyncStorage.getItem(autologin_info, (error, result) => {
                    let printInfo = JSON.parse(result);
                });
            });
        };
        save();
    }

    static removeAutologinInfo() {
        const remove = async () => {
            await AsyncStorage.removeItem(autologin_info);
        };
        remove();
    }

    static async getAutoLoginInfo() {
        try {
            const retrievedItem = await AsyncStorage.getItem(autologin_info);
            const customerInfo = JSON.parse(retrievedItem);
            return customerInfo;
        } catch (error) {
            console.log(error.message);
        }
        return
    }

}

export default Storage;
