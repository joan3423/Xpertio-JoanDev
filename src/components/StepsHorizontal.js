import Link from 'next/dist/client/link';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import {
    faCheckCircle
  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function StepsHorizontal({ infos, backLink, props }) {

    const [steps, setSteps] = useState(infos);

    const [lastAlert, setLastAlert] = useState(false)

    const [activeStep, setActiveStep] = useState(steps[0]);

    const [currentActiveStep, setCurrentActiveStep] = useState(steps[0]);

    useEffect(() => {
        setSteps(prevStep => prevStep.map(x => {
            if (x.key <= currentActiveStep.key) { x.isDone = true; }
            return x;
        }))
    }, [activeStep])

    const handleNext = () => {
        if (steps[steps.length - 1].key === activeStep.key) {
            setLastAlert(true)
            setActiveStep(steps[0])
            setCurrentActiveStep(steps[0])
            return;
        }
        const index = steps.findIndex(x => x.key === activeStep.key);
        setCurrentActiveStep(steps[index + 1]);
        setActiveStep(steps[index + 1])
    }

    const handleBack = () => {
        const index = steps.findIndex(x => x.key === activeStep.key);
        if (index === 0) return;
        setActiveStep(steps[index - 1]);
    }

    const handleselect = (indexSelected) => {
        const index = steps.findIndex(x => x.key === currentActiveStep.key);
        if (index >= indexSelected) {
            setActiveStep(steps[indexSelected]);
        }
    }
    return (
        <Col xs={12}>
            <Card className="rounded-0">
                <div className="box">
                    <Card.Body className="p-0">
                        {lastAlert === false
                            ?
                            <>
                                <div className="steps">
                                    <ul className={`nav grid-steps-${steps.length}`}>
                                        {steps.map((step, i) => {
                                            return (
                                                <li key={i} onClick={() => handleselect(i)} className={`d-flex align-items-center justify-content-center ${activeStep.key === step.key ? 'active' : ''} ${step.isDone ? 'done' : ''}`}>
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <h5 className="m-0">
                                                            {i + 1}
                                                        </h5>

                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="steps p-4">
                                    <Container>
                                        <h5 className="m-0">
                                            {activeStep.label}
                                        </h5>
                                    </Container>
                                </div>
                                <div>
                                    {React.cloneElement(activeStep.component, {
                                        ...props,
                                        handleBack: handleBack,
                                        handleNext: handleNext,
                                        steps: steps,
                                        activeStep: activeStep,
                                    })}
                                </div>
                            </>
                            :
                            <div style={{height: "300px"}} className="w-100 flex-column d-flex align-items-center justify-content-center">
                                <FontAwesomeIcon size={"7x"} icon={faCheckCircle} />
                                <h3 className="mt-3">Peticón compltada</h3>
                                <Link href={backLink}>
                                    <Button variant="white" className="br-3 custom-btn border-0 mt-3">
                                        <strong>volver a la tabla principal</strong>
                                    </Button>
                                </Link>
                            </div>
                        }
                    </Card.Body>

                </div>
            </Card>
        </Col>
    );
}
