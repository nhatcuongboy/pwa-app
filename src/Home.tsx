import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Home() {
    function sendPushNotification() {
        if ('Notification' in window && 'PushManager' in window) {
            Notification.requestPermission().then(function (permission) {
                console.log({ permission })
                if (permission === 'granted') {
                    navigator.serviceWorker.ready.then((registration) => {
                        console.log('HAHA', document.visibilityState)
                        var body = "Message to be displayed";
                        var notification = new Notification('Title', { body });
                        notification.onclick = () => {
                            notification.close();
                            window.parent.focus();
                        }

                        registration.pushManager.getSubscription().then((subscription) => {
                            console.log('subscription', subscription)
                            if (subscription) {
                                // const notificationPayload = {
                                //     title: 'Thông báo',
                                //     body: 'Nội dung thông báo'
                                //     // icon: 'path/to/icon.png',
                                // };
                                // const notification = new Notification(JSON.stringify(notificationPayload));
                                registration.showNotification("Hello Cuong", {
                                    body: 'Nội dung thông báo'
                                })
                                // subscription.pushManager
                                //     .sendNotification(JSON.stringify(notificationPayload))
                                //     .then(() => {
                                //         console.log('Đã gửi thông báo đẩy thành công.');
                                //     })
                                //     .catch((error: any) => {
                                //         console.error('Lỗi khi gửi thông báo đẩy:', error);
                                //     });
                            }
                        });
                    });
                }
            });
        }
    }

    const [data, setData] = useState()
    async function logJSONData() {
        const response = await fetch("https://dummyjson.com/products/1");
        const jsonData = await response.json();
        setData(jsonData)
        console.log(jsonData);
    }
    useEffect(() => {
        logJSONData();
    }, [])
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Hello data</h1>
                <p>
                    {JSON.stringify(data)}
                </p>
                <button onClick={() => logJSONData()}>Call api</button>
                <button onClick={sendPushNotification}>Send noti</button>
                {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
            </header>
        </div>
    );
}

export default Home;
