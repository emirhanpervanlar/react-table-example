import { useState } from 'react';

import './App.css';

import table from './data/table.json'
import head from './data/head.json'

import HeadItem from './components/HeadItem';
import TableItem from './components/TableItem';

function App() {

  // Head checkbox click
  const [headData, setHeadData] = useState(head);
  const headClick = (index) => {
    headData[index].checked = !headData[index].checked;
    setHeadData([ ...headData ]);
  }

  // Table checkbox click
  const [tableData, setTableData] = useState(table);
  const tableClick = (index) => {

    const tableItem = tableData[index];

    const findChild = table.filter((item) => { return item.parent == tableItem.id });
    findChild.map((item) => tableChildClick(table.indexOf(item),!tableData[index].checked));

    tableData[index].checked = !tableData[index].checked;
    setTableData([ ...tableData ]);

  }

  // Table parent trigger child checkbox click
  const tableChildClick  = (index,checked) => {

    const tableItem = tableData[index];

    const findChild = table.filter((item) => { return item.parent == tableItem.id });
    findChild.map((item) => tableChildClick(table.indexOf(item),checked));

    tableData[index].checked = checked;
    setTableData([ ...tableData ]);

  }

  // Handle show and hide 
  const handleShow = (index,parent=null) => {
    
    const tableItem = tableData[index];

    const findChild = table.filter((item) => { return item.parent == tableItem.id });
    findChild.map((item) => {
    
      tableData[table.indexOf(item)].show = (  parent != null ? parent : !tableData[table.indexOf(item)].show );
      
      handleShow(table.indexOf(item),( parent != null ? parent : !tableData[index].show))
      setTableData([ ...tableData ]);

    });

  }

  // Find show child
  const childCount = (index) => {
    return  tableData.filter((item) => { return item.parent == tableData[index].id }).length;
  }
    
  // Find show child
  const childShowCount = (index) => {
    return  tableData.filter((item) => { return item.parent == tableData[index].id && item.show }).length;
  }

  return (
    <div className="App">
     
      <div className="table">
        <div className="table-top">
          <div className="table-left">
          </div>
          <div className="table-right">
            <div className="table-right-head">
            
              {
                headData.map((item,index) => <HeadItem key={index} item={item} index={index} headClick={headClick} /> )
              }

            </div>
          </div>
        </div>

        <div className="table-bottom">
          <div className="table-left">
            <div className="table-left-items">
              {
                tableData.map((child,index) => <TableItem key={index} item={child} index={index} handleShow={handleShow} tableClick={tableClick} childShowCount={childShowCount} childCount={childCount} />)
              }
            </div>
          </div>
          <div className="table-right">

            <div className="table-right-items">
            
              {
                tableData.map((item,key) => 
                  <div className={"table-right-item"+ ( item.show ? ' table-right-item-show' : '')} key={key}>
                    {
                      head.map((titem,tkey) => 
                        <div className="table-right-item-cell" key={tkey}>s</div>
                      )
                    }
                  </div>
                )
              }

            </div>
          

          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
