import {AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const key = 'FLASHCARDS-NOTIFICATION'

export function clearLocalNotification () {
    console.log('clearLocalNotification')
    return AsyncStorage.removeItem(key)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
    return {
        title: 'Flashcards Quiz',
        body: "Não se esqueça de estudar hoje!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification () {
    console.log('setLocalNotification')
    AsyncStorage.getItem(key)
        .then(JSON.parse)
        .then((data) => {
            console.log(data)
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        console.log(status)
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(16)
                            tomorrow.setMinutes(0)
                            //tomorrow.setMinutes(tomorrow.getMinutes() + 1);
                            tomorrow.setSeconds(0)
                            console.log(tomorrow)
                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(), {time: tomorrow, repeat: 'day'}
                            )

                            AsyncStorage.setItem(key, JSON.stringify(true))
                        }
                    })
            }
        })
}