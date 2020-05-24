import React from 'react';


const Temp=function(){
    return (
        <div>
        <div style={{textAlign:"center",color:"red"}}>Add HERE SUBSCRIBER</div>
        <form>
            <label htmlFor="name" >Name</label>
            <input type="text" name="name" placeholder="enter the name here" /><br />
            <label htmlFor="phone">Phone no </label>
            <input type="text" name="phone" placeholder="enter the phone no here" />
        </form>
        </div>
    );
}
export default Temp;