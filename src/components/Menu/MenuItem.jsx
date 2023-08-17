import { Backlog } from "../Backlog/Backlog";
import { Table } from "../Table/Tables";

export function MenuItem({menu}) {
    switch(menu){
        case 1:
            return <Table/>;
        case 2:
            return <Backlog/>
        default:
            return null;
    }
}