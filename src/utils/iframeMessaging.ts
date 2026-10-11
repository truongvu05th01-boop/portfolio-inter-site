export const isEmbedded = (): boolean =>
    new URLSearchParams(window.location.search).get('embed') === '1' ||
    window.self !== window.top;

export const sendToParent = (
    type: string,
    payload: Record<string, string | number> = {}
): void => {
    if (window.parent === window.self) return;

    if (!document.referrer) {
        console.error(
            '[Portfolio iframe] Cannot send a message because document.referrer is empty.'
        );
        return;
    }

    let targetOrigin: string;
    try {
        targetOrigin = new URL(document.referrer).origin;
    } catch (error) {
        console.error('[Portfolio iframe] Could not determine the parent origin.', error);
        return;
    }

    window.parent.postMessage(
        { source: 'portfolio-iframe', type, ...payload },
        targetOrigin
    );
};
