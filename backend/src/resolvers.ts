
import * as fs from 'fs';
import path from 'path';


//GRAPHQL-RESOLVER
export const resolvers = {

    Query: {
        oneClient: (_: any, { id }: { id: string }): Client | null => {
            const client = clientsData.find((c) => c.id === id);
            return client || null;
        },

        allClients: (): Client[] => {
            return clientsData;
        }
    }

}


interface AdditionalInfo {
    gender?: string;
    company: string;
    email: string;
    phone: string;
    address: string;
}


interface Client {
    id: string;
    name: string;
    age: number;
    gender?: string;
    additionalInfo: AdditionalInfo;
}


interface ClientsResult {
    clients: Client[];
}


function readData(): ClientsResult {
    const dataPath = path.join(__dirname, 'data.json');
    const rawData = fs.readFileSync(dataPath);
    const data = JSON.parse(rawData.toString());
    return data;
}


const clientsData: Client[] = readData().clients;