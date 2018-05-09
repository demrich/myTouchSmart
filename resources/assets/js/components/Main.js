import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let fakeServerData = [ 
 {  title: 'indoor',
    background: 'https://fakeimg.pl/460/',
    featuredImage: '',
    float: 'left',
    content: 'Duis ullamco eiusmod veniam aliquip ea ipsum magna tempor qui Lorem sit. Id amet enim commodo eiusmod laborum reprehenderit. Elit fugiat velit elit veniam ea Lorem velit irure ea ipsum magna. Laborum excepteur sit aliqua veniam elit enim est eu non ex est. Dolor labore dolore eiusmod ad tempor.'
 },
 {  title: 'outdoor',
    background: 'https://fakeimg.pl/460/',
    featuredImage: '',
    float: 'left',
    content: 'Duis ullamco eiusmod veniam aliquip ea ipsum magna tempor qui Lorem sit. Id amet enim commodo eiusmod laborum reprehenderit. Elit fugiat velit elit veniam ea Lorem velit irure ea ipsum magna. Laborum excepteur sit aliqua veniam elit enim est eu non ex est. Dolor labore dolore eiusmod ad tempor.'
 },
 {  title: 'in-wall',
    background: 'https://fakeimg.pl/460/',
    featuredImage: '',
    float: 'left',
    content: 'Duis ullamco eiusmod veniam aliquip ea ipsum magna tempor qui Lorem sit. Id amet enim commodo eiusmod laborum reprehenderit. Elit fugiat velit elit veniam ea Lorem velit irure ea ipsum magna. Laborum excepteur sit aliqua veniam elit enim est eu non ex est. Dolor labore dolore eiusmod ad tempor.'
 }
];


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
        let categoryBackground = {
            background: 'url(' + this.props.background +')', 
            width: '100%',
            height: '30rem'
        }

        let titleBar = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#EC7701',
            width: '100%',
            height: '7rem',
            textAlign: 'center'
        }

        let title = {
            color: 'white',
            fontSize: '4em',
            textTransform: 'uppercase'
        }

        let content = {
            textAlign: 'center',
            fontSize: '2em',
            padding: '6% 8% 3% 8%',
            margin: 'auto'
        }

        let hr = {
            width: '75%',
            height: '2px',
            color: '#eee',
            backgrundCOlor: '#eee',
            borderTop: '3px solid #929292'
            }
////////////////////////////////////////////////////////

      return (
        <div className="category" >
        <div style={categoryBackground}></div>
        <div style={titleBar}>
        <h2 style= {title}>{this.props.title}</h2>
        </div>
        <p style={content}>{this.props.content}</p>
        <hr style={hr} />
        </div>
      )
    }
}

class Main extends Component {
    constructor() {
        super();
        this.state = {serverData: fakeServerData}
    }
    
    render() {
        let data = this.state.serverData;
        let DataToRender = data && data.title ? data.map(category =>{
            let title = data.title
            let background = data.background
            let content = data.content
            return title || background || content
        }) : []
        
        return (
        <div>
            {data ?
            <div>
            <HeroCategory />
            
            {data.map((category, i) => {
             return <CategorySection 
             key={i} 
             title={category.title} background= {category.background} 
             content={category.content} />
            })}
            
            </div>
           : 'loading' }
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