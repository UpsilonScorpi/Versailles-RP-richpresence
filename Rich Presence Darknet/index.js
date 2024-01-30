var rpc = require("discord-rpc")
rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
            details : "Dictateur de l'illégal 🔱",
            state : "Ne pas déranger ⛔",
            assets : {
                large_image : "logo_illegal_rp",
                large_text : "Darknet",
                small_image : "anonymous_rp",
                small_text : "🔱"
            },
            buttons : [
                {label : "🧷Discord [Alta RP] Illégal" , url : "https://discord.gg/4YXeP5wvwZ"}
            ]
        }
    })
});

client.login({ clientId : "1179726218531197048" }).catch(console.error);