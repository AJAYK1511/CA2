import React from "react";
import './style.css'
function showBlock()
{
    if(document.getElementById('block').style.display=="none")
    {
        document.getElementById('block').style.display="block";
    }
    else
    {
        document.getElementById('block').style.display="none";
    }
}
function colorChange()
{
        document.getElementById("red").style.backgroundColor="yellow"; 
}
function color()
{
    document.getElementById("red").style.backgroundColor="white";
}
function color1()
{
    document.getElementById("blue").style.backgroundColor="skyblue";
}
function colorChange2()
{
    document.getElementById("blue").style.backgroundColor="white";
}
function color2()
{
    document.getElementById("green").style.backgroundColor="green";
}
function colorChange3()
{
    document.getElementById("green").style.backgroundColor="white";
}   

class Dropdown extends React.Component
{
    render()
    {
        return(
            <>
            <h1>Dynamic colour changer</h1>
                    <div id="box"  className="one" onClick={showBlock}>
                        <h2>DropDown</h2>
                        <div id="block">
                            <div id="red" class="w" onMouseEnter={colorChange} onMouseLeave={color} >
                                <h3>Option 1(Yellow)</h3>
                            </div>
                            <br></br>
                            <div id="blue" class="w" onMouseEnter={color1} onMouseLeave={colorChange2}>
                                <h3>Option 2(SkyBlue)</h3>
                            </div>
                            <br></br>
                            <div id="green" class="w" onMouseEnter={color2} onMouseLeave={colorChange3}>
                                <h3>Option 3(Green)</h3>
                            </div>
                        </div>
                    </div>
                
            </>
        )
    }
}

export default Dropdown;



