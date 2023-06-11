import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom"

const RockIndex = ({rocks}) => {

        return (
            
            <main className="rock-index-cards">
                {rocks?.map((rock, index) => {
                    return (
                        <Card
                          style={{
                            width: "14rem"
                          }}
                          key={index}
                          >
                          <img alt={`profile of a rock named ${rock.name}`} src={rock.image} />
                            <CardBody>
                                <CardTitle tag="h5">{rock.name}</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    Age: {rock.age}
                                </CardSubtitle>
                                <Button>
                                    <NavLink to={`/RockShow/${rock.id}`} className="nav-link">
                                        Click to See More
                                    </NavLink>
                                </Button>
                            </CardBody>
                        </Card>   
                    )
                })}
            </main>
        )
}

export default RockIndex