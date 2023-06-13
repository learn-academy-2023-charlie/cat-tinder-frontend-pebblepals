import React from "react";
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from "reactstrap"

const RockShow = ({ rocks }) => {
    const { id } = useParams()
    let currentRock = rocks?.find((rock) => {
        return rock.id === +id
    })
        return (
            <main className="rock-show-cards">
                {currentRock && (
                    <>
                        <Card
                            style={{
                                width: '18rem'
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h5">
                                    {currentRock.name}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    {currentRock.age}
                                </CardSubtitle>
                            </CardBody>
                            <img
                                alt={`image of ${currentRock.name}`}
                                src={currentRock.image}
                                width="100%"
                            />
                            <CardBody>
                                <CardText>
                                    {currentRock.enjoys}
                                </CardText>
                            </CardBody>
                            <CardLink href="localhost:300/rockindex">
                            See All Rocks
                            </CardLink>
                        </Card>
                    </>
                )}
            </main>
        )
}

    export default RockShow