import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useTable, usePagination, useSortBy } from 'react-table';
import ButtonFilters from './globalTableProperties/ButtonFilters';
import DatatablePagination from './globalTableProperties/Pagination';
import TableContent from './globalTableProperties/TableContent';

function Table({ columns, allData, defaultPageSize = 5, buttonActivator }) {

    const [search, setSearch] = useState("");
    const [data, setAllData] = useState(allData)

    useEffect(() => {
        const thefilter = allData.filter((itemsFiltered) => {
            const newArray = Object.values(itemsFiltered);
            if (search === "") {
                return itemsFiltered
            }
            if (newArray[0] && newArray[0].toString().toLowerCase().includes(search.toLowerCase())
                || newArray[1] && newArray[1].toString().toLowerCase().includes(search.toLowerCase())
                || newArray[2] && newArray[2].toString().toLowerCase().includes(search.toLowerCase())
                || newArray[3] && newArray[3].toString().toLowerCase().includes(search.toLowerCase())) {
                return itemsFiltered
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
            />
            <TableContent
                page={page}
                headerGroups={headerGroups}
                buttonActivator={buttonActivator}
                defaultPageSize={defaultPageSize}
                getTableProps={getTableProps}
                getTableBodyProps={getTableBodyProps}
                prepareRow={prepareRow}
                setSearch={setSearch}
                changePage={changePage}
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
export const GlobalTable = ({ dataTable, colsComponent, buttonActivator }) => {
    const cols = React.useMemo(
        () => colsComponent,
        []
    );
    return (
        <div className="mb-4">
            <Table columns={cols} allData={dataTable} buttonActivator={buttonActivator} />
        </div>
    );
};