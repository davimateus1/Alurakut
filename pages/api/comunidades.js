import { SiteClient } from 'datocms-client';

export default async function recebeRequests (request, response) {

    if(request.method === 'POST') {
        const TOKEN = '1989c98c8d1efb671bf184d798997d'; 
        const client = new SiteClient(TOKEN);
    
        const registroCriado = await client.items.create({
            itemType: "971587", // ID do modelo de comunidades criado pelo datoCMS 
            ...request.body,   
        })
    
        response.json({
            dados: 'algum dado',
            registroCriado: registroCriado,
        })

        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST sim.'
    })
}