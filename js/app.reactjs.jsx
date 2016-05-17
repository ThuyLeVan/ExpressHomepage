'use strict';
// var url='data/server_data.json';
// $.getJSON(url, function(data) {
//   var items=[];
//   $.each(data, function(key,val){
//     console.log(val.id);
//   })
// });
var UserGist = React.createClass({
  getInitialState: function() {
    return {
    
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      console.log(result);
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        
      </div>
    );
  }
});

ReactDOM.render(
  <UserGist source="data/server_data.json" />,
  document.getElementById('app')
);

























































// var LikesComponent= React.createClass({
//   getDefaultProps:function()
//   {
//     return({
//       likes:0
//     })
//   },
//   getInitialState:function()
//   {
//     return({
//       popular:false
//     })
//   },
//   updateLikes:function()
//   {
//     ReactDOM.render(
//       <LikesComponent likes={this.props.likes+1} />,
//       document.getElementById('app')
//     )
//   },
//   componentWillReceiveProps:function(nextProps){
//     this.setState({
//       popular:nextProps.likes >=10
//     })
//   },
//   render:function(){
//     return(
//       <div className="container">
//         <h1>{this.state.popular ? "I'm popular" :null}</h1>
//         <button className="btn blue-btn" onClick={this.updateLikes}>Likes: {this.props.likes}</button>
//       </div>
//     )
//   }
// });

// ReactDOM.render(
//   <LikesComponent />,
//   document.getElementById('app')
// );
























































// var LifecycleComponent= React.createClass({
//   //1 called ONCE
//   //BEFORE COMPONENT IS RENDERED
//   getDefaultProps:function()
//   {
//     console.log("getDefaultProps");
//   },
//   //2 called ONCE
//   //BEFORE COMPONENT IS RENDERED
//   getInitialState:function(){
//     console.log("getInitialState");
//     return({
//       count:0
//     })
//   },
//   //3 called ONCE
//   //BEFORE COMPONENT IS RENDERED
//   componentWillMount:function(){
//     console.log("componentWillMount");
//   },
//   //4 
//   //happend whenever our component changes

//   clickbutton:function(){
//     this.setState({
//       count:this.state.count +1
//     })
//   },
//   render: function(){
//     console.log("render")
//     return(
//       <button onClick={this.clickbutton}>{this.state.count}</button>
//     )
//   },
//   //5 called ONCE
//   //AFTER COMPONENT HAS RENDERED
//   componentDidMount: function(){
//     console.log("componentDivMount");
//     this.interval=setInterval(this.clickbutton,1000);
//   },
//   //6 only ONCE
//   //AFTER COMPONENT HAS RENDERED
//   componentWillUnmount:function(){
//     clearInterval(this.interval);
//     console.log("componentWillUnmount");
//   }
// });
// ReactDOM.render(
//   <LifecycleComponent />,
//   document.getElementById('app')
// );





















































// var TaskList =React.createClass({
//   getInitialState: function(){
//     return{
//        tasks: [
//         {title:'Clean dishes',id:1},
//         {title:'Take out the bins',id:2},
//         {title:'Change bed',id:3}
//        ]
//     }
//   },
//   render:function(){
//     return(
//       <ul>
//         {this.state.tasks.map(function(val){
//           return <Task title={val.title} key={val.id} />
//         })}
//       </ul>
//     )
//   }
// });

// var Task=function(props){
//   return(
//     <li>Task:{props.title}</li>
//   )
// };


// ReactDOM.render(
//   <TaskList />,
//   document.getElementById('app')
// );























































// var CountChallenge= React.createClass({
//   getInitialState: function(){
//     return{
//       count:0
//     }
//   },
//   getDefaultProps: function(){
//     return {
//       valueOne:1,
//       valueFive:5,
//       valueTen:10,
//       text:"Add "
//     }
//   },
  
//   congso: function(value){
//       this.setState({
//       count:this.state.count +value
//     })
//   },

//   render: function(){
//     return(
//       <div className="container">
//         <h1>Count: {this.state.count}</h1>
//         <Button1 class="btn blue-btn" text={this.props.text+this.props.valueOne} value={this.props.valueOne} clickHandler1={this.congso.bind(this,this.props.valueOne)} />
//         <Button1 class="btn green-btn" text={this.props.text+this.props.valueFive} value={this.props.valueFive} clickHandler1={this.congso.bind(this,this.props.valueFive)} />
//         <Button1 class="btn purple-btn" text={this.props.text+this.props.valueTen}  value={this.props.valueTen} clickHandler1={this.congso.bind(this,this.props.valueTen)} />
//       </div>
//     )
//   }
// });
// var Button1 =function(props){
//   return(
//     <button className={props.class} value={props.value} onClick={props.clickHandler1}>{props.text}</button>
//   )
// };
// ReactDOM.render(
//   <CountChallenge />,
//   document.getElementById('app')
// );































// var StyleComponent= React.createClass({
//   render:function(){
//     return(
//       <div>
//         <h1 className="blue">This header is .blue</h1>
//         <h1 id="red">This header is .blue</h1>
//         <h1 className="blue">Another .blue</h1>
//       </div>
//     )
//   }
// });
// ReactDOM.render(
//   <StyleComponent />,
//   document.getElementById('app')
// );



// var NameStateComponent=React.createClass({
//       resetName:function(){
//         document.getElementById('thuykaka').value='',
//         this.setState({
//           name:'',
//         })
//       },
//       nameChanged: function(event){
//         this.setState({
//           name:event.target.value
//         })
//       },
//       getInitialState: function(){
//         return{
//           name:''
//         }
//       },
      
      
//       render: function(){
//         return(
//           <div>
//             <input type="text" onChange={this.nameChanged} id="thuykaka" />
//             <h1>Hello, {this.state.name}</h1>
//             <button onClick={this.resetName}>Reset</button>
//           </div>
//         )
//       }
//     });
//     ReactDOM.render(
//         <NameStateComponent />,
//         document.getElementById('app')
//     );







// <!--var SecondComponent= React.createClass({
//         propTypes:{
//           name:React.PropTypes.string,
//           location:React.PropTypes.string.isRequired
//         },
//         getDefaultProps: function(){
//           return {
//             name :"default",
//             location:"default"
//           }
//         },
//         render: function(){
//           console.log(this)
//           let name=this.props.name;
//           let location=this.props.location;
//           return(
//             <div>
//               <p>Hello,{name} !</p>
//               <p>I'm live in {location}</p>
//             </div>
//           )
//         }
//       });


//       ReactDOM.render(
//         <SecondComponent />,
//         document.getElementById('app')
//       ); -->








//     <!-- <div id="app"></div>
//     <script type ="text/babel">
//       var FirstComponent=React.createClass({
//         render: function(){
//           return(
//             <div>
//               <h1>Hello world</h1>
//               <h2>Hello world hehehehe</h2>
//             </div>
//           )
//         }
//       });

//       ReactDOM.render(
//         <FirstComponent />,
//         document.getElementById('app')
//       );
//     </script> -->

//     <!--  <script type="text/babel">
//       ReactDOM.render(
//         <h1>Hello world</h1>,
//         document.getElementById('app')
//       );
//     </script> -->
//     <!--    <script>
//     //ReactDOM.render(reactElement, domContainerNode)
//     ReactDOM.render(
//     //var root = React.createElement('ul', { className: 'my-list' }, child);
//       React.createElement(
//         'h1',
//         { id: 'my-list' },
//         'Hello World!'
//       ),
//       document.getElementById('app')
//     );
//     </script> -->