export type DownloadedFile = {
    r_port: number,
    host_name: string,
    file_path: string,
    l_port: number,
    r_ip: string,
    l_ip: string,
    status: boolean,
    file_size: string,
    id: string,
}

export async function getMachineNames() {
    const res = await fetch("https://mf6bgss2r6.execute-api.us-east-1.amazonaws.com/V1/downloadedFiles", { cache: 'no-store' })
    const results = await res.json()
    
    const machineNames: any = {}
    
    results.forEach((item: DownloadedFile) => {
        if (!machineNames[item.host_name]) {
            machineNames[item.host_name] = [item];
        } else {
            machineNames[item.host_name].push(item);
        }
    });

    return machineNames    
}

export async function getMachineByName(name: string) {
    const res = await fetch(`https://mf6bgss2r6.execute-api.us-east-1.amazonaws.com/V1/downloadedFiles/domain/${name}`, { cache: 'no-store' })
    const results = await res.json()
    
    return results
}

export async function subscribeToTopic(name: string) {
    const res = await fetch(`https://mf6bgss2r6.execute-api.us-east-1.amazonaws.com/V1/subscribe/${name}`, { cache: 'no-store' })
    const results = await res.json()
    
    return results
}