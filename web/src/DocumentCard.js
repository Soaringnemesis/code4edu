import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, Cell } from 'react-mdl';

class DocumentCard extends React.Component {
    render() {
        return(
            <Cell col={6}>
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>{this.props.title}</CardTitle>
                    <CardText>
                        This is a random description.
                    </CardText>
                    <CardActions border>
                        <Button colored>View Updates</Button>
                    </CardActions>
                </Card>
            </Cell>
        );
    }
}

export default DocumentCard;