import { React, Component } from 'react'
import './../components/StatePage.css';
import backImage from './../images/background.jpg';
import battery from './../images/state_page/Avatar_battery.png';
import power from './../images/state_page/Shape_power.png';
import on from './../images/state_page/Tag Toggle On.png';
import off from './../images/state_page/Tag Toggle Off.png';
import location from './../images/state_page/Avatar_location.png';
import shape from './../images/state_page/Shape.png';
import house from './../images/state_page/Avatar_house.png';

export class StatePage extends Component {
    render() {
        return (
            <div class="container_state_page"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backImage})`
                }}>
                <div class="state_title_block">
                        <div>
                            <p class="state_title">Состояние</p>
                            <p class="state_second_title" style={{margin: "-5% 0px 0px 0px"}}>робота</p>
                        </div>
                    </div>
                    <div class="state_content_block" width="100vw">
                        <div class="state_content_block_item">
                            <div class="state_place_item" style={{ display: "flex"}}>
                                <div style={{ padding:"15px" }}>
                                    <p style={{ color: "Black", fontWeight: "bold", fontSize: "large", margin: "5px 0px 0px 7px"}}>Питание</p>
                                    <div style={{ display: "flex"}}>
                                        <img src={power} style={{ width: "32px", height: "32px", margin: "15px 25px 0px 8px" }} />
                                        <div style={{margin: "0px 0px 0px -10px"}}>
                                            <img src={on} style={{ width: "90px", margin: "20px 10px 0px 0px"}} />
                                            <img src={off} style={{ width: "90px", margin: "0px 0px 0px 0px"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="state_content_block_item">
                            <div class="state_place_item" style={{ display: "flex"}}>
                                <div style={{ padding:"15px" }}>
                                    <p style={{ color: "black", fontWeight: "bold", fontSize: "large", margin: "5px 0px 0px 7px"}}>Заряд батареи</p>
                                    <div style={{display: "flex", margin: "0px 0px 0px 0px"}}>
                                        <img src={battery} style={{ width: "32px", height: "32px", margin: "15px 25px 0px 7px" }} />
                                        <p style={{color:"gray", fontSize: "small", margin:"22px 0px 0px -10px"}}>100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div class="state_content_block_item">
                            <div class="state_place_item" style={{ display: "flex"}}>
                                <div style={{ padding:"15px" }}>
                                    <p style={{ color: "Black", fontWeight: "bold", fontSize: "large", margin: "5px 0px 0px 7px"}}>Местонахождение</p>
                                    <div style={{display: "flex", margin: "0px 0px 0px 0px"}}>
                                        <img src={location} style={{ width: "32px", height: "32px", margin: "15px 25px 0px 7px" }} />
                                        <p style={{color:"gray", fontSize: "small", margin:"20px 0px 0px -8px"}}>Текущее местонахождение</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="state_content_block_item">
                            <div class="state_place_item" style={{ display: "flex"}}>
                                <div style={{ padding:"15px" }}>
                                    <p style={{ color: "black", fontWeight: "bold", fontSize: "large", margin: "5px 0px 0px 7px"}}>Следует по маршруту</p>
                                    <div style={{display: "flex", margin: "0px 0px 0px 0px"}}>
                                        <img src={shape} style={{ display: "flex", width: "32px", height: "32px", margin: "15px 25px 0px 7px" }} />
                                        <div style={{margin:"15px 0px 0px 0px"}}>
                                            <p style={{color:"black", fontWeight: "bold", fontSize: "small", margin:"0px 0px 0px -8px"}}>Название</p>
                                            <p style={{color:"gray", fontSize: "small", margin:"0px 0px 0px -8px"}}>Описание</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="state_content_block_item">
                            <div class="state_place_item" style={{ display: "flex"}}>
                                <div style={{ padding:"15px"}}>
                                    <p style={{ color: "black", fontWeight: "bold", fontSize: "large", margin: "5px 0px 0px 7px"}}>Следует по маршруту</p>
                                    <div style={{display: "flex", margin: "0px 0px 0px 0px"}}>
                                        <img src={house} style={{ width: "32px", height: "32px", margin: "15px 25px 0px 7px" }} />
                                        <div style={{margin:"15px 0px 0px 0px"}}>
                                            <p style={{color:"black", fontWeight: "bold", fontSize: "small", margin:"0px 0px 0px -8px"}}>Место остановки 1</p>
                                            <p style={{color:"gray", fontSize: "small", margin:"0px 0px 0px -8px"}}>Описание</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            <div style={{padding: "0px 0px 100px 0px"}}></div>
            </div>
        )
    }
}