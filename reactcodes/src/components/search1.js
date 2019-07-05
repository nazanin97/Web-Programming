import React from 'react'
import { Redirect } from 'react-router-dom';
import axios from "axios/index";
import './css/Area.css';

class AreaSelectionBar extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            cityField: "اصفهان",
            areaField: "کاوه",
            areas:{},
            redirect:false,
            redirectTo:""
        };

        this.onCityChange = this.onCityChange.bind(this);
        this.onAreaChange = this.onAreaChange.bind(this);
        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.onCityBlur = this.onCityBlur.bind(this)
    }

    onCityChange(event) {
        this.setState({
            cityField: event.target.value
        });
    }

    onAreaChange(event) {
        this.setState({
            areaField: event.target.value
        })
    }

    onCityBlur() {
        console.log("http://localhost:3001/api/area/"+AreaSelectionBar.findCityId(this.state.cityField));
        axios.get("http://localhost:3001/api/area/"+AreaSelectionBar.findCityId(this.state.cityField))
            .then((response) => {
                let areas = response.data;
                this.setState({
                    areas: areas
                });
            });
    }

    static findCityId(city) {
        if (city === "تهران") {
            return "tehran"
        } else if (city === "اصفهان") {
            return "isfahan"
        } else {
            return "";
        }
    }

    findAreaId(areaText) {
        const entries = Object.entries(this.state.areas);
        for (const [areaId, area] of entries) {
            if(area === areaText){
                return areaId;
            }
        }
        return "";
    }

    onButtonClicked(){
        let cityId = AreaSelectionBar.findCityId(this.state.cityField);
        if (cityId === "")
            return;
        let areaId = this.findAreaId(this.state.areaField);
        if (areaId === "")
            return;
        this.setState({
            redirect: true,
            redirectTo: '/restaurants/?city=' + cityId + '&area=' + areaId
        });
    }

    render() {

        if (this.state.redirect === true) {
            return <Redirect to={this.state.redirectTo} />
        }

        let areaOptionsHtml = [];
        const entries = Object.entries(this.state.areas);
        for (const [areaId, area] of entries) {
            areaOptionsHtml.push(<option key={areaId} value={area}/>);
        }

        return (
            <div id="manual_search_bar">
                <datalist id="city_suggestions">
                    <option value={"تهران"} />
                    <option value={"اصفهان"} />
                </datalist>
                <datalist id="area_suggestion">
                    {areaOptionsHtml}
                </datalist>
                <div id="manual_city_selection">
                    <div id="manual_dropdown_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 20">
                            <path fill="currentColor" fillRule="evenodd"
                                  d="M9.17 19.708L.607 11.444a1.95 1.95 0 0 1 0-2.827L9.232.292c.4-.385 1.048-.39 1.454-.01a.976.976 0 0 1 .011 1.425L2.803 9.324a.975.975 0 0 0 0 1.414l7.831 7.557a.974.974 0 0 1 0 1.413c-.405.39-1.06.39-1.464 0z">
                            </path>
                        </svg>
                    </div>
                    <input id="manual_city_input" list="city_suggestions" type="text" value={this.state.cityField} placeholder="شهر" onChange={this.onCityChange} onBlur={this.onCityBlur}/>
                </div>
                <fieldset id="manual_area_selection">
                    <legend>منطقه خود را وارد کنید</legend>
                    <div id="manual_location_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" data-reactid="72"><path fill="currentColor" fillRule="evenodd" d="M6 0C2.683 0 0 2.66 0 5.95 0 10.412 6 17 6 17s6-6.588 6-11.05C12 2.66 9.317 0 6 0zm0 8a2 2 0 1 1 .001-4.001A2 2 0 0 1 6 8z" data-reactid="73"/></svg>
                    </div>
                    <input id="manual_area_input" list="area_suggestion" type="text" value={this.state.areaField} placeholder="مثلا نیاوران" onChange={this.onAreaChange} />
                </fieldset>
                <button id="manual_button" onClick={this.onButtonClicked}>
                    <i className="fas fa-search"/>
                </button>
            </div>
        )
    }
}

export default AreaSelectionBar