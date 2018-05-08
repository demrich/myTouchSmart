import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let fakeServerData = {
    category: {
        title: 'indoor',
        background: 'https://fakeimg.pl/460/',
        featuredImage: '',
        float: 'left',
        content: 'Duis ullamco eiusmod veniam aliquip ea ipsum magna tempor qui Lorem sit. Id amet enim commodo eiusmod laborum reprehenderit. Elit fugiat velit elit veniam ea Lorem velit irure ea ipsum magna. Laborum excepteur sit aliqua veniam elit enim est eu non ex est. Dolor labore dolore eiusmod ad tempor.'
    }
};


function HeroTitle(props) {
    return( 
        <h1>{props.title}</h1>
    )
  }

class HeroCategory extends Component {
    render(){
    return(
        <HeroTitle title="MyTouchSmart Indoor Timers" />
    )
    }
}

class CategorySection extends Component {

    render() {
///////////// CSS STYLES////////////////////////////
        var categoryBackground = {
            background: 'url(' + this.props.background +')', 
            width: '100%',
            height: '350px'
        }

        var titleBar = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#EC7701',
            width: '100%',
            height: '7rem',
            textAlign: 'center'
        }

        var title = {
            color: 'white',
            fontSize: '4em',
            textTransform: 'uppercase'
        }
////////////////////////////////////////////////////////

      return (
        <div className="category" >
        <div style={categoryBackground}></div>
        <div style={titleBar}>
        <h2 style= {title}>{this.props.title}</h2>
        </div>
        </div>
      )
    }
}

class Main extends Component {
    render() {
        return (
        <div>
            <HeroCategory />
            <CategorySection title="indoor" background="https://fakeimg.pl/460/" />
            <CategorySection title="outdoor" background="https://fakeimg.pl/460/" />
            <CategorySection title="in-wall" background="https://fakeimg.pl/460/" />

        </div>
        );
    }
}
export default Main;  

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}