import React from 'react'
import '../styling/Tree.css'

function Tree(props) {

    const treeRendering = (treeData) => {
        return (
            <ul>
                {
                    treeData.map((item) =>
                        <li>
                            <div>{item.description}</div>
                            {
                                item.children && item.children.length ?
                                    treeRendering(item.children)
                                    : ''
                            }
                        </li>
                    )
                }
            </ul>
        )
    }

    return (
        <div className={"tree contentParent"}>
            {treeRendering([props.treeData])}
        </div>
    )
}

export default Tree