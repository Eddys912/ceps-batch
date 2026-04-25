import pino from 'pino';

const nodeEnv = process.env.NODE_ENV || 'development';

const logger = pino({
  level: nodeEnv === 'development' ? 'debug' : 'info',
  transport:
    nodeEnv === 'development'
      ? {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'SYS:HH:MM:ss',
            ignore: 'pid,hostname',
            singleLine: true,
          },
        }
      : undefined,
});

export default logger;
