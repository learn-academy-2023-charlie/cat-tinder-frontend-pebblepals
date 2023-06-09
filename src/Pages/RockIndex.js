import React from "react"

const RockIndex = ({rocks}) => {
    console.log(rocks);
        return (
            <main>
                {rocks.map((rock, index) => {
                    return (
                        <>
                            <p>{rock.name}</p>
                            <p>{rock.age}</p>
                        </>
                    )
                })}
            </main>
    )
}

export default RockIndex