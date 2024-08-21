import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./demoapp.scss";
import  {service}   from './demoapp.service';

class Demoapp extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    student : {
    name: '',
    age: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ student: { ...this.state.student, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.student.created_by = sessionStorage.getItem('email')||'{}';
    }

    render(){
    return(
    <>
        <h2 className="screen-align">demoapp</h2>
        <div id="template-it9v">
    <div id="template-if83" className="gjs-row">
        <div id="template-i2bi" title="student" className="gjs-cell">
            <label id="template-i6v6">name</label>
        </div>
        <div id="template-ivja" className="gjs-cell">
            <label id="template-ijx5">age</label>
        </div>
    </div>
    <button type="button" id="template-i151l" className="btn btn-primary "></button>
</div>
    </>
    );
    };
    };

    export default Demoapp;