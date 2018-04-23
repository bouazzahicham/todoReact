import React from 'react'
import {Table,Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment,Input,Icon,Submit,Button} from 'semantic-ui-react'






//
// const fs = require('fs');
// const EventEmitter = require('events').EventEmitter;
// function findPattern(files,regex)
// {
//     const eeInstance = new EventEmitter();
//     //read all the files that exists in the filesysstem then see if it exists or not
//     eeInstance.emit('eventListener',"1","2");
//     fs.readFile();
//
//
//     let a = [12,3,4];
//
// }
//

//Closures

let validateClosure =(props,index)=>{
    let propies =  props ;
    let indice =  index ;
    return ()=>{propies.validate(indice)}
};
export const Todobody = (props) => {
    return (


        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width={15}>Name</Table.HeaderCell>
                    <Table.HeaderCell>Done ? </Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    props.goals.map((eachData, i) => {


                            return ( !eachData.ifDone ? <Table.Row key={i}>
                                <Table.Cell>{eachData.theGoal}</Table.Cell>
                                <Table.Cell><Button circular icon="checkmark" color="green"
                                                    onClick={validateClosure(props, i)}/></Table.Cell>
                            </Table.Row> : null );


                        }
                    )

                }

            </Table.Body>

        </Table>

    );

};
