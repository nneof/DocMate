import React, {useEffect} from 'react'
import '../styling/Tree.css'

function Tree(props) {

    const generateBatch = (batch) => {

        return (
            <div className={"contentParent"}>
                {batch.map(element => (
                    <div className={"content"}>
                        <div className="circle">{element['description']}</div>
                    </div>
                ))}
                <br/>
            </div>
        );
    }

    function renderBatch(batch) {
        let result = [];
        result.push(generateBatch(batch));
        return result;
    }

    function displayTree(data) {
        let result = [];
        const nodes = data['nodes'];
        let batch = [];
        let level = 0;
        for (let node of nodes) {
            const data = node['data'];
            if (data['level'] === level) {
                batch.push(data);
            } else {
                result.push(renderBatch(batch));
                level++;
                batch = [];
                batch.push(data);
            }
        }
        result.push(renderBatch(batch));
        return result;
    }

    return (
        <div>
            {displayTree(props.tree)}
        </div>
    )
}

export default Tree