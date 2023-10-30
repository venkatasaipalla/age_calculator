
import {Component} from 'react';
import validator from 'validator'
class C1 extends Component{
    constructor(props){
        super(props);
        this.state={age:0};
        this.state={statement:""};
        this.state={s:""};
    }
    handleChange=(event)=>{
        const d1=new Date(event.target.value);
        const d2=new Date();
        const agecal=(d1,d2)=>{
            if(!validator.isDate(d1) || d2.getTime()<d1.getTime() ){
                this.setState({
                    statement:"please enter the correct age"
                })
            }
            else {
                this.setState({
                    statement:"You are "+ (d2.getFullYear()-d1.getFullYear()) +" years old"
                })
            }
        }
        agecal(d1,d2);
        
    }
    
    checkandprint=()=>{
        this.setState({
            s:this.state.statement
        })
        
    }
    render(){
        return(
            <div className='App'>
                <h1>Age Calculator</h1>
                <h5>Enter you date of birth</h5>
                <input type='date' style={{borderRadius:"5px",width:"300px"}} onChange={this.handleChange} ></input><br/><br/>
                <button class="bg-primary text-light" style={{borderRadius:"5px"}} onClick={this.checkandprint}>Calculate Age</button><br/><br/>
                <h3>{this.state.s}</h3>
            </div>
        )
    }
}
export default C1;