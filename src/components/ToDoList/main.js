/**
 * Created by hicham on 3/26/18.
 */

import React from 'react'
import {Todobody} from './body'
import {MenuLeft} from './menuLeft'
import {MenuUp} from './menuUp'

import {Grid,Button,Image,Table,Container, Divider, Dropdown, Header, List, Menu, Segment,Input,Icon,Message} from 'semantic-ui-react'

//TODO 2# On peut aussi enregistrer le node Element dans les props du goal que le client est entrain d'ecrire, grace aux Refs dans semantic-ui


const Component = React.Component ;


export class Main_TodoList extends Component
{
    //C'est ici que tous les goals seront enregistrés
    constructor(props)
    {
        super(props);

        // goal + son etat si fait ou non

        this.state = {
            goals : [
                {ifDone: false , theGoal : "Bonjour tous le monde" },
                {ifDone:true,theGoal:"hope you're good "},
                {ifDone:false,theGoal:"hope you're goodHicham "}
            ]
            ,
            fieldIsWritable : false
        };

        this.temporaryText = "" ;
        this.addTask = this.addTask.bind(this);
        this.forButton = this.forButton.bind(this);
        this.validate = this.validate.bind(this);
        this.showWritableField = this.showWritableField.bind(this);
        this.cancelWritable = this.cancelWritable.bind(this);


    }
    addTask()
    {

        if(this.temporaryText.trim()) {


            this.setState((previousState) => {
                return {
                    goals: [...previousState.goals, {ifDone: false , theGoal : this.temporaryText}]
                };

            });
        }
    }

    showWritableField(event)
    {
        event.preventDefault();
        this.setState({["fieldIsWritable"] : true});

    }
    forButton(event)
    {
        this.temporaryText = event.target.value;
    }

    cancelWritable(event)
    {
        event.preventDefault();
        this.setState({["fieldIsWritable"] : false});

    }
    validate(limite)
    {
        this.setState((previousState)=> {

            return previousState.goals.map((element, index) => {
                if (index === limite) {
                    element.ifDone = true;
                }
            });
        });

    }

    render()
    {
        const data = this.state.goals ;
        const _addGoalClickable = (<Container id="addGoal" ><Icon name="plus"/> <a href="#" onClick={this.showWritableField}>Ajouter un objectif</a></Container>);
        const _addGoalWritable = (<Container>
            <Input placeoholder="Task to accomplish" onChange={this.forButton}  fluid id="goalWritable" ><input /></Input>
            <Button type="submit" content="Add this task" onClick={this.addTask}  size="tiny" color="blue"/><a href="#" onClick={this.cancelWritable} >Annuler</a>
        </Container>);

        return(

            <Grid >
                <Grid.Row>
                    <Grid.Column>
                        <MenuUp />
                    </Grid.Column>
                </Grid.Row>


                <Grid.Row  >
                    <Grid.Column width={3} >
                        <Container id="menuLeft">
                            <MenuLeft/>
                        </Container>
                    </Grid.Column>

                    <Grid.Column width={13} floated="right" >
                        <Grid >
                            <Grid.Row>
                                <Todobody fluid stretched validate={this.validate} goals={data}/>
                            </Grid.Row>

                            {/*React/*/}

                            <Grid.Row>
                                {!this.state.fieldIsWritable ? _addGoalClickable : _addGoalWritable }
                            </Grid.Row>
                        </Grid>



                    </Grid.Column>

                </Grid.Row>


            </Grid>
        )
    }

}

