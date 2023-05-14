import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Home() {
    useEffect(() => {
        logJSONData();
    }, [])

    function sendPushNotification() {
        if ('Notification' in window && 'PushManager' in window) {
            Notification.requestPermission().then(function (permission) {
                if (permission === 'granted') {
                    navigator.serviceWorker.ready.then(async (registration) => {
                        if (document.visibilityState === "visible") {
                            return;
                        }
                        var notification = new Notification('Test title', { body: 'Test Body' });
                        notification.onclick = () => {
                            notification.close();
                            window.parent.focus();
                        }

                        // const subscription = await registration.pushManager.subscribe()
                        // Call api send this subscription

                        // registration.pushManager.getSubscription().then((subscription) => {
                        //     if (subscription) {
                        //         new Notification('Test title', { body: 'Test Body' });
                        //         registration.showNotification("Hello Cuong", {
                        //             body: 'Nội dung thông báo'
                        //         })
                        //     }
                        // });
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
    }


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
