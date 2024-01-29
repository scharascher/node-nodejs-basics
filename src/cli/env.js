const parseEnv = () => {
    const envEntries = Object.entries(process.env);
    const filteredEnvEntries = envEntries.filter(([key]) => key.startsWith('RSS_'));
    const result = filteredEnvEntries.map(([key, value]) => `${key}=${value}`).join('; ')
    console.log(result);
};

parseEnv();