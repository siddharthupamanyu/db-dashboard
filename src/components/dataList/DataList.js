import React from 'react'
import { CsvToHtmlTable } from 'react-csv-to-table';



export default function DataList(props) {


    const sampleData1 = `ELAPSED_TIME,SQL_ID,LOADED_VERSIONS,OPEN_VERSIONS,FETCHES,EXECUTIONS,LOADS,FIRST_LOAD_TIME,PARSE_CALLS,DISK_READS,BUFFER_GETS,ROWS_PROCESSED,PARSING_SCHEMA_NAME,PLAN_HASH_VALUE,MODULE,CPU_TIME,LAST_LOAD_TIME,SQL_PROFILE,LAST_ACTIVE_TIME
    36.2504895,d8nd0t8gk7rpf,1,0,0,8,1,2020-02-13/18:40:40,8,308504,3007189,8,EPD,0,DBMS_SCHEDULER,2.649328375,2020-02-13/18:40:40,,02/14/2020 01:10:22 AM
    24.882744,73629tmfbjzrh,1,0,0,1,1,2020-02-14/01:01:01,1,260079,266622,1,ORACLE_OCM,0,DBMS_SCHEDULER,4.281229,2020-02-14/01:01:01,,02/14/2020 01:01:26 AM
    15.071537,gt1wmqkfqgagj,1,0,2,1,1,2020-02-14/01:01:01,1,183376,185543,1,ORACLE_OCM,2257558958,DBMS_SCHEDULER,2.010046,2020-02-14/01:01:01,,02/14/2020 01:01:17 AM
    11.320477,5jvf84zg4c49n,1,0,36,1,1,2020-02-14/01:01:09,1,3751,104555,3580,COMP,631365923,plsqldev.exe,2.969273,2020-02-14/01:01:09,,02/14/2020 01:01:21 AM
    15.071537,gt1wmqkfqgagj,1,0,2,1,1,2020-02-14/01:01:01,1,183376,185543,1,ORACLE_OCM,2257558958,DBMS_SCHEDULER,2.010046,2020-02-14/01:01:01,,02/14/2020 01:01:17 AM
    11.320477,5jvf84zg4c49n,1,0,36,1,1,2020-02-14/01:01:09,1,3751,104555,3580,COMP,631365923,plsqldev.exe,2.969273,2020-02-14/01:01:09,,02/14/2020 01:01:21 AM
    7.76572,4h79rqxrqzp9h,1,0,1,1,1,2020-02-14/01:01:18,1,73449,73714,1,ORACLE_OCM,2202817437,DBMS_SCHEDULER,1.960309,2020-02-14/01:01:18,,02/14/2020 01:01:26 AM
    7.10726475,96b4kkqsv2nr7,1,0,776,8,1,2020-02-13/18:40:40,8,235869,239586,77504,EPD,2464977046,DBMS_SCHEDULER,.437058875,2020-02-13/18:40:40,,02/14/2020 01:10:21 AM
    6.0789935,f5yun5dynkskv,1,0,76,2,1,2020-02-13/21:56:26,2,8015,210745,7545,EPD,631365923,plsqldev.exe,2.653304,2020-02-13/21:56:26,,02/14/2020 01:10:32 AM
    `;

    const sampleData2 = `ELAPSED_TIME,SQL_ID,LOADED_VERSIONS,OPEN_VERSIONS,FETCHES,EXECUTIONS,LOADS,FIRST_LOAD_TIME,PARSE_CALLS,DISK_READS,BUFFER_GETS,ROWS_PROCESSED,PARSING_SCHEMA_NAME,PLAN_HASH_VALUE,MODULE,CPU_TIME,LAST_LOAD_TIME,SQL_PROFILE,LAST_ACTIVE_TIME
    36.2504895,d8nd0t8gk7rpf,1,0,0,8,1,2020-02-13/18:40:40,8,308504,3007189,8,EPD,0,DBMS_SCHEDULER,2.649328375,2020-02-13/18:40:40,,02/14/2020 01:10:22 AM
    24.882744,73629tmfbjzrh,1,0,0,1,1,2020-02-14/01:01:01,1,260079,266622,1,ORACLE_OCM,0,DBMS_SCHEDULER,4.281229,2020-02-14/01:01:01,,02/14/2020 01:01:26 AM
    15.071537,gt1wmqkfqgagj,1,0,2,1,1,2020-02-14/01:01:01,1,183376,185543,1,ORACLE_OCM,2257558958,DBMS_SCHEDULER,2.010046,2020-02-14/01:01:01,,02/14/2020 01:01:17 AM
    11.320477,5jvf84zg4c49n,1,0,36,1,1,2020-02-14/01:01:09,1,3751,104555,3580,COMP,631365923,plsqldev.exe,2.969273,2020-02-14/01:01:09,,02/14/2020 01:01:21 AM
    `;
    return (
        <React.Fragment>
            <h2>EPDD Full Table Scan</h2>
            <CsvToHtmlTable
                data={sampleData1}
                csvDelimiter=","
                tableClassName="table table-striped table-hover"
            />
            <h2>EPDD Queries taking more than 10 secs</h2>
            <CsvToHtmlTable
                data={sampleData2}
                csvDelimiter=","
                tableClassName="table table-striped table-hover"
            />
        </React.Fragment>
    );

    // constructor(props) {
    //     super(props)
    //     this.fileInput = React.createRef()
    //     this.state = { showData: false, data: []}
    //         this.columns = [{
    //             dataField: 'ELAPSED_TIME',
    //             text: 'ELAPSED_TIME'
    //         },
    //         {
    //             dataField: 'SQL_ID',
    //             text: 'SQL_ID'
    //         },
    //         {
    //             dataField: 'LOADED_VERSIONS',
    //             text: 'LOADED_VERSIONS'
    //         },
    //         {
    //             dataField: 'OPEN_VERSIONS',
    //             text: 'OPEN_VERSIONS'
    //         },
    //         {
    //             dataField: 'FETCHES',
    //             text: 'FETCHES'
    //         },
    //         {
    //             dataField: 'EXECUTIONS',
    //             text: 'EXECUTIONS'
    //         },
    //         {
    //             dataField: 'LOADS',
    //             text: 'LOADS'
    //         },
    //         {
    //             dataField: 'FIRST_LOAD_TIME',
    //             text: 'FIRST_LOAD_TIME'
    //         },
    //         {
    //             dataField: 'PARSE_CALLS',
    //             text: 'PARSE_CALLS'
    //         },
    //         {
    //             dataField: 'DISK_READS',
    //             text: 'DISK_READS'
    //         },
    //         {
    //             dataField: 'BUFFER_GETS',
    //             text: 'BUFFER_GETS'
    //         },
    //         {
    //             dataField: 'ROWS_PROCESSED',
    //             text: 'ROWS_PROCESSED'
    //         },
    //         {
    //             dataField: 'PARSING_SCHEMA_NAME',
    //             text: 'PARSING_SCHEMA_NAME'
    //         },
    //         {
    //             dataField: 'PLAN_HASH_VALUE',
    //             text: 'PLAN_HASH_VALUE'
    //         },
    //         {
    //             dataField: 'MODULE',
    //             text: 'MODULE'
    //         },
    //         {
    //             dataField: 'CPU_TIME',
    //             text: 'CPU_TIME'
    //         },
    //         {
    //             dataField: 'LAST_LOAD_TIME',
    //             text: 'LAST_LOAD_TIME'
    //         },
    //         {
    //             dataField: 'SQL_PROFILE',
    //             text: 'SQL_PROFILE'
    //         },
    //         {
    //             dataField: 'LAST_ACTIVE_TIME',
    //             text: 'LAST_ACTIVE_TIME'
    //         }];
    // }

    // handleReadCSV = (data) => {
    //     console.log(data);
    //     const newData = data.data;
    //     console.log(data.meta.delimiter)
    //     this.setState({...this.state, showData: true, data: newData});
    // }

    // handleOnError = (err, file, inputElem, reason) => {
    //     console.log(err)
    // }

    // handleImportOffer = () => {
    //     console.log(this.fileInput.current);
    //     this.fileInput.current.click()
    // }

    // render() {
    //     if (this.state.showData) {
    //         return (<>
    //             <BootstrapTable keyField='SQL_ID' data={this.state.data} columns={this.columns} /* options={this.options}*/ bordered={false} striped hover condensed>
    //             </BootstrapTable>
    //         </>)
    //     }
    //     return (
    //         <>
    //             <CSVReader
    //                 onFileLoaded={this.handleReadCSV}
    //                 inputRef={this.fileInput}
    //                 style={{ display: 'none' }}
    //                 onError={this.handleOnError}
    //             />
    //             <button onClick={this.handleImportOffer}>Import</button>

    //         </>
    //     )
    //}
}
