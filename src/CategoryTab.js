// JavaScript source code
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactTooltip from "react-tooltip";

class CategoryTab extends Component {

    state = {
    size: "none",
    price: "0",
    type: "none"
    }

    render(){
        return () => {
            <div style="margin-top:100px">
               <p style="font-size:24px; color:white; background-color:black; width: 200px">Filters:</p>
             <br></br>
             <form>
                <label for="price">Filter by price:</label>
                    <select name="prices" id="prices">
                        <option value="0-9">$0-$9</option>
                        <option value="10-19">$10-$19</option>
                        <option value="20-29">$20-$29</option>
                        <option value="30-39">$30-$39</option>
                        <option value="40+">$40+</option>
                    </select>
                </form>
            <br></br>
               <form>
                    <label for="type">Filter by type:</label>
                    <select name="tupes" id="types">
                            <option value="headwear">headwear</option>
                            <option value="shirt">shirt</option>
                            <option value="pants">pants</option>
                            <option value="socks">socks</option>
                            <option value="shoes">shoes</option>
                </select>   
               </form>
        </div>
        }
    }

}
export default CategoryTab;