import Link from "next/link"
import React, { useEffect, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";

const CodeConfirmation = () => {
    const [num, setNum] = useState(0);

    let intervalRef = useRef();

    const decreaseNum = () => setNum((prev) => prev - 1);

    useEffect(() => {
        intervalRef.current = setInterval(decreaseNum, 1000);
        if (num === 0) {
            clearInterval(intervalRef.current)
        }
        return () => clearInterval(intervalRef.current);
    });

    const handleClick = () => {
        setNum(60)
    };
    return (
        <React.Fragment>
            <div className="form-floating mb-3">
                <Form.Control
                    id="userEmail"
                    type="email"
                    placeholder="example@gmail.com"
                />
                <Form.Label htmlFor="email">Ingresa el codigo</Form.Label>
            </div>
            <div className="w-100 d-flex align-items-center">
                <div className="text-sm text-muted w-100">
                    No te llega?{" "}
                    {num === 0 &&
                        <a style={{ cursor: 'pointer' }} onClick={handleClick} className="Link">Reenviar</a>
                    }{" "}
                    {num > 0 &&
                        <span>{num < 10 ? `0:0${num}` : `0:${num}`}</span>
                    }
                </div>
                <div className="w-100 d-flex justify-content-end">
                    <Link href="/Register/AddPassword">
                        <Button variant="primary" size="lg" type="submit">
                            Confirmar
                        </Button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}
export default CodeConfirmation;