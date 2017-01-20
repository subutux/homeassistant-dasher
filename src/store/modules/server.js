import * as types from '../mutation-types'
import { createConnection } from 'home-assistant-js-websocket'
const state = {
    host: "localhost",
    port: 443,
    auth: "",
    ssl: true,
    connection: null
}

const getters = {
    url: function(state) {
        var url = (state.ssl) ? "wss" : "ws"
        url += '://' + state.host
        url += (state.port > 0) ? ':'+state.port : ""
        return url
    },
    host: state => state.host,
    port: state => state.port,
    auth: state => state.auth,
    ssl: state => state.ssl
}

const mutations = {
    [types.SET_URL] (state,url) {
        var tmp = url.split(':')
        state.ssl = (tmp[0]  == 'wss') ? true : false
        state.server = tmp.substring(3)
        state.port = (tmp.length == 3) ? Number(tmp[2]) : 0
    },
    [types.CONNECT] (state,connection) {
        
        state.connection = connection
    },
    [types.DISCONNECT] (state) {
        
        state.connection = null
    }
    
}

const actions = {
    Connect ({ commit, state, getters }) {
        var options = {}
        if (state.auth != "") {
            options.authToken = state.auth
        }
        commit(types.CONNECT,createConnection(getters.url))
    },
    Disconnect ({ commit, state }) {
        // remove the state 
        state.connection.addEventListener('disconnected'), conn => {
            commit(types.DISCONNECT)
        }
        state.connection.close()
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}