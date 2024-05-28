import React from "react";

import Table from "../../components/Table"
import { getMachineByName } from "../../utils/utils"

export default async function Page({ params }: { params: { name: string } }) {
    const items = await getMachineByName(params.name)
    
    return <Table items={items}/>
  }