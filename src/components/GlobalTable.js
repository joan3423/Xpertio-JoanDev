import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useTable, usePagination, useSortBy } from 'react-table';
import ButtonFilters from './globalTableProperties/ButtonFilters';
import DatatablePagination from './globalTableProperties/Pagination';
import TableContent from './globalTableProperties/TableContent';

function Table({
    columns,
    allData,
    defaultPageSize = 5,
    buttonActivator,
    isCollapsible,
    clickableZone,
    clickFunction,
    tableClasses,
    classSearchPropertie,
    tableHeader
}) {

    const [search, setSearch] = useState('');
    const [data, setAllData] = useState(allData)

    const stringSearch = search.toString()
    console.log(allData)

    useEffect(() => {
        const thefilter = allData.filter((itemsFiltered) => {
            const newArray = Object.values(itemsFiltered);
            console.log(newArray)
            if (search === "") {
                return itemsFiltered
            }
            for (let i = 0; i < newArray.length; i++) {
                if (newArray[i] && newArray[i].toString().toLowerCase().includes(stringSearch.toLowerCase())) {
                    return itemsFiltered
                }
            }
            return false
        })
        setAllData(thefilter)
    }, [search])
    const {
        getTableProps,
        getTableBodyProps,
        prepareRow,
        headerGroups,
        page,
        canPreviousPage,
        canNextPage,
        pageCount,
        gotoPage,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: defaultPageSize },
        },
        useSortBy,
        usePagination
    );
    
    /* pagination */

    const [pageState, setPageState] = useState(page);

    const getSafePage = (_page) => {
        let p = _page;
        if (Number.isNaN(_page)) {
            p = page;
        }
        return Math.min(Math.max(p, 0), pageCount - 1);
    };
    const changePage = (_page) => {
        const p = getSafePage(_page);

        if (p !== pageState) {
            setPageState(p);
            gotoPage(p);
        }
    };

    return (
        <Card className="responsive-table">
            <ButtonFilters
                buttonActivator={buttonActivator}
                changePage={changePage}
                setSearch={setSearch}
                classSearchPropertie={classSearchPropertie}
            />
            <TableContent
                page={page}
                headerGroups={headerGroups}
                buttonActivator={buttonActivator}
                defaultPageSize={defaultPageSize}
                isCollapsible={isCollapsible}
                clickableZone={clickableZone}
                clickFunction={clickFunction}
                tableHeader={tableHeader}
                getTableProps={getTableProps}
                getTableBodyProps={getTableBodyProps}
                prepareRow={prepareRow}
                setSearch={setSearch}
                changePage={changePage}
                tableClasses={tableClasses}
            />
            <DatatablePagination
                page={pageIndex}
                pages={pageCount}
                pageState={pageState}
                paginationMaxSize={pageCount}
                canPrevious={canPreviousPage}
                canNext={canNextPage}
                defaultPageSize={pageSize}
                setPageState={setPageState}
                changePage={changePage}
            />
        </Card>
    );
}
export const GlobalTable = ({
    dataTable,
    colsComponent,
    buttonActivator,
    isCollapsible,
    classNameVariant,
    clickableZone,
    clickFunction,
    tableClasses,
    classSearchPropertie,
    tableHeader
}) => {
    const cols = React.useMemo(
        () => colsComponent,
        []
    );
    return (
        <div className={`${classNameVariant} mb-4`}>
            <Table
                columns={cols}
                allData={dataTable}
                buttonActivator={buttonActivator}
                isCollapsible={isCollapsible}
                clickableZone={clickableZone}
                clickFunction={clickFunction}
                tableClasses={tableClasses}
                classSearchPropertie={classSearchPropertie}
                tableHeader={tableHeader}
            />
        </div>
    );
};