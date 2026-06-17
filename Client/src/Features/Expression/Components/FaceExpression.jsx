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
            <div style={{ textAlign: "center", color: "#ff6b35", padding: "24px" }}>
                <h2 style={{ color: "#ff6b35", marginBottom: "12px" }}>⚠️ Camera Access Error</h2>
                <p style={{ color: "#ffffff", marginBottom: "20px", fontSize: "0.95rem", lineHeight: "1.5" }}>{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    style={{
                        padding: "10px 20px",
                        borderRadius: "8px",
                        background: "#ff6b35",
                        color: "#000000",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: "bold",
                        boxShadow: "0 4px 12px rgba(255, 107, 53, 0.3)"
                    }}
                >
                    Retry Request
                </button>
            </div>
        );
    }

    return (
        <div style={{ textAlign: "center", color: "#ffffff" }}>
            <video
                ref={videoRef}
                style={{ width: "400px", borderRadius: "12px", transform: "scaleX(-1)", border: "2px solid #ff6b35" }}
                playsInline
            />
            <h2 style={{ color: "#ff6b35", margin: "16px 0" }}>{expression}</h2>
            <button
                onClick={handleClick}
                style={{
                    padding: "12px 24px",
                    borderRadius: "8px",
                    background: "#ff6b35",
                    color: "#000000",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                    boxShadow: "0 4px 12px rgba(255, 107, 53, 0.3)"
                }}
            >
                Detect expression
            </button>
        </div>
    );
}