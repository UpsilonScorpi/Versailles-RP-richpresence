var rpc = require("discord-rpc")
rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
            details : "...",
            state : "...",
            assets : {
                large_image : "...",
                large_text : "...",
                small_image : "...",
                small_text : "..."
            },
            buttons : [
                {label : "..." , url : "..."},
                {label : "..." , url : "..."}
            ]
        }
    })
});

client.login({ clientId : "###" }).catch(console.error);