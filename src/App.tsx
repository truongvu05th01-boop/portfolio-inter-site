import { useEffect } from 'react';
import './App.css';
import Desktop from './components/os/Desktop';
import { isEmbedded, sendToParent } from './utils/iframeMessaging';

function App() {
    useEffect(() => {
        if (!isEmbedded()) return;

        const relayMouseEvent = (event: MouseEvent) => {
            sendToParent(event.type, {
                clientX: event.clientX,
                clientY: event.clientY,
            });
        };
        const relayKeyboardEvent = (event: KeyboardEvent) => {
            sendToParent(event.type, { key: event.key });
        };
        const mouseEvents = ['mousemove', 'mousedown', 'mouseup'] as const;
        const keyboardEvents = ['keydown', 'keyup'] as const;

        mouseEvents.forEach((type) => window.addEventListener(type, relayMouseEvent));
        keyboardEvents.forEach((type) => window.addEventListener(type, relayKeyboardEvent));
        sendToParent('portfolio-ready');

        return () => {
            mouseEvents.forEach((type) => window.removeEventListener(type, relayMouseEvent));
            keyboardEvents.forEach((type) => window.removeEventListener(type, relayKeyboardEvent));
        };
    }, []);

    return (
        <div className="App">
            <Desktop />
        </div>
    );
}

export default App;
