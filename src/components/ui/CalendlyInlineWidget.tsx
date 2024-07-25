"use client"
import { useEffect } from 'react';

const CalendlyInlineWidget = () => {
    useEffect(() => {
        // Load Calendly widget script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on component unmount
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="calendly-inline-widget" data-url="https://calendly.com/vertkofficial/30min"  style={{ minWidth: '320px', height: '700px' }} />
    );
};

export default CalendlyInlineWidget;
