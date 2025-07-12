import Mux from "@mux/mux-node";


export const mux = new Mux({
    tokenId: process.env.MUSK_TOKEN_ID,
    tokenSecret: process.env.MUSK_TOKEN_SECRET_KEY,
})