import React, { useEffect } from 'react';
import * as msTeams from '@microsoft/teams-js';

export default function useMicrosoftTeamsContext()  {
    const [context, setContext] = React.useState<msTeams.app.Context>();

    async () => {
        setContext(await msTeams.app.getContext())
    }


    return {context}
}