import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/util";


export default function FaceExpression({ onClick = () => { } }) {
    const videoRef = useRef(null);
    const landmarkerRef = useRef(null);
    const streamRef = useRef(null);

    const [ expression, setExpression ] = useState("Detecting...");
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const startCamera = async () => {
            try {
                setError(null);
                await init({ landmarkerRef, videoRef, streamRef });
            } catch (err) {
                console.error("Failed to initialize camera or face detector:", err);
                setError(err.message || "Could not access camera. Please make sure you have allowed camera permissions.");
            }
        };

        startCamera();

        return () => {
            if (landmarkerRef.current) {
                landmarkerRef.current.close();
            }

            if (videoRef.current?.srcObject) {
                videoRef.current.srcObject
                    .getTracks()
                    .forEach((track) => track.stop());
            }
        };
    }, []);

    async function handleClick() {
        if (error) {
            console.warn("Cannot detect expression: Camera failed to initialize.");
            return;
        }
        const expression = detect({ landmarkerRef, videoRef, setExpression })
        console.log(expression)
        onClick(expression)
    }


    if (error) {
        return (
            <div className="dashboard-error">
                <h2 className="dashboard-error__title">⚠️ Camera Access Error</h2>
                <p className="dashboard-error__message">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="btn btn-primary"
                >
                    Retry Request
                </button>
            </div>
        );
    }

    const isActive = expression !== "Detecting..." && expression !== "Face not detected";

    return (
        <div className="dashboard-scanner">
            <h1 className="dashboard__title">Moodify Expression Player</h1>
            <p className="dashboard__subtitle">Scan your face to detect your current mood and automatically stream a personalized playlist matching your energy.</p>

            {/* Webcam viewport wrapper with scanline */}
            <div className="webcam-viewport">
                <video
                    ref={videoRef}
                    className="webcam-viewport__video"
                    playsInline
                />
                <div className="webcam-viewport__scanline" />
            </div>

            {/* Detection status badge */}
            <div className={`expression-badge ${isActive ? 'expression-badge--active' : ''}`}>
                <span>Expression: </span>
                <strong>{expression}</strong>
            </div>

            <button
                onClick={handleClick}
                className="btn btn-primary btn--lg"
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
                <span>Detect Expression</span>
            </button>
        </div>
    );
}