import { TableRows } from "./TableRows"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export const TableBlock = () => {
    return(
        <>
            <TableContainer sx={{maxHeight: "85vh"}}>
                <Table sx={{minWidth: 650, marginBottom: 10}} stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Дата регистрации компании</TableCell>
                            <TableCell>Название подписи компании</TableCell>
                            <TableCell>Название документа</TableCell>
                            <TableCell>Статус документа</TableCell>
                            <TableCell>Тип документа</TableCell>
                            <TableCell>Номер сотрудника</TableCell>
                            <TableCell>Дата регистрации сотрудника</TableCell>
                            <TableCell>Дата регистрации компании</TableCell>
                            <TableCell>Имя подписи сотрудника</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRows></TableRows>
                    </TableBody>
                </Table>
            </TableContainer>

        </>
        
    )
}