import pino from "pino";

const transport = pino.transport({
    target: "pino-pretty",
    options: {
        colorize: true,
    },
});

export default pino(transport);
