import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, Cell } from 'react-mdl';

class DocumentCard extends React.Component {
    render() {
        return(
            <Cell col={6}>
                <Card shadow={0} style={{width: '100%', height: '200px', margin: 'auto', 'border-radius': '20px'}}>
                    <CardTitle expand style={{color: '#000000' }}>{this.props.title}</CardTitle>
                    <CardText>
                        {this.props.author}
                    </CardText>
                    <CardText>
                        Grade {this.props.grade}, {this.props.subject}
                    </CardText>
                    <CardActions border>
                        <a href={this.props.url} target="_blank" rel="noopener noreferrer"><Button colored style={{'border-radius': '20px'}}>View Resource</Button></a>
                    </CardActions>
                </Card>
            </Cell>
        );
    }
}

export default DocumentCard;